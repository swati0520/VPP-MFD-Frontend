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
import AdminSEOConfig from "../components/Admin/pages/AdminSEOConfig";
import AdminServicesConfig from "../components/Admin/pages/AdminServicesConfig";
import AdminSettingsConfig from "../components/Admin/pages/AdminSettingsConfig";
import AdminTeamConfig from "../components/Admin/pages/AdminTeamConfig";
import AdminTestimonialsConfig from "../components/Admin/pages/AdminTestimonialsConfig";
import AdminTradeHubConfig from "../components/Admin/pages/AdminTradeHubConfig";
import AdminUsersConfig from "../components/Admin/pages/AdminUsersConfig";
import Dashboard from "../components/Admin/pages/Dashboard";
import ForgotPassword from "../components/Admin/pages/ForgotPassword";
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
      <Route path="forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

      <Route element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<AdminHomeConfig />} />
        <Route path="about" element={<AdminAboutConfig />} />
        <Route path="services" element={<AdminServicesConfig />} />
        <Route path="gallery" element={<AdminGalleryConfig />} />
        <Route path="testimonials" element={<AdminTestimonialsConfig />} />
        <Route path="team" element={<AdminTeamConfig />} />
        <Route path="blogs" element={<AdminBlogsConfig />} />
        <Route path="career" element={<AdminCareerConfig />} />
        <Route path="contact" element={<AdminContactConfig />} />
        <Route path="settings" element={<AdminSettingsConfig />} />
        <Route path="seo" element={<AdminSEOConfig />} />
        <Route path="tradehub" element={<AdminTradeHubConfig />} />
        <Route path="users" element={<AdminUsersConfig />} />
        <Route path="disha" element={<AdminDishaConfig />} />
        <Route path="kushal-connection" element={<AdminKushalConnectionConfig />} />
      </Route>

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}
