import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-[#0EA5E9] dark:bg-[#2563EB] text-white hover:opacity-90",
    secondary: "bg-[#38BDF8] dark:bg-[#0EA5E9] text-white hover:opacity-90",
    ghost: "text-[#6B7280] dark:text-[#D1D5DB] hover:bg-[#DBEAFE] dark:hover:bg-[#1E3A8A]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-4 py-2 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
