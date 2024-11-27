import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem("auth"));
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;
