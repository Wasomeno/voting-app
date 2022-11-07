import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const results = () => {
  const districts = [17, 18, 19, 20, 22, 24];
  const userDetails = useContext(UserContext).userDetails;
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center p-2 overflow-y-scroll">
      <div className="w-5/6 text-left my-2 mb-4">
        <p className="font-poppins font-medium text-sm">
          Hello {userDetails.name},
        </p>
      </div>
      <div className="text-center m-2">
        <h1 className="font-poppins font-medium text-xl">
          Data Filter Kandidat
        </h1>
      </div>

      <div className="w-5/6 text-left m-2 mb-3 shadow-md">
        <h3 className="font-poppins font-medium my-2">Panduan</h3>
        <p className="font-poppins font-medium text-sm p-3 bg-blue-200 rounded-lg">
          Silahkan pilih menu RT yang tersedia untuk melihat data yang terkumpul
          dari setiap RT.
        </p>
      </div>

      <div className="w-5/6 text-start">
        <h3 className="p-2 font-poppins font-medium my-2">List RT</h3>
      </div>
      <div className="w-full flex flex-col items-center p-2 gap-3 max-h-64 overflow-y-scroll">
        {districts.map((district) => (
          <div
            key={district}
            onClick={() => router.push("/filter/results/" + district)}
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
                className="w-6 h-6"
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

export default results;
