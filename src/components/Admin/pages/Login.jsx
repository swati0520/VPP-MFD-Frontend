import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthLayout from "./AuthLayout";
import SweetAlert from "../../../common/SweetAlert";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;
const ACCOUNT_NOT_FOUND_MESSAGE = "Account not found. Please sign up first.";

const getMessageFromValue = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(getMessageFromValue).filter(Boolean).join(" ");
  }

  if (typeof value === "object") {
    return Object.values(value).map(getMessageFromValue).filter(Boolean).join(" ");
  }

  return "";
};

const getApiErrorMessage = (error, fallback = "Login failed. Please try again.") => {
  const data = error?.response?.data;
  const message =
    getMessageFromValue(data?.message) ||
    getMessageFromValue(data?.error) ||
    getMessageFromValue(data?.errors) ||
    getMessageFromValue(data);

  return message || error?.message || fallback;
};

const getApiSuccessMessage = (data, fallback = "Login successful.") => {
  return (
    getMessageFromValue(data?.message) ||
    getMessageFromValue(data?.success) ||
    fallback
  );
};

const getAuthToken = (data) => {
  return (
    data?.token ||
    data?.jwt ||
    data?.accessToken ||
    data?.data?.token ||
    data?.data?.jwt ||
    data?.data?.accessToken ||
    ""
  );
};

const getAuthUser = (data, fallbackEmail) => {
  return (
    data?.admin ||
    data?.data?.admin ||
    data?.user ||
    data?.data?.user ||
    data?.userData ||
    data?.data?.userData ||
    { email: fallbackEmail }
  );
};

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async (data) => {
    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });
      const responseData = response.data || {};
      const token = getAuthToken(responseData);
      const user = getAuthUser(responseData, data.email);
      const successMessage = getApiSuccessMessage(responseData, "Login successful.");

      if (!token) {
        throw new Error("Login successful, but token was not received.");
      }

      localStorage.setItem("vpp-authenticated", "true");
      localStorage.setItem("vpp-auth-email", user?.email || data.email);
      localStorage.setItem("vpp-token", token);
      localStorage.setItem("vpp-user", JSON.stringify(user));

      setMessage(successMessage);
      setMessageType("success");

      await SweetAlert({
        type: "success",
        title: "Login Successful",
        text: successMessage,
      });

      navigate("/admin/dashboard");
    } catch (error) {
      const errorMessage = getApiErrorMessage(error, "Login failed. Please try again.");
      const status = error?.response?.status;

      setMessage(errorMessage);
      setMessageType("error");

      if (status === 404 && errorMessage === ACCOUNT_NOT_FOUND_MESSAGE) {
        await SweetAlert({
          type: "warning",
          title: "Account Not Found",
          text: errorMessage,
          timer: null,
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        });

        navigate("/admin/signup");
        return;
      }

      await SweetAlert({
        type: "error",
        title: status === 401 ? "Invalid Credentials" : "Login Failed",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to access admin"
    >
      <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#4A044E] dark:text-[#FFFFFF] uppercase">
            Email
          </label>

          <input
            {...register("email")}
            type="email"
            required
            className="w-full mt-1 p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none focus:ring-2 focus:ring-[#EC4899]"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#4A044E] dark:text-[#FFFFFF] uppercase">
            Password
          </label>

          <div className="relative mt-1">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              required
              className="w-full p-3 pr-12 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none focus:ring-2 focus:ring-[#EC4899]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-[#0EA5E9] dark:text-[#60A5FA]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full mt-4" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        {message && (
          <p
            className={`text-center text-sm font-medium ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-center mt-6 text-[#6B7280] dark:text-[#D1D5DB] text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/admin/signup")}
          className="text-[#0EA5E9] font-bold"
        >
          Sign up
        </button>
      </p>
    </AuthLayout>
  );
}
