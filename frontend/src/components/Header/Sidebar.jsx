// src/components/Sidebar/Sidebar.js
import React from 'react';
import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Sidebar({ isOpen, onClose }) {
  const menuItems = ['Home', 'Menu', 'About Us', 'Contact'];

  const sidebarVariant = {
    open: { x: '0%' },
    closed: { x: '100%' },
  };

  const menuItemVariant = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }, // Adjust duration for smoother transition
    }),
    closed: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      className={`fixed top-0 right-0 w-full h-full bg-secondaryColor bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariant}
    >
      <div className="absolute top-8 right-8">
        <FiX onClick={onClose} className="text-tertiaryColor text-4xl cursor-pointer" />
      </div>
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {menuItems.map((item, i) => (
          <motion.li
            key={item}
            custom={i}
            variants={menuItemVariant}
            className="mb-6"
            style={{ transform: `translateY(${i * 20}px)` }}
          >
            <a href={`#${item.toLowerCase()}`} className="text-tertiaryColor text-2xl hover:text-primaryColor">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
