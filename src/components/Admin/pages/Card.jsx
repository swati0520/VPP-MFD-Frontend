import { motion } from "framer-motion";

const Card = ({ title, children, className = "", actions }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className={`bg-[#FFFFFF] dark:bg-[#1B1B2B] border border-[#BFDBFE] dark:border-[#3B2F5C] rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 ${className}`}
  >
    {title && (
      <div className="px-6 py-5 border-b border-[#BFDBFE] dark:border-[#3B2F5C] flex justify-between items-center">
        <h3 className="font-bold text-[#4A044E] dark:text-[#FFFFFF]">{title}</h3>
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
    )}
    <div className="p-6">{children}</div>
  </motion.div>
);

export default Card;
