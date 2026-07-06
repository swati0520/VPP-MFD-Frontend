import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../Login";
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";

import AdminLayout from "../layout/AdminLayout";

import AdminHomeConfig from "../pages/AdminHomeConfig";
import AdminAboutConfig from "../pages/AdminAboutConfig";
import AdminServicesConfig from "../pages/AdminServicesConfig";
import AdminGalleryConfig from "../pages/AdminGalleryConfig";
import AdminTestimonialsConfig from "../pages/AdminTestimonialsConfig";
import AdminTeamConfig from "../pages/AdminTeamConfig";
import AdminBlogsConfig from "../pages/AdminBlogsConfig";
import AdminCareerConfig from "../pages/AdminCareerConfig";
import AdminContactConfig from "../pages/AdminContactConfig";
import AdminSettingsConfig from "../pages/AdminSettingsConfig";
import AdminSEOConfig from "../pages/AdminSEOConfig";
import AdminTradeHubConfig from "../pages/AdminTradeHubConfig";
import AdminUsersConfig from "../pages/AdminUsersConfig";
import AdminDishaConfig from "../pages/AdminDishaConfig";
import AdminKushalConnectionConfig from "../pages/AdminKushalConnectionConfig";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/home" element={<AdminHomeConfig />} />

          <Route path="/about" element={<AdminAboutConfig />} />

          <Route path="/services" element={<AdminServicesConfig />} />

          <Route path="/gallery" element={<AdminGalleryConfig />} />

          <Route path="/testimonials" element={<AdminTestimonialsConfig />} />

          <Route path="/team" element={<AdminTeamConfig />} />

          <Route path="/blogs" element={<AdminBlogsConfig />} />

          <Route path="/career" element={<AdminCareerConfig />} />

          <Route path="/contact" element={<AdminContactConfig />} />

          <Route path="/settings" element={<AdminSettingsConfig />} />

          <Route path="/seo" element={<AdminSEOConfig />} />

          <Route path="/tradehub" element={<AdminTradeHubConfig />} />

          <Route path="/users" element={<AdminUsersConfig />} />

          <Route path="/disha" element={<AdminDishaConfig />} />

          <Route
            path="/kushal-connection"
            element={<AdminKushalConnectionConfig />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}