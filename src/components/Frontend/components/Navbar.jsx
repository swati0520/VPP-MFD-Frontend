import { useEffect, useState } from "react";
import cn from "clsx";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import GetStartedButton from "./GetStartedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
      <motion.nav
        className={cn(
          "relative w-full overflow-visible rounded-[2rem] border px-4 transition-all duration-500 sm:px-6 lg:px-8",
          "bg-slate-950/45 shadow-[0_24px_90px_rgba(2,6,23,0.42)] backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/28",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2rem] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_26%,rgba(45,212,191,0.10)_68%,transparent)] before:opacity-80",
          "after:pointer-events-none after:absolute after:inset-x-12 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-transparent after:via-teal-300/60 after:to-transparent",
          isScrolled
            ? "border-teal-200/20 shadow-[0_24px_90px_rgba(2,6,23,0.58),0_0_45px_rgba(20,184,166,0.12)]"
            : "border-white/12 shadow-[0_24px_90px_rgba(2,6,23,0.36),0_0_55px_rgba(20,184,166,0.10)]"
        )}
        initial={{ opacity: 0, y: -24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative z-10 mx-auto flex min-h-24 max-w-7xl flex-wrap items-center justify-between gap-3 py-3 lg:min-h-[5.5rem] lg:flex-nowrap lg:gap-4 lg:py-0"
        >
          <motion.div
            className="order-1"
            whileHover={{ scale: 1.04, y: -1 }}
            transition={{ type: "spring", stiffness: 360, damping: 22 }}
          >
            <Logo />
          </motion.div>

          <NavLinks />

          <div className="order-2 lg:order-3">
            <GetStartedButton />
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
