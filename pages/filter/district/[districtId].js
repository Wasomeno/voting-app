import { useRouter } from "next/router";
import React from "react";

const District = () => {
  const district = useRouter().query.districtId;

  const submitCandidate = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-full w-full p-2 flex flex-col justify-center">
      <div className="w-full text-center mb-2">
        <h1 className="font-poppins font-medium text-lg">
          Form Calon RT {district}
        </h1>
      </div>

      <form onSubmit={(event) => submitCandidate(event)} className="w-full">
        <div className="flex flex-col items-center gap-3">
          <label for="candidateInput" className="font-poppins">
            Nama Calon
          </label>
          <input
            type="text"
            className="w-5/6 h-10 p-2 bg-slate-100 rounded-lg "
          />
        </div>
        <div className="w-full text-center">
          <input
            type="submit"
            value={"Submit"}
            className="w-3/6 p-2 bg-black font-poppins font-medium rounded-lg my-4 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default District;
