"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GoogleIcon from "../Icons/googleIcon";

export default function AnimatedRating() {
  const rating = 4.9; // final rating
  const totalStars = 5;
  const [displayRating, setDisplayRating] = useState(0);
  const [activeStars, setActiveStars] = useState<number>(0);

  // Animate number
  useEffect(() => {
    let start = 0;
    const increment = rating / 100; // animate in 100 steps
    const interval = setInterval(() => {
      start += increment;
      if (start >= rating) {
        start = rating;
        clearInterval(interval);
      }
      setDisplayRating(parseFloat(start.toFixed(1))); // one decimal
    }, 20);
    return () => clearInterval(interval);
  }, [rating]);

  // Animate stars one by one
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > rating) {
        clearInterval(interval);
        current = Math.floor(rating);
      }
      setActiveStars(current);
    }, 150); // 150ms between each star
    return () => clearInterval(interval);
  }, [rating]);

  return (
    <a
      className="flex items-center gap-2"
      href="https://maps.app.goo.gl/YFt5zTJs8dJy7o2i9"
      target="_blank"
    >
      <GoogleIcon width={24} height={24} />
      <div className="flex items-center gap-1">
        {Array(totalStars)
          .fill(undefined)
          .map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: i < activeStars ? 1 : 0.8 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
            >
              <Star
                fill={i < activeStars ? "orange" : "gray"}
                stroke="none"
                size={20}
              />
            </motion.span>
          ))}
      </div>
      <motion.p
        className="text-white text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayRating.toFixed(1)}
      </motion.p>
    </a>
  );
}
