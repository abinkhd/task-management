import React, { useContext } from "react";
import MyCard from "./common/Card";
import { TasksContext } from "../statemanagement/context/TasksContext";

import { Box, Stack } from "@mui/material";
import AddTask from "./common/AddTask";
import MyPopup from "./common/Popup";
import { UserContext } from "../statemanagement/context/UserContext";
import Popup from "reactjs-popup";

const myCardStyle = { margin: "2% auto", width: "50%" };

const UserTasks = () => {
  const { usertasks, setUsertasks, alltasks, setAlltasks } =
    useContext(TasksContext);
  const user = useContext(UserContext);

  // Effect to fetch and set the user data from localStorage

  // Dependency on user state ensures this effect runs when the user is set

  return (
    <Stack className="container">
      {/* Check if there are any tasks for the user */}

      <Popup trigger={<AddTask />} position="right center" modal nested>
        <MyPopup
          user={user}
          alltasks={alltasks}
          usertasks={usertasks}
          setAlltasks={setAlltasks}
          setUsertasks={setUsertasks}
        />
      </Popup>
      {usertasks.length > 0 ? (
        usertasks.map((task, index) => (
          <MyCard key={task.taskId} task={task} index={index + 1} />
        ))
      ) : (
        <p style={{ margin: "15% 40%", width: "30%" }}>
          No tasks available for this user.
        </p>
      )}
    </Stack>
  );
};

export default UserTasks;
