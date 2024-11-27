import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TaskIcon from "@mui/icons-material/Task";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("auth")));
  });

  const handleClick = () => {
    localStorage.removeItem("auth");
    setUser();
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <TaskIcon sx={{ paddingTop: "-6px" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleClick}>
              Logout
            </Button>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
