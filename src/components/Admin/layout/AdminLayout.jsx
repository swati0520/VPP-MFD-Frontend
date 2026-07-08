import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const currentPath =
    location.pathname === "/admin"
      ? "dashboard"
      : location.pathname.replace(/^\/admin\/?/, "");
  const pageTitle = currentPath.replace(/-/g, " ");

  return (
    <div
      className={`h-screen overflow-hidden ${theme === "light"
        ? "bg-gradient-to-br from-[#ffffff] via-[#F8FCFF] to-[#EAF6FF]"
        : "bg-[#0B0B0F]"
        } font-sans transition-colors duration-500`}
    >
      <div className="flex h-full">
        <aside className={`${isSidebarOpen ? "w-64" : "w-20"} flex-shrink-0 bg-[#EFF6FF] dark:bg-[#111827] border-r border-[#BFDBFE] dark:border-[#1E3A8A] transition-all duration-300 hidden md:flex flex-col overflow-y-auto`}>
          <Sidebar isOpen={isSidebarOpen} />
        </aside>

        <div className="flex-1 flex flex-col min-h-0">
          <Header
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            theme={theme}
            onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          />

          <main className="flex-1 min-h-0 overflow-y-auto p-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h1
                  className={`text-3xl font-bold capitalize ${theme === "light"
                      ? "text-[#4b86ba]"
                      : "text-[#E0F2FE]"
                    }`}
                >
                  {pageTitle}
                </h1>
              </div>
              <Outlet />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
