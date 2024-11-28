import React, { useContext, useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";
import { UserContext } from "./UserContext";

const TaskProvider = ({ children }) => {
  //Access user from userContext
  const user = useContext(UserContext);
  // State to store the filtered tasks assigned to the logged-in user
  const [usertasks, setUsertasks] = useState([]);
  const [alltasks, setAlltasks] = useState([]);

  // Effect to fetch tasks and filter them based on the logged-in user
  useEffect(() => {
    if (user) {
      // Get tasks data from localStorage (key: 'tasks')
      const tasksFromStorage = localStorage.getItem("tasks");

      if (tasksFromStorage) {
        // Parse the tasks from localStorage
        const tasks = JSON.parse(tasksFromStorage);
        setAlltasks(tasks);

        // Filter tasks that are assigned to the logged-in user
        const filteredTasks = tasks.filter((task) => task.assignedTo === user);
        console.log(filteredTasks);

        // Update the usertasks state with the filtered tasks
        setUsertasks(filteredTasks);
      }
    }
  }, [user]);
  return (
    <TasksContext.Provider
      value={{ usertasks, alltasks, setUsertasks, setAlltasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
