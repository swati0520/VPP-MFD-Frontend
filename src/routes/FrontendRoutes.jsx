import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../components/Frontend/layout/MainLayout";
import Home from "../components/Frontend/pages/Home";

export default function FrontendRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
