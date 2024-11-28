import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const MyPopup = ({ user, usertasks, alltasks, setAlltasks, setUsertasks }) => {
  const [addtask, setAddtask] = React.useState({
    taskId: "",
    taskDescription: "",
    status: "",
    assignedTo: user,
    dueDate: "",
  });

  const handleChange = (e) => {
    setAddtask({
      ...addtask,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSelect = (e) => {
    setAddtask({ ...addtask, status: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = alltasks.length + 1;
    const newTask = { ...addtask, taskId };
    setUsertasks([...usertasks, newTask]);
    setAlltasks([...alltasks, newTask]);
  };
  return (
    <Paper className="paperStyle">
      <form onSubmit={handleSubmit}>
        <Stack alignItems={"center"} spacing={4}>
          <Typography variant="h5">Create a New Tasks</Typography>
          <TextField
            id="taskDescription"
            label="Description"
            value={addtask.taskDescription}
            onChange={handleChange}
          ></TextField>
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={addtask.status}
              label="Status"
              onChange={handleSelect}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="InProgress">InProgress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="date"
            id="dueDate"
            value={addtask.dueDate}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default MyPopup;
