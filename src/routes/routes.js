import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import UserTasks from "../components/UserTasks";
import PrivateRoutes from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";
import Navbar from "../components/Navbar";
const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Login />
          </>
        ),
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/home",
        element: (
          <>
            <Navbar />
            <UserTasks />
          </>
        ),
      },
    ],
  },
]);

export default routes;
