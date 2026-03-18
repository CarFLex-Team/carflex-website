"use client";
import SellCarContainer from "./SellCarContainer";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";

import { useInView } from "react-intersection-observer";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Main() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <>
      <div
        className="relative flex items-center justify-center h-[80vh] p-4 bg-secondary-800"
        id="home"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30 dark:opacity-20"
          src="/video/car_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="relative z-10 flex flex-col w-full gap-10">
          <div
            ref={ref}
            className={`flex flex-col gap-4 ml-2 md:ml-10 ${anton.className}`}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={`md:text-7xl text-5xl text-white `}
            >
              SELL YOUR CAR
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:text-7xl text-5xl  text-white "
            >
              ONLY <span className="text-secondary-400">A CLICK AWAY</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="relative sm:-mt-25 -mt-10 z-10 flex items-center justify-center px-3 sm:px-8 ">
        <SellCarContainer />
      </div>
    </>
  );
}
