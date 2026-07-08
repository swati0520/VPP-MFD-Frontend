import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Moon,
  Sun,
  ChevronDown,
  UserCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Header({ theme, onToggleTheme, onToggleSidebar }) {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [profile, setProfile] = useState(false);

  const email = localStorage.getItem("vpp-auth-email") || "admin@example.com";
  const token = localStorage.getItem("vpp-token");

const logout = async () => {
  await axios.post(
    `${API_URL}/auth/logout`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  localStorage.clear();
  navigate("/admin/login");
};

  return (
    <>
      <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b bg-[#EFF6FF] px-8 dark:bg-[#161622]">
        <button onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>

        <div className="relative flex items-center gap-4">
          <button onClick={onToggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2 dark:bg-[#111827]"
          >
            <div className="h-10 w-10 rounded-full bg-sky-500" />
            <ChevronDown size={18} />
          </button>

          {dropdown && (
            <div className="absolute right-0 top-14 w-44 rounded-xl border bg-white shadow-lg dark:bg-[#111827]">
              <button
                onClick={() => {
                  setProfile(true);
                  setDropdown(false);
                }}
                className="flex w-full items-center gap-2 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <UserCircle size={18} /> Profile
              </button>

              <button
                onClick={() => navigate("/admin/settings")}
                className="flex w-full items-center gap-2 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Settings size={18} /> Settings
              </button>

              <button
                onClick={logout}
                className="flex w-full items-center gap-2 border-t p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {profile && (
        <div
          onClick={() => setProfile(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-96 rounded-xl bg-white p-6 dark:bg-[#111827]"
          >
            <div className="mb-5 flex justify-between">
              <h2 className="font-semibold">Profile</h2>
              <button onClick={() => setProfile(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
                {email[0].toUpperCase()}
              </div>

              <div>
                <p className="font-semibold">Admin User</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
