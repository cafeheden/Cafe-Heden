import React from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-left"
      style={{ backgroundImage: "url(/src/assets/about-bg.jpg)" }}
    >
      {/* Content Overlay */}
      <div className="relative flex flex-col sm:flex-row  items-center justify-between overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 px-8 py-16 md:px-32 lg:px-40 md:py-64 z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primaryColor uppercase"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About<br />Cafe Heden
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-tertiaryColor mt-8"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Café Heden is an offbeat restro-cafe with an
            <br />
            exceptional quality of food and beverages.
          </motion.p>
          <motion.button
            className="py-3 px-8 bg-primaryColor text-tertiaryColor font-semibold rounded-full hover:bg-orange-400 transition-colors mt-8"
            initial={{ x: "70%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About Us
          </motion.button>
        </div>

        {/* Right Side - Animated Image */}
        <div className="relative flex-1 flex justify-end items-end overflow-hidden">
          <motion.img
            src="/src/assets/about-right-thumb.png"
            alt="About Us"
            className="w-1/2 sm:w-full md:h-auto"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
