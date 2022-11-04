import React, { useState } from "react";
import { UserContext } from "../context/userContext";
import UserForm from "./UserForm";

const Layout = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });

  console.log(userDetails);
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <UserContext.Provider
        value={{
          userDetails: userDetails,
          setUserDetails: setUserDetails,
        }}
      >
        {userDetails.name !== "" ? children : <UserForm />}
      </UserContext.Provider>
    </main>
  );
};

export default Layout;
