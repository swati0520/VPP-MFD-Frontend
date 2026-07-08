import navLinks from "../data/navLinks";
import {
  BriefcaseBusiness,
  Building2,
  Compass,
  GraduationCap,
  Home,
  Images,
  Newspaper,
  Phone,
  UserRound,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const icons = {
  Home,
  About: UserRound,
  Services: BriefcaseBusiness,
  Careers: GraduationCap,
  "VPP Trade Hub": Building2,
  Gallery: Images,
  Blogs: Newspaper,
  "VPP Disha": Compass,
  Contact: Phone,
};

const NavLinks = () => {
  const [activeName, setActiveName] = useState("Home");
  const items = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        Icon: icons[link.name] || Home,
      })),
    []
  );

  return (
    <div className="order-3 flex w-full items-center gap-4 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center lg:order-2 lg:w-auto lg:gap-6 lg:overflow-visible xl:gap-8">
      {items.map(({ name, href, Icon }) => (
        <NavItem
          key={name}
          href={href}
          name={name}
          Icon={Icon}
          isActive={activeName === name}
          onActivate={() => setActiveName(name)}
        />
      ))}
    </div>
  );
};

const NavItem = ({ href, name, Icon, isActive, onActivate }) => {
  const [isHovered, setHovered] = useState(false);
  const showLabel = isActive || isHovered;

  return (
    <motion.a
      href={href}
      onClick={onActivate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-[4.6rem] w-14 flex-none flex-col items-center justify-start pt-1 outline-none"
      whileHover={{ y: -6, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      aria-label={name}
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
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default NavLinks;
