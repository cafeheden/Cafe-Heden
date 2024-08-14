// src/components/Header/Header.js
import React, { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg'; // Menu icon
import Sidebar from '../Header/Sidebar'; // Sidebar component
import BrandLogo from '../../assets/logo/Logo-Text.svg'; // Importing the logo

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed bg-secondaryColor md:bg-transparent top-0 left-0 w-full z-50 px-8 py-5 md:p-8 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex-shrink-0">
        <img src={BrandLogo} alt="Cafe HideIn Logo" className="h-8 md:h-12" />
      </div>

      {/* Order Online Button */}
      <div className="hidden md:flex flex-1 justify-center">
        <button className="bg-primaryColor text-tertiaryColor py-3 px-4 rounded-full font-semibold hover:scale-105 transition-transform hover:bg-orange-400">
          Order Online
        </button>
      </div>

      {/* Menu Button */}
      <div className="flex-shrink-0">
        <CgMenuRightAlt
          onClick={() => setIsSidebarOpen(true)}
          className="text-tertiaryColor text-4xl cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;
