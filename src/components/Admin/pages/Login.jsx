import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthLayout from "./AuthLayout";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = (data) => {
    console.log(data);
    localStorage.setItem("vpp-authenticated", "true");
    localStorage.setItem("vpp-auth-email", data.email);
    navigate("/dashboard");
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

          <input
            {...register("password")}
            type="password"
            required
            className="w-full mt-1 p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none focus:ring-2 focus:ring-[#EC4899]"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-[#0EA5E9] dark:text-[#60A5FA] font-medium"
        >
          Forgot Password?
        </button>

        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>

      <p className="text-center mt-6 text-[#6B7280] dark:text-[#D1D5DB] text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-[#0EA5E9] font-bold"
        >
          Sign up
        </button>
      </p>
    </AuthLayout>
  );
}