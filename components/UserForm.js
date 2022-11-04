import React, { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";

const UserForm = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const { setUserDetails } = useContext(UserContext);

  const submitForm = (event) => {
    event.preventDefault();
    setUserDetails((current) => ({
      name: nameRef.current.value,
      address: addressRef.current.value,
    }));
  };

  return (
    <div className="flex flex-col items-center h-3/6 w-5/6 p-3 bg-slate-100 rounded-xl shadow-slate-300 shadow-md min-w-fit sm:w-3/6 lg:w-3/6 md:w-3/6 xl:w-3/6">
      <div className="text-center m-2 p-2">
        <h1 className="font-poppins font-medium text-xl md:text-2xl">
          Form Voting
        </h1>
      </div>
      <form
        onSubmit={(event) => submitForm(event)}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="m-2 flex flex-col items-center justify-center w-full">
          <label
            for="name_input"
            className="m-2 font-sans text-sm md:text-base"
          >
            Nama
          </label>
          <input
            type="text"
            id="name_input"
            ref={nameRef}
            className="text-center text-sm h-8 md:h-12 w-4/6 font-sans p-2 rounded-lg bg-slate-100 border-2 border-slate-300"
          />
        </div>
        <div className="m-2 flex flex-col items-center justify-center w-full">
          <label
            for="address_input"
            id="address_input"
            className="m-2 font-sans text-sm md:text-base"
          >
            Alamat
          </label>
          <input
            type="text"
            ref={addressRef}
            className="text-center text-sm h-8 md:h-12 w-4/6 font-sans p-2 rounded-lg bg-slate-100 border-2 border-slate-300"
          />
        </div>
        <div className="w-5/6 m-4 text-center">
          <input
            type="submit"
            value={"Submit"}
            className="bg-black md:text-base w-3/6 text-white text-sm font-poppins p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-md hover:scale-105"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
