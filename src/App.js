import { RouterProvider } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { tasks, users } from "./data";
import routes from "./routes/routes";

function App() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return <RouterProvider router={routes} />;
}

export default App;
