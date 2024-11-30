import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { TasksContext } from "../../statemanagement/context/TasksContext";
import Popup from "reactjs-popup";

export default function MyCard({ task, index }) {
  const { usertasks, setUsertasks } = React.useContext(TasksContext);
  const [taskUpdate, setTaskUpdate] = React.useState({
    taskDescription: task.taskDescription,
    status: task.status,
  });

  const handleStatus = (id) => {
    if (task.status === "Completed") {
      const updatedtask = { ...task, status: "Pending" };
      setUsertasks(
        usertasks.map((prev) =>
          prev.taskId === id ? { ...prev, ...updatedtask } : prev
        )
      );
    } else {
      const updatedtask = { ...task, status: "Completed" };
      setUsertasks(
        usertasks.map((prev) =>
          prev.taskId === id ? { ...prev, ...updatedtask } : prev
        )
      );
    }
  };

  const handleDelete = (id) => {
    setUsertasks(usertasks.filter((usertask) => usertask.taskId !== id));
  };

  const handleChange = (e) => {
    setTaskUpdate({
      ...taskUpdate,
      taskDescription: e.currentTarget.value,
    });
  };

  const handleSelect = (e) => {
    setTaskUpdate({
      ...taskUpdate,
      status: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedtask = { ...task, ...taskUpdate };
    setUsertasks(
      usertasks.map((prev) =>
        prev.taskId === task.taskId ? { ...prev, ...updatedtask } : prev
      )
    );
  };

  return (
    <Card className="cardStyle">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Task {index}
        </Typography>
        <Typography variant="h5" component="div">
          #{task.taskId} {task.taskDescription}
        </Typography>
        <span
          className="taskStatusStyle"
          style={{
            backgroundColor: `${
              (task.status === "InProgress" && "orange") ||
              (task.status === "Completed" && "green") ||
              (task.status === "Pending" && "#00ffe5")
            }`,
          }}
        >
          {task.status}
        </span>
        <Typography variant="h6" sx={{ paddingTop: "5px" }}>
          Due Date:{task.dueDate}
        </Typography>
      </CardContent>
      <Stack flexDirection={"row"}>
        <CardActions>
          <Button size="small" onClick={() => handleStatus(task.taskId)}>
            {task.status === "Completed" ? "Reopen" : "Mark As Completed"}
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" onClick={() => handleDelete(task.taskId)}>
            Delete
          </Button>
        </CardActions>
        <CardActions>
          <Popup
            trigger={<Button size="small">Edit</Button>}
            position="right center"
            modal
            nested
          >
            <Paper className="paperStyle">
              <form onSubmit={handleSubmit}>
                <Stack alignItems={"center"} spacing={4}>
                  <Typography variant="h5">Edit Tasks</Typography>
                  <TextField
                    id="taskDescription"
                    label="Description"
                    value={taskUpdate.taskDescription}
                    onChange={handleChange}
                  ></TextField>
                  <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                      labelId="status"
                      id="status"
                      value={taskUpdate.status}
                      label="Status"
                      onChange={handleSelect}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="InProgress">InProgress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                  <Button variant="contained" type="submit">
                    Update
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Popup>
        </CardActions>
      </Stack>
    </Card>
  );
}
