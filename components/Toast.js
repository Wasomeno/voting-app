import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getToastDetails } from "../stores/stores";
import { Player } from "@lottiefiles/react-lottie-player";

const Toast = () => {
  const [show, text, condition] = getToastDetails();
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute h-screen w-screen bg-slate-700 bg-opacity-75"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-60 h-60 bg-slate-200 rounded-xl shadow-md p-2 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col justify-center"
          >
            <p className="font-poppins font-medium text-center text-sm">
              Berhasil Menambahkan Kandidat
            </p>
            <Player
              src={
                "https://assets5.lottiefiles.com/packages/lf20_dzlwceyg.json"
              }
              autoplay
              keepLastFrame
              className="w-24 h-24"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Toast;
