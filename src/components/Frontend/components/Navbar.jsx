import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  GraduationCap,
  Home,
  Images,
  Menu,
  Newspaper,
  Phone,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/VppMfdLogo.png";

const navLinks = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About", path: "/about", Icon: UserRound },
  { name: "Services", path: "/services", Icon: BriefcaseBusiness },
  { name: "Careers", path: "/careers", Icon: GraduationCap },
  { name: "VPP Trade Hub", path: "/trade-hub", Icon: Building2 },
  { name: "Gallery", path: "/gallery", Icon: Images },
  { name: "Blogs", path: "/blogs", Icon: Newspaper },
  { name: "VPP Disha", path: "/disha", Icon: Compass },
  { name: "Contact", path: "/contact", Icon: Phone },
];

function DesktopNavItem({ link }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setHovered] = useState(false);
  const isActive = location.pathname === link.path;
  const showLabel = isActive || isHovered;
  const Icon = link.Icon;

  return (
    <motion.button
      type="button"
      onClick={() => navigate(link.path)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-[4.6rem] w-14 flex-none flex-col items-center justify-start pt-1 outline-none"
      whileHover={{ y: -6, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      aria-label={link.name}
    >
      <motion.span
        className="absolute top-0 h-12 w-12 rounded-2xl border"
        animate={{
          opacity: isActive || isHovered ? 1 : 0,
          scale: isActive || isHovered ? 1 : 0.78,
        }}
        transition={{ duration: 0.25 }}
        style={{
          borderColor: isActive ? "rgba(45, 212, 191, 0.45)" : "rgba(255,255,255,0.14)",
          background:
            isActive || isHovered
              ? "linear-gradient(135deg, rgba(20,184,166,0.18), rgba(59,130,246,0.10))"
              : "transparent",
          boxShadow: isActive
            ? "0 0 32px rgba(20,184,166,0.48), 0 10px 34px rgba(20,184,166,0.18), inset 0 1px 0 rgba(255,255,255,0.18)"
            : "0 12px 34px rgba(15,23,42,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      />
      <span className="relative z-10 flex h-12 w-12 items-center justify-center">
        <Icon
          size={22}
          strokeWidth={1.9}
          className={`transition-colors duration-300 ${
            isActive || isHovered ? "text-teal-300 drop-shadow-[0_0_12px_rgba(45,212,191,0.55)]" : "text-slate-300"
          }`}
        />
      </span>
      <AnimatePresence>
        {showLabel && (
          <motion.span
            className="pointer-events-none mt-1 max-w-20 whitespace-nowrap text-center text-[11px] font-semibold leading-none tracking-wide text-teal-100"
            initial={{ opacity: 0, y: -5, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(3px)" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {link.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 px-3 pt-0 sm:px-5">
      <motion.nav
        className={clsx(
          "relative w-full overflow-hidden rounded-[2rem] border border-slate-950 bg-slate-950 px-4 transition-all duration-500 sm:px-6 lg:px-8",
          "shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
        )}
        initial={{ opacity: 0, y: -24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10 mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 py-3 lg:min-h-[5.5rem] lg:gap-4 lg:py-0">
          <Link to="/" className="order-1 flex items-center" aria-label="VPP MFD home">
            <img
              src={logo}
              alt="VPP MFD Logo"
              className="h-11 w-auto drop-shadow-[0_10px_26px_rgba(45,212,191,0.18)] transition duration-300 hover:brightness-110"
            />
          </Link>

          <div className="order-2 hidden w-auto lg:block">
            <div className="flex items-center gap-6 overflow-visible px-1 py-2 xl:gap-8">
              {navLinks.map((link) => (
                <DesktopNavItem key={link.name} link={link} />
              ))}
            </div>
          </div>

          <div className="order-3 hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => navigate("/kushal-connection")}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-teal-200/35 bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow outline-none transition hover:-translate-y-0.5 hover:shadow-lg sm:px-6"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kushal Connection
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          <div className="order-3 flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-600 bg-slate-900 text-slate-100 transition hover:border-teal-300 hover:text-teal-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="relative z-20 mx-auto max-w-7xl pb-4 lg:hidden"
            >
              <div className="grid gap-2 rounded-3xl border border-slate-800/90 bg-slate-950 p-3 shadow-2xl">
                {navLinks.map(({ name, path, Icon }) => {
                  const isActive = location.pathname === path;

                  return (
                    <Link
                      key={name}
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "border-teal-300/70 bg-teal-500/15 text-teal-200"
                          : "border-slate-700/80 bg-slate-950 text-slate-100 hover:border-teal-300 hover:bg-slate-900"
                      )}
                    >
                      <Icon size={18} className="text-teal-300" />
                      <span>{name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
