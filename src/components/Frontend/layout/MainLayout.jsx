import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
