import React from "react";

// Importing Icons
import { ImInstagram } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex-col bg-lightGrey text-secondaryColor pt-20 pb-10 mt-64">
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row justify-between px-8 md:px-40">
        <div className="more font-medium text-lg">
          <div className="mb-4 text-base">MORE</div>
          <div className="mb-1">Privacy Policy</div>
          <div className="mb-1">Terms & Conditions</div>
          <div className="mb-1">Cancellation & Refund Policy</div>
          <div>About Us</div>
        </div>
        <div className="more font-medium text-lg">
          <div className="mb-8 text-base">CONTACT US</div>
          <div className="mb-1">+91-6299406521</div>
          <div className="mb-1">hedencafe@gmail.com</div>
          <div className="uppercase">
            1st & 2nd floor, Boring Rd,<br/> opp. PC Jeweller, Patna, Bihar 800001
          </div>
        </div>
        <div className="">
          <h2 className="uppercase mb-4">Follow Us</h2>
          <div className="more flex gap-4">
            <div className="border border-gray-500 rounded-full p-4">
              <FaFacebookF size={20} />
            </div>
            <div className="border border-gray-500 rounded-full p-4">
              <ImInstagram size={20}/>
            </div>
          </div>
        </div>
      </div>
      <div className="trademark mt-20 text-center">
        Copyright 2024 Cafe Heden Private Limited Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
