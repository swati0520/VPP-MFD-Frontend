import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthLayout from "./AuthLayout";
import SweetAlert from "../../../common/SweetAlert";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

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

const getApiErrorMessage = (
  error,
  fallback = "Registration failed. Please try again."
) => {
  const data = error?.response?.data;
  const message =
    getMessageFromValue(data?.message) ||
    getMessageFromValue(data?.error) ||
    getMessageFromValue(data?.errors) ||
    getMessageFromValue(data);

  return message || error?.message || fallback;
};

const getApiSuccessMessage = (data, fallback = "Registration successful.") => {
  return (
    getMessageFromValue(data?.message) ||
    getMessageFromValue(data?.success) ||
    fallback
  );
};

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await axios.post(`${API_URL}/auth/register`, data);
      const successMessage = getApiSuccessMessage(
        response.data,
        "Registration successful."
      );

      setMessage(successMessage);
      setMessageType("success");

      await SweetAlert({
        type: "success",
        title: "Registration Successful",
        text: successMessage,
      });

      navigate("/admin/login");
    } catch (error) {
      const errorMessage = getApiErrorMessage(
        error,
        "Registration failed. Please try again."
      );

      setMessage(errorMessage);
      setMessageType("error");

      await SweetAlert({
        type: "error",
        title: "Registration Failed",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join the VPP MFD admin ecosystem"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#4A044E] dark:text-[#FFFFFF] uppercase">
            Full Name
          </label>

          <input
            {...register("name")}
            type="text"
            required
            className="w-full mt-1 p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-[#4A044E] dark:text-[#FFFFFF] uppercase">
            Email
          </label>

          <input
            {...register("email")}
            type="email"
            required
            className="w-full mt-1 p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none"
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
              className="w-full p-3 pr-12 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none"
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
          {isLoading ? "Signing up..." : "Sign Up"}
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
        Already have an account?{" "}
        <button
          onClick={() => navigate("/admin/login")}
          className="text-[#0EA5E9] font-bold"
        >
          Login
        </button>
      </p>
    </AuthLayout>
  );
}
