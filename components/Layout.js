import React, { useState } from "react";
import { UserContext } from "../context/userContext";
import UserForm from "./UserForm";

const Layout = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });

  return (
    <main className="flex flex-col justify-start items-center h-screen">
      <UserContext.Provider
        value={{
          userDetails: userDetails,
          setUserDetails: setUserDetails,
        }}
      >
        {userDetails.name !== "" && userDetails.address !== "" ? (
          children
        ) : (
          <UserForm />
        )}
      </UserContext.Provider>
    </main>
  );
};

export default Layout;
