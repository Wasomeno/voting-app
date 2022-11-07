import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { findCandidatesByDistrict } from "../../../fetchers/fetchers";

const Result = () => {
  const { districtId } = useRouter().query;
  const findCandidates = useQuery(["findCandidates", districtId], () =>
    findCandidatesByDistrict(districtId)
  );

  useEffect(() => {}, [findCandidates.isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, type: "tween", duration: 0.3 }}
      className="w-full h-full p-2"
    >
      <div className="w-full text-center">
        <h1 className="font-poppins font-medium text-xl m-2 mb-4">
          Current Results
        </h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-5/6 flex justify-around items-center">
          <div className="w-3/6 text-center">
            <h5 className="font-poppins font-medium text-center text-sm">
              Sent By
            </h5>
          </div>
          <div className="w-3/6 text-center">
            <h5 className="font-poppins font-medium text-center text-sm">
              Candidate
            </h5>
          </div>
        </div>
        <hr className="border-1 w-5/6" />
        {findCandidates.data?.result.map((details) => (
          <div className="w-5/6 flex justify-around gap-3 items-center bg-slate-200 rounded-lg shadow-md p-2">
            <div className="w-3/6 text-center">
              <h5 className="font-poppins ">{details.name}</h5>
            </div>
            <div className="w-3/6 text-center">
              <h5 className="font-poppins">{details.candidate}</h5>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Result;
