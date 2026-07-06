import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Moon, Sun, ChevronDown, UserCircle, LogOut, Settings, X } from "lucide-react";

export default function Header({ theme, onToggleTheme, onToggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("vpp-auth-email") || "admin@example.com";

  const handleLogout = () => {
    localStorage.removeItem("vpp-authenticated");
    localStorage.removeItem("vpp-auth-email");
    setDropdownOpen(false);
    setProfileModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <header className="h-20 bg-[#EFF6FF] dark:bg-[#161622] border-b border-[#BFDBFE] dark:border-[#1E3A8A] flex items-center justify-between px-8 sticky top-0 z-20">
        <button onClick={onToggleSidebar} className="text-[#4A044E] dark:text-[#FFFFFF]">
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-4 relative">
          <button onClick={onToggleTheme} className="p-2 rounded-lg bg-[#EFF6FF] dark:bg-[#0B0B0F]">
            {theme === "dark" ? (
              <Sun size={18} className="text-[#60A5FA]" />
            ) : (
              <Moon size={18} className="text-[#0EA5E9]" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-2xl bg-white dark:bg-[#111827] px-3 py-2 border border-[#BFDBFE] dark:border-[#1E3A8A] shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] dark:from-[#60A5FA] dark:to-[#22D3EE]" />
              <div className="hidden md:block text-left">
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Admin</p>
                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF]">Profile</p>
              </div>
              <ChevronDown size={18} className="text-[#0EA5E9]" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 rounded-3xl bg-white dark:bg-[#111827] border border-[#BFDBFE] dark:border-[#1E3A8A] shadow-2xl overflow-hidden">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    setProfileModalOpen(true);
                  }}
                  className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-[#EFF6FF] dark:hover:bg-[#111827]"
                >
                  <UserCircle size={18} className="text-[#0EA5E9]" />
                  <span className="text-sm text-[#0F172A] dark:text-[#FFFFFF]">Profile</span>
                </button>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/settings");
                  }}
                  className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-[#EFF6FF] dark:hover:bg-[#111827]"
                >
                  <Settings size={18} className="text-[#0EA5E9]" />
                  <span className="text-sm text-[#0F172A] dark:text-[#FFFFFF]">Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 flex items-center gap-3 border-t border-[#BFDBFE] dark:border-[#1E3A8A] hover:bg-[#EFF6FF] dark:hover:bg-[#111827]"
                >
                  <LogOut size={18} className="text-[#0EA5E9]" />
                  <span className="text-sm text-[#0F172A] dark:text-[#FFFFFF]">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {profileModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setProfileModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-[#BFDBFE] dark:border-[#1E3A8A] bg-white dark:bg-[#111827] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#0F172A] dark:text-[#FFFFFF]">Profile</h3>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="rounded-full p-2 text-[#64748B] hover:bg-[#EFF6FF] dark:hover:bg-[#1E3A8A]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-xl font-bold text-white">
                A
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF]">Admin User</p>
                <p className="text-sm text-[#64748B] dark:text-[#CBD5E1]">{email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}