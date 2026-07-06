import { motion } from "framer-motion";

export default function AuthLayout({
  children,
  title,
  subtitle,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF5F7] dark:bg-[#0B0B0F] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-[#1B1B2B] p-8 rounded-3xl border border-[#F9A8D4] dark:border-[#3B2F5C] shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#4A044E] dark:text-white">
            {title}
          </h1>

          <p className="text-[#6B7280] dark:text-[#D1D5DB] mt-2">
            {subtitle}
          </p>
        </div>

        {children}
      </motion.div>
    </div>
  );
}
