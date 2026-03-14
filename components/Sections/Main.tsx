"use client";
import SellCarContainer from "./SellCarContainer";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import AnimatedRating from "../Cards/AnimatedRating";
import { useLoading } from "../Context/LoadingProvider";
import { useEffect } from "react";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Main() {
  const { registerAsset, assetLoaded } = useLoading();
  useEffect(() => {
    registerAsset();
  }, []);
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
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            // readyState 4 = HAVE_ENOUGH_DATA (enough data to play)
            if (video.readyState >= 4) {
              assetLoaded();
            }
          }}
          onCanPlay={(e) => {
            const video = e.currentTarget;
            if (video.readyState >= 4) {
              assetLoaded();
            }
          }}
          onError={assetLoaded}
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
            <AnimatedRating />
          </div>
        </div>
      </div>

      <div className="relative -mt-25 z-10 flex items-center justify-center px-3 sm:px-8 md:px-15 ">
        <SellCarContainer />
      </div>
    </>
  );
}
