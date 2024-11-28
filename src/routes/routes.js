import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import UserTasks from "../components/UserTasks";
import PrivateRoutes from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";
import Navbar from "../components/Navbar";
import UserProvider from "../statemanagement/context/UserProvider";
import TaskProvider from "../statemanagement/context/TaskProvider";
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
          <UserProvider>
            <TaskProvider>
              <Navbar />
              <UserTasks />
            </TaskProvider>
          </UserProvider>
        ),
      },
    ],
  },
]);

export default routes;
