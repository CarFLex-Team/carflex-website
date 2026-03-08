"use client";

import { Star } from "lucide-react";
import SellCarContainer from "./SellCarContainer";
import GoogleIcon from "../Icons/googleIcon";

export default function Main() {
  return (
    <>
      <div className="relative flex items-center justify-center h-[70vh] p-4 bg-secondary-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 "
          style={{ backgroundImage: `url('imgs/home.png')` }}
        />
        <div className="relative z-10 flex flex-col w-full gap-10">
          <div className=" flex flex-col gap-4 ml-2 md:ml-10">
            <h1 className="text-3xl md:text-5xl  text-white ">
              Easiest Way To Sell a Car
            </h1>
            <h3 className="text-base md:text-2xl  text-white z-10">
              Sell your car directly to Carflex Plus.
            </h3>
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
              <p className="text-white text-lg font-semibold text-center">
                4.9
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="relative -mt-13 z-10 flex items-center justify-center px-3 sm:px-8 md:px-15 ">
        <SellCarContainer />
      </div>
    </>
  );
}
