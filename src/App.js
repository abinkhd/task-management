import { RouterProvider } from "react-router-dom";
import "./App.css";
import { tasks, users } from "./data";
import routes from "./routes/routes";
import UserProvider from "./statemanagement/context/UserProvider";

function App() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;
