"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SellCarContainer from "./SellCarContainer";
import GoogleIcon from "../Icons/googleIcon";
import { useRef } from "react";
import { motion } from "framer-motion";
import TrackedImage from "../ClientRender/TrackedImage";
import AnimatedRating from "../Cards/AnimatedRating";

export default function Reviews() {
  const reviews = [
    {
      name: "Ryan S",
      city: "London, ON",
      text: `I don’t usually leave Google reviews, but I had such a great experience at CarFlex Plus that I had to. 
      They were awesome—super helpful, answered all my questions, and there was zero pressure to buy, which I really appreciated. The price was the best I could find anywhere, and the whole process was easy and comfortable from start to finish. I had a minor issue with the car after purchasing it, and they took care of it right away at no cost to me. That kind of service is rare these days when buying a used car.
       Highly recommend checking them out if you're looking for a used car, I would give them 10 stars if I could!`,
      image: "/imgs/RyanS.jpg",
      stars: 5,
    },
    {
      name: "Devyn Prange",
      city: "London, ON",
      text: `I highly recommend this dealership, you cannot beat nor find excellent service and pricing in one place
       unless you shop here! After 2 weeks we received a call from the dealer themselves asking if we enjoyed the new lancer (We do indeed!). 
      My wife absolutely loves it, we have recommended this dealer to our friends and family, thank you Carflex!`,
      image: "/imgs/DevynPrange.jpg",
      stars: 5,
    },
    {
      name: "Lambton Sanitation",
      city: "London, ON",
      text: `Awesome service from the owners. Worked with us on the sale by holding the truck with a deposit and even delivered it. I would buy from Carflex again, with no worry on quality or trust.`,
      image: "/imgs/LambtonSanitation.jpg",
      stars: 5,
    },
    {
      name: "Mo Go",
      city: "London, ON",
      text: "Super low km car at an even nicer price! Thank you so much. Runs great. I recommend anyone looking for a used car , suv, or truck to look here first",
      image: "/imgs/MOGO.jpg",
      stars: 5,
    },
    {
      name: "Harkirat Bindra",
      city: "London, ON",
      text: `Bought 2011 sonata gls from these guys they were very good at communication and best sales options even they gave me 1 month warranty , new tires and they stand back With every car they sell . They are very humble and kind to anyone and repective in Financial needs also they home finance me rest 700$ left that i dont have that moment .
Hope to see you again and buy more cars for my friends .
thankyou`,
      image: "/imgs/HarkiratBindra.jpg",
      stars: 5,
    },
  ];
  const loopReviews = [...reviews, ...reviews];
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  return (
    <div
      className="  flex flex-col justify-center px-3 sm:px-8 md:px-15 "
      id="reviews"
    >
      <div className="flex items-center justify-between sm:flex-row flex-col  mt-15 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 dark:text-blue-100">
          Our Customers
        </h1>
        <AnimatedRating />
      </div>
      <div className=" items-center gap-4">
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-4 py-4 px-4"
            animate={{ x: ["0%", "-50%"] }} // slide left by 50% (halfway)
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {loopReviews.map((review, index) => (
              <div
                key={index}
                className="flex-none w-60 md:w-80 bg-white dark:bg-zinc-800 rounded-lg border border-secondary-800 shadow-md p-4"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2 flex">
                    {Array(review.stars)
                      .fill(undefined)
                      .map((_, i) => (
                        <Star key={i} fill="orange" stroke="none" size={16} />
                      ))}
                  </span>
                  <GoogleIcon width={16} height={16} />
                </div>
                <p className="text-gray-700 mb-4 text-sm line-clamp-4 dark:text-gray-400">
                  {review.text}
                </p>
                <p className="font-semibold dark:text-white">{review.name}</p>
                <p className="text-gray-400 dark:text-blue-100 text-sm">
                  {review.city}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* <div className=" flex gap-10 justify-center my-2">
          <button
            onClick={() => scroll(-350)}
            className="bg-secondary-800 rounded-full p-1 shadow z-10 cursor-pointer"
          >
            <ChevronLeft size={18} color="white" />
          </button>
          <button
            onClick={() => scroll(350)}
            className="bg-secondary-800 rounded-full p-1 shadow z-10 cursor-pointer"
          >
            <ChevronRight size={18} color="white" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
