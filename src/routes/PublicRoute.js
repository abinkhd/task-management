import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = JSON.parse(localStorage.getItem("auth"));

  // Redirect authenticated users to "/dashboard"
  return token ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoutes;
