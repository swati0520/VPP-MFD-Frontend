import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Frontend/components/Navbar";
import Footer from "../components/Frontend/components/Footer";
import Home from "../components/Frontend/pages/Home";
import About from "../components/Frontend/pages/About";
import Services from "../components/Frontend/pages/Services";
import Careers from "../components/Frontend/pages/Careers";
import TradeHub from "../components/Frontend/pages/TradeHub";
import Gallery from "../components/Frontend/pages/Gallery";
import Blogs from "../components/Frontend/pages/Blogs";
import Disha from "../components/Frontend/pages/Disha";
import Contact from "../components/Frontend/pages/Contact";
import KushalConnection from "../components/Frontend/pages/KushalConnection";

function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function FrontendRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="careers" element={<Careers />} />
        <Route path="trade-hub" element={<TradeHub />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="disha" element={<Disha />} />
        <Route path="contact" element={<Contact />} />
        <Route path="kushal-connection" element={<KushalConnection />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
