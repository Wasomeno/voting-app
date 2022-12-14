import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { FilterNavbar } from "./Navbar";
import Toast from "./Toast";
import UserForm from "./UserForm";

const Layout = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });
  const router = useRouter();
  const basePath = router.pathname.split("/");

  return (
    <main className="flex flex-col justify-start items-center h-screen">
      <UserContext.Provider
        value={{
          userDetails: userDetails,
          setUserDetails: setUserDetails,
        }}
      >
        {userDetails.name !== "" && userDetails.address !== "" ? (
          <>
            {children}
            {basePath[1] === "filter" && <FilterNavbar />}
          </>
        ) : (
          <UserForm />
        )}
      </UserContext.Provider>
      <Toast />
    </main>
  );
};

export default Layout;
