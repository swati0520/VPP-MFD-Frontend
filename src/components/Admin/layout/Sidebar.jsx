import { NavLink } from "react-router-dom";
import {
  Activity,
  LayoutDashboard,
  Home,
  Info,
  Briefcase,
  Image,
  FileText,
  GraduationCap,
  Phone,
  Building2,
  MapPinned,
  Link,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Home", path: "/admin/home", icon: Home },
  { name: "About", path: "/admin/about", icon: Info },
  { name: "Services", path: "/admin/services", icon: Briefcase },
  { name: "Gallery", path: "/admin/gallery", icon: Image },
  { name: "Blogs", path: "/admin/blogs", icon: FileText },
  { name: "Careers", path: "/admin/careers", icon: GraduationCap },
  { name: "Contact", path: "/admin/contact", icon: Phone },
  { name: "Trade Hub", path: "/admin/trade-hub", icon: Building2 },
  { name: "Disha", path: "/admin/disha", icon: MapPinned },
  { name: "Kushal Connection", path: "/admin/kushal-connection", icon: Link },
];

export default function Sidebar({ isOpen }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-8 flex items-center gap-3 font-bold text-xl text-[#4A044E] dark:text-[#FFFFFF]">
        <Activity size={30} className="shrink-0 text-[#0EA5E9] dark:text-[#60A5FA]" />
        {isOpen && "VPP MFD"}
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;
          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#0EA5E9] dark:bg-[#2563EB] text-white shadow-lg"
                    : "text-[#4A044E] dark:text-[#D1D5DB] hover:bg-[#DBEAFE] dark:hover:bg-[#1E3A8A]"
                }`
              }
            >
              <Icon size={20} className="shrink-0" />
              {isOpen && <span className="font-semibold">{menu.name}</span>}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
