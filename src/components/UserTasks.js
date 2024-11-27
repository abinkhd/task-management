import React, { useEffect, useState } from "react";
import MyCard from "./common/Card";

const UserTasks = () => {
  // State to store the logged-in user object
  const [user, setUser] = useState();

  // State to store the filtered tasks assigned to the logged-in user
  const [usertasks, setUsertasks] = useState([]);

  // Effect to fetch and set the user data from localStorage
  useEffect(() => {
    // Get the user data stored in localStorage (key: 'auth') and parse it
    setUser(JSON.parse(localStorage.getItem("auth")));
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Effect to fetch tasks and filter them based on the logged-in user
  useEffect(() => {
    if (user) {
      // Get tasks data from localStorage (key: 'tasks')
      const tasksFromStorage = localStorage.getItem("tasks");

      if (tasksFromStorage) {
        // Parse the tasks from localStorage
        const tasks = JSON.parse(tasksFromStorage);

        // Filter tasks that are assigned to the logged-in user
        const filteredTasks = tasks.filter((task) => task.assignedTo === user);
        console.log(filteredTasks);

        // Update the usertasks state with the filtered tasks
        setUsertasks(filteredTasks);
      }
    }
  }, [user]); // Dependency on user state ensures this effect runs when the user is set

  return (
    <div>
      {/* Check if there are any tasks for the user */}
      {usertasks.length > 0 ? (
        usertasks.map((task, index) => (
          <MyCard key={task.taskId} task={task} index={index + 1} />
        ))
      ) : (
        <p>No tasks available for this user.</p>
      )}
    </div>
  );
};

export default UserTasks;
