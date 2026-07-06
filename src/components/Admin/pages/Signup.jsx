import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthLayout from "./AuthLayout";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
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

          <input
            {...register("password")}
            type="password"
            required
            className="w-full mt-1 p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#F9A8D4] dark:border-[#3B2F5C] outline-none"
          />
        </div>

        <Button type="submit" className="w-full mt-4">
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-6 text-[#6B7280] dark:text-[#D1D5DB] text-sm">
        Already have an account?{" "}
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