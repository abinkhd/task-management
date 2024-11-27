import React, { useEffect, useState } from "react";

const UserTasks = () => {
  const [user, setUser] = useState();
  const [usertasks, setUsertasks] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("auth")));
    setUsertasks(
      JSON.parse(localStorage.getItem("tasks")).filter(
        (task) => task.assignedTo === user
      )
    );
  }, []);
  return (
    <div>
      <ul>
        {usertasks.map((task) => (
          <li key={task.id}>{task.taskDescription}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserTasks;
