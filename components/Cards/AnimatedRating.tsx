"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import GoogleIcon from "../Icons/googleIcon";

export default function AnimatedRating() {
  const rating = 4.9;
  const totalStars = 5;
  const [displayRating, setDisplayRating] = useState(0);
  const [activeStars, setActiveStars] = useState<number>(0);

  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.5, // component is considered in view when 50% visible
  });

  // Animate number
  useEffect(() => {
    if (!inView) return; // do nothing until visible

    let start = 0;
    const increment = rating / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= rating) {
        start = rating;
        clearInterval(interval);
      }
      setDisplayRating(parseFloat(start.toFixed(1)));
    }, 80);
    return () => clearInterval(interval);
  }, [inView, rating]);

  // Animate stars
  useEffect(() => {
    if (!inView) return; // do nothing until visible

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > rating) {
        clearInterval(interval);
        current = Math.floor(rating);
      }
      setActiveStars(current);
    }, 150);
    return () => clearInterval(interval);
  }, [inView, rating]);

  return (
    <a
      ref={ref} // <-- attach ref to component
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
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Star
                fill={i < activeStars ? "orange" : "orange"}
                stroke="none"
                size={20}
              />
            </motion.span>
          ))}
      </div>
      <motion.p
        className=" text-secondary-800 dark:text-blue-100 text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      >
        {displayRating.toFixed(1)}
      </motion.p>
    </a>
  );
}
