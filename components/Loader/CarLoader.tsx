import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/components/Context/LoadingProvider";
import Lottie from "lottie-react";
import carLoader from "@/public/animations/Car-loader.json";
export default function GlobalLoader() {
  const { totalAssets, loadedAssets } = useLoading();
  const loading = loadedAssets < totalAssets;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-gray-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-100 h-100">
            <Lottie animationData={carLoader} loop={true} autoplay={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
