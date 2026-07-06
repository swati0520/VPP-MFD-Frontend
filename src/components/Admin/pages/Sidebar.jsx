import { NavLink } from "react-router-dom";

import {
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
export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white">

      <h2 className="text-2xl font-bold p-5">
        Admin Panel
      </h2>

      <div className="flex flex-col">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{menu.name}</span>
            </NavLink>
          );
        })}

      </div>

    </div>
  );
}