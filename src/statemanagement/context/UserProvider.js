import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  //State to store user
  const [user, setUser] = useState();
  useEffect(() => {
    // Get the user data stored in localStorage (key: 'auth') and parse it
    setUser(JSON.parse(localStorage.getItem("auth")));
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
