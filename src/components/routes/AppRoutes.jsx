import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../Admin/layout/AdminLayout";
import Login from "../Admin/pages/Login";
import Signup from "../Admin/pages/Signup";
import ForgotPassword from "../Admin/pages/ForgotPassword";
import Dashboard from "../Admin/pages/Dashboard";
import AdminHomeConfig from "../Admin/pages/AdminHomeConfig";
import AdminAboutConfig from "../Admin/pages/AdminAboutConfig";
import AdminServicesConfig from "../Admin/pages/AdminServicesConfig";
import AdminGalleryConfig from "../Admin/pages/AdminGalleryConfig";
import AdminTestimonialsConfig from "../Admin/pages/AdminTestimonialsConfig";
import AdminTeamConfig from "../Admin/pages/AdminTeamConfig";
import AdminBlogsConfig from "../Admin/pages/AdminBlogsConfig";
import AdminCareerConfig from "../Admin/pages/AdminCareerConfig";
import AdminContactConfig from "../Admin/pages/AdminContactConfig";
import AdminSettingsConfig from "../Admin/pages/AdminSettingsConfig";
import AdminSEOConfig from "../Admin/pages/AdminSEOConfig";
import AdminTradeHubConfig from "../Admin/pages/AdminTradeHubConfig";
import AdminUsersConfig from "../Admin/pages/AdminUsersConfig";
import AdminDishaConfig from "../Admin/pages/AdminDishaConfig";
import AdminKushalConnectionConfig from "../Admin/pages/AdminKushalConnectionConfig";

const isAuthenticated = () => localStorage.getItem("vpp-authenticated") === "true";

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
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
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
