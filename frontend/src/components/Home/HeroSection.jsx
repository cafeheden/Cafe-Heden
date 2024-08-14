// src/components/HeroSection/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; // For any additional CSS if needed

// Importing Images
import CoffeeLeft from '../../assets/coffee-mug1.png'
import CoffeeRight from '../../assets/coffee-mug2.png'
import SMCoffeeRight from '../../assets/smcoffee-mug2.png'

function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-cover bg-left" style={{ backgroundImage: 'url(/src/assets/banner1.jpg)' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Images Animations */}
        <div className="relative w-full md:h-full flex flex-col md:flex-row items-center lg:justify-between p-16">
          {/* Left Image */}
          <motion.img
            src={SMCoffeeRight}
            alt="Left Image"
            className="w-[300px] md:hidden"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 75, duration: 1 }}
          />
          <motion.img
            src={CoffeeLeft}
            alt="Left Image"
            className="hidden md:block md:w-1/3"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 75, duration: 1 }}
          />

          {/* Center Content */}
          {/* Text and Button */}
        <motion.div
          className="md:w-full flex flex-col items-center mt-12"
          initial={{ y: '100vh', opacity: '0%' }}
          animate={{ y: '0%', opacity: '100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-tertiaryColor mb-4">The Way Nature Intended</h1>
          <button className="bg-primaryColor text-tertiaryColor py-3 px-6 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-orange-400">
            View Menu
          </button>
        </motion.div>

          {/* Right image */}
          <motion.img
            src={CoffeeRight}
            alt="Right Image"
            className="hidden md:block w-1/3"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 75, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
