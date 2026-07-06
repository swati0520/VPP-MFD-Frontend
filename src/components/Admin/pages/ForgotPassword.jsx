import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthLayout from "./AuthLayout";

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to reset your password"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <Button type="submit" className="w-full mt-4">
          Send Reset Link
        </Button>
      </form>

      <p className="text-center mt-6 text-[#6B7280] dark:text-[#D1D5DB] text-sm">
        Remembered your password?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-[#0EA5E9] font-bold"
        >
          Login
        </button>
      </p>
    </AuthLayout>
  );
}
