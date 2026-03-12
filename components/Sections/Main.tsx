"use client";
import { Star } from "lucide-react";
import SellCarContainer from "./SellCarContainer";
import GoogleIcon from "../Icons/googleIcon";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Main() {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-[80vh] p-4 bg-secondary-800"
        id="home"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
          src="/video/car_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col w-full gap-10">
          <div
            className={`flex flex-col gap-4 ml-2 md:ml-10 ${anton.className}`}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-7xl  text-white `}
            >
              SELL YOUR CAR
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl  text-white "
            >
              WITH ONLY <span className="text-secondary-400">A CLICK</span>
            </motion.h1>
            <a
              className="flex items-center gap-1"
              href="https://maps.app.goo.gl/YFt5zTJs8dJy7o2i9"
              target="_blank"
            >
              <GoogleIcon width={24} height={24} />
              <div className="flex items-center ">
                <Star fill="orange" stroke="none" size={20} />
                <Star fill="orange" stroke="none" size={20} />
                <Star fill="orange" stroke="none" size={20} />
                <Star fill="orange" stroke="none" size={20} />
                <Star fill="orange" stroke="none" size={20} />
              </div>
              <p className="text-white text-lg  text-center">4.9</p>
            </a>
          </div>
        </div>
      </div>

      <div className="relative -mt-25 z-10 flex items-center justify-center px-3 sm:px-8 md:px-15 ">
        <SellCarContainer />
      </div>
    </>
  );
}
