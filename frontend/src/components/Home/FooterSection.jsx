import React from "react";

// Importing Icons and Image
import TextLogo from '../../assets/logo/Logo-Text.svg';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FooterSection = () => {
  const navigate = useNavigate();

  const handleManagementLogin = () => {
    navigate('/admin-login');
  };
  
  return (
    <section className="flex flex-col bg-secondaryColor py-24 justify-center items-center text-center">
        <div className="logo-image w-48">
            <img src={TextLogo} alt="Cafe Heden Logo" />
        </div>
        <div className="flex flex-col md:flex-row text-tertiaryColor gap-10 text-lg my-10">
            <div className="hover:text-primaryColor ">Home</div>
            <div className="hover:text-primaryColor ">Menu</div>
            <div className="hover:text-primaryColor ">Gallery</div>
            <div className="hover:text-primaryColor ">About Us</div>
            <div className="hover:text-primaryColor ">Contact Us</div>
            <div className="hover:text-primaryColor ">Privacy Policy</div>
            <div className="hover:text-primaryColor cursor-pointer" onClick={handleManagementLogin}>Management</div>
        </div>
        <div className="flex flex-row justify-center gap-4 text-tertiaryColor items-center">
            <FaFacebookF size={24}/>
            <AiFillInstagram size={32}/>
            <FaYoutube size={32}/>
            <FaLinkedinIn size={24}/>
        </div>
      <div className="text-base font-normal text-tertiaryColor mt-10">
        2024 by Cafe Heden | Developed by Monish Ranjan
      </div>
    </section>
  );
};

export default FooterSection;
