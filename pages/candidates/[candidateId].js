import { useRouter } from "next/router";
import React, { useState } from "react";

const CandidateDetails = () => {
  const router = useRouter();
  const { candidateId } = router.query;
  const [candidates, setCandidates] = useState([
    "Supardi",
    "Suparman",
    "Sumanto",
    "Budi",
    "Popo",
    "Parno",
  ]);

  return (
    <div className="w-full h-5/6 p-2 relative flex flex-col justify-center">
      <button
        onClick={() => router.push("/")}
        className="w-14 h-10 flex justify-center items-center top-5 absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
      <div className="text-center m-2 mb-4 mt-6">
        <h1 className="font-poppins font-medium text-2xl">Candidate Details</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-start w-full h-4/6">
        <div className="w-10/12 flex flex-col items-center h-2/6">
          <div className="w-4/6 h-full bg-slate-400 rounded-xl"></div>
        </div>
        <div className="w-10/12 flex flex-col justify-evenly h-4/6">
          <div className="text-start">
            <h2 className="font-poppins text-base ">
              Name : {candidates[parseInt(candidateId - 1)]}{" "}
            </h2>
          </div>
          <div className="text-start">
            <h2 className="font-poppins text-base ">
              Address : BBS 3 Blok C8 No. 7
            </h2>
          </div>
          <div className="text-start">
            <h2 className="font-poppins text-base ">
              Birth Details : Cilegon, 03 April 2000
            </h2>
          </div>
          <div className="text-start">
            <h2 className="font-poppins text-base ">
              Current Votes : 15 Votes
            </h2>
          </div>
        </div>
        <div className="text-center w-full">
          <button className="w-4/6 font-poppins font-medium text-base bg-black p-2 transition duration-300 ease-in-out text-white rounded-lg hover:bg-white hover:text-black hover:shadow-md hover:scale-105">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
