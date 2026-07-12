import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../components/Admin/layout/AdminLayout";
import AdminAboutConfig from "../components/Admin/pages/AdminAboutConfig";
import AdminBlogsConfig from "../components/Admin/pages/AdminBlogsConfig";
import AdminCareerConfig from "../components/Admin/pages/AdminCareerConfig";
import AdminContactConfig from "../components/Admin/pages/AdminContactConfig";
import AdminDishaConfig from "../components/Admin/pages/AdminDishaConfig";
import AdminGalleryConfig from "../components/Admin/pages/AdminGalleryConfig";
import AdminHomeConfig from "../components/Admin/pages/AdminHomeConfig";
import AdminKushalConnectionConfig from "../components/Admin/pages/AdminKushalConnectionConfig";
import AdminServicesConfig from "../components/Admin/pages/AdminServicesConfig";
import AdminTradeHubConfig from "../components/Admin/pages/AdminTradeHubConfig";
import Dashboard from "../components/Admin/pages/Dashboard";
import Login from "../components/Admin/pages/Login";
import Signup from "../components/Admin/pages/Signup";

const isAuthenticated = () => {
  const token = localStorage.getItem("vpp-token");
  const authenticated = localStorage.getItem("vpp-authenticated") === "true";

  return Boolean(token && authenticated);
};

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/admin/dashboard" replace /> : children;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/admin/login" replace />;
};

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="signup" element={<PublicRoute><Signup /></PublicRoute>} />

      <Route element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<AdminHomeConfig />} />
        <Route path="about" element={<AdminAboutConfig />} />
        <Route path="services" element={<AdminServicesConfig />} />
        <Route path="gallery" element={<AdminGalleryConfig />} />
        <Route path="blogs" element={<AdminBlogsConfig />} />
        <Route path="careers" element={<AdminCareerConfig />} />
        <Route path="contact" element={<AdminContactConfig />} />
        <Route path="trade-hub" element={<AdminTradeHubConfig />} />
        <Route path="disha" element={<AdminDishaConfig />} />
        <Route path="kushal-connection" element={<AdminKushalConnectionConfig />} />
      </Route>

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}
