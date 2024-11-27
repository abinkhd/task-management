import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const myCardStyle = { margin: "2% auto", width: "50%" };

export default function MyCard({ task, index }) {
  return (
    <Card style={myCardStyle}>
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
      </CardContent>
      <Stack flexDirection={"row"}>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
        <CardActions>
          <Button size="small">Update</Button>
        </CardActions>
      </Stack>
    </Card>
  );
}
