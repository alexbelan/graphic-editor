import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("./main"));
const ProjectPage = lazy(() => import("./projects"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
