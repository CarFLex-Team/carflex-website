import { motion } from "framer-motion";

export default function CarLoader() {
  return (
    <div className="relative w-full h-24 overflow-hidden bg-gray-100 flex items-center">
      <motion.img
        src="/Logo.png"
        alt="loading car"
        className="w-24 absolute"
        animate={{ x: ["-120%", "120%"] }} // move from left to right
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </div>
  );
}
