import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-50";

const variants = {
  primary: "bg-teal-500 text-white shadow-teal-900/10 hover:bg-teal-600 hover:shadow-lg",
  secondary: "border border-slate-600 bg-slate-950 text-white hover:bg-slate-800",
  ghost: "border border-slate-200 bg-white text-slate-900 hover:border-teal-200 hover:text-teal-700 hover:shadow-lg",
};

export default function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  showIcon = true,
  className = "",
  ...props
}) {
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;
  const content = (
    <>
      {children}
      {showIcon && <ArrowRight size={16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
