import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const success = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full p-2"
    >
      <div className="w-full flex flex-col items-center justify-evenly text-center h-5/6">
        <div className="h-2/6">
          <p className="font-poppins font-medium text-base">
            Terima kasih telah memberikan saran Kandidat dari RT anda!
          </p>
        </div>

        <div className="h-3/6">
          <Player
            src={"https://assets1.lottiefiles.com/packages/lf20_5zYhWw.json"}
            autoplay
            loop
            className="w-40 h-40"
          />
        </div>
      </div>
      <div className="w-full h-1/6">
        <button
          className="font-poppins font-medium w-full bg-black rounded-lg p-2 text-white text-sm"
          onClick={() => router.push("/filter")}
        >
          Kembali ke Halaman Awal
        </button>
      </div>
    </motion.div>
  );
};

export default success;
