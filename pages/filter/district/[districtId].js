import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../../context/userContext";
import { addCandidates } from "../../../fetchers/fetchers";
import { useToast } from "../../../stores/stores";

const District = () => {
  const router = useRouter();
  const candidateInputRef = useRef();
  const district = useRouter().query.districtId;
  const [toastSuccess, toastError] = useToast();
  const { name, address } = useContext(UserContext).userDetails;
  const addCandidate = useMutation((event) => submit(event), {
    onSuccess: () => {
      router.push("/filter/success");
      toastSuccess("Berhasil menambahkan kandidat");
    },

    onError: (error) => {
      toastError(error);
    },
  });

  const submit = async (event) => {
    event.preventDefault();
    const add = await addCandidates(
      name,
      address,
      candidateInputRef.current.value,
      district
    );
    return add;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, type: "tween", duration: 0.3 }}
        className="h-full w-full p-2 flex flex-col justify-center"
      >
        <div className="w-full text-center mb-2">
          <h1 className="font-poppins font-medium text-lg">
            Form Calon RT {district}
          </h1>
        </div>

        <form
          onSubmit={(event) => addCandidate.mutate(event)}
          className="w-full"
        >
          <div className="flex flex-col items-center gap-3">
            <label for="candidateInput" className="font-poppins">
              Nama Calon
            </label>
            <input
              required={true}
              ref={candidateInputRef}
              type="text"
              className="w-5/6 h-10 p-2 bg-slate-100 rounded-lg text-center font-sans"
            />
          </div>
          <div hidden className="m-2 text-center">
            <p className="text-sm"></p>
          </div>
          <div className="w-full text-center">
            <input
              type="submit"
              value={"Submit"}
              className="w-3/6 p-2 bg-black font-poppins font-medium rounded-lg my-4 text-white"
            />
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default District;
