import { useRouter } from "next/router";
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Filter = () => {
  const districts = [17, 18, 19, 20, 22, 24];

  const userDetails = useContext(UserContext).userDetails;
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center p-2">
      <div className="w-full text-start my-4">
        <p className="font-poppins font-medium text-sm ml-4 underline">
          {userDetails.name}
        </p>
      </div>
      <div className="text-center m-2">
        <h1 className="font-poppins font-medium text-xl m-2">Districts</h1>
      </div>
      <div className="w-full h-5/6 flex flex-col items-center gap-3">
        {districts.map((district) => (
          <div
            key={district}
            onClick={() => router.push("/filter/district/" + district)}
            className="w-5/6 h-20 bg-slate-200 rounded-lg p-2 shadow-md flex items-center justify-evenly transition duration-300 ease-in-out cursor-pointer hover:shadow-slate-500 hover:bg-slate-50 hover:scale-105"
          >
            <div className="w-5/6 text-center">
              <h5 className="font-poppins font-medium">RT {district}</h5>
            </div>
            <div className="w-1/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
