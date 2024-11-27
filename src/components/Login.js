import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const paperStyle = {
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "20px",
  margin: "7% auto",
};
const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setLogin({ ...login, [e.currentTarget.id]: e.currentTarget.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (user) =>
        user.username === login.username && user.password === login.password
    );
    console.log(user);

    user && localStorage.setItem("auth", JSON.stringify(user.username));
    navigate("/home");
  };
  return (
    <Box>
      <Paper style={paperStyle}>
        <form onSubmit={handleSubmit}>
          <Stack alignItems={"center"} spacing={4}>
            <Typography variant="h4" fontFamily={"system-ui"}>
              LOGIN
            </Typography>
            <TextField
              id="username"
              label="Username"
              onChange={handleChange}
              value={login.username}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              onChange={handleChange}
              value={login.password}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!login.username || !login.password}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
