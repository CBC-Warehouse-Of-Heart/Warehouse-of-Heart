"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const backgroundImages = ["book-1", "book-2", "book-3", "book-4"];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds (adjust duration as needed)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentBackgroundIndex]);

  return (
    <div
      className={`text-white text-center mx-auto min-w-[430px] min-h-screen ${`bg-${backgroundImages[currentBackgroundIndex]}`} bg-cover bg-no-repeat`}
    >
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        exit={{ opacity: 0, z: -20, transition: { duration: 0.5 } }}
        className="mt-[218px] mb-[403px]"
      >
        คุณพลิกหน้าไดอารี่
      </motion.div>
    </div>
  );
};

export default Page;

