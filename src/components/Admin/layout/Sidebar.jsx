import { NavLink } from "react-router-dom";
import {
  Activity,
  LayoutDashboard,
  Home,
  Info,
  Briefcase,
  Image,
  MessageSquare,
  Users,
  FileText,
  GraduationCap,
  Phone,
  Search,
  Settings,
  UserCog,
  Building2,
  MapPinned,
  Link,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Home", path: "/home", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquare },
  { name: "Team", path: "/team", icon: Users },
  { name: "Blogs", path: "/blogs", icon: FileText },
  { name: "Career", path: "/career", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Phone },
  { name: "SEO", path: "/seo", icon: Search },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Users", path: "/users", icon: UserCog },
  { name: "Trade Hub", path: "/tradehub", icon: Building2 },
  { name: "Disha", path: "/disha", icon: MapPinned },
  { name: "Kushal Connection", path: "/kushal-connection", icon: Link },
];

export default function Sidebar({ isOpen }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-8 flex items-center gap-3 font-bold text-xl text-[#4A044E] dark:text-[#FFFFFF]">
        <Activity size={24} className="text-[#0EA5E9] dark:text-[#60A5FA]" />
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
              <Icon size={20} />
              {isOpen && <span className="font-semibold">{menu.name}</span>}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}