import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GetStartedButton = () => {
  return (
    <motion.button
      type="button"
      className="group relative overflow-hidden rounded-full border border-teal-200/35 bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_16px_46px_rgba(20,184,166,0.36),inset_0_1px_0_rgba(255,255,255,0.58)] outline-none sm:px-6"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 360, damping: 20 }}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.75),transparent_42%)]" />
      <span className="relative z-10 flex items-center gap-2">
        Kushal Connection
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.button>
  );
};

export default GetStartedButton;
