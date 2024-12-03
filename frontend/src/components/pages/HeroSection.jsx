import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-blue-600 text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute bg-gradient-to-r from-blue-500 via-blue-700 to-blue-600 opacity-80 w-full h-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold mb-4 leading-tight"
        >
          Empower Your Learning Journey with <br /> <span className="text-yellow-300">HomeTeacher</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg mb-8"
        >
          Modern education tools tailored to help you achieve success, at your pace, from anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#courses"
            className="px-6 py-3 bg-yellow-300 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          >
            Explore Courses
          </a>
          <a
            href="#about"
            className="ml-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full bg-[url('')] bg-cover bg-center opacity-20"
        ></motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full bg-[url('')] bg-cover bg-center opacity-20"
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
