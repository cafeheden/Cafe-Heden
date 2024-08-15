import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../../../utils/ToastMessageUtil";

// Icons
import {
  IoSettingsOutline,
  IoReceiptOutline,
  IoRestaurantOutline,
} from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiNotebookLight } from "react-icons/pi";

// Image & Logos
import CafeHedenLogo from "../../../assets/logo/Logo-Text.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active link based on the current route
  const SIDEBAR_LINKS = [
    { id: 1, path: "/admin/home", name: "Dashboard", icon: RiHome2Line },
    {
      id: 2,
      path: "/admin/manage-orders",
      name: "Orders",
      icon: PiNotebookLight,
    },
    {
      id: 3,
      path: "/admin/manage-menu",
      name: "Manage Menu",
      icon: IoRestaurantOutline,
    },
    {
      id: 5,
      path: "/admin/billing",
      name: "Billing",
      icon: IoReceiptOutline,
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeLinkIndex = SIDEBAR_LINKS.findIndex(
      (link) => link.path === currentPath
    );
    setActiveLink(activeLinkIndex !== -1 ? activeLinkIndex : 0);
  }, [location.pathname]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    handleSuccess("Logged out successfully!");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r-2 border-darkGrey pt-8 px-4 bg-darkGrey bg-opacity-30 text-tertiaryColor">
      {/* Logo */}
      <div className="mb-4">
        <img src={CafeHedenLogo} alt="" />
      </div>
      {/* =================== */}

      <hr className="mb-4" />

      {/* Navigation Links */}
      <ul className="mt-2 space-y-2">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-normal rounded-md py-4 px-5 hover:bg-secondaryColor hover:text-primaryColor ${
              activeLink === index ? "bg-secondaryColor text-primaryColor" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex items-center justify-center md:justify-start md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{React.createElement(link.icon)}</span>
              <span className="text-sm hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-5 justify-center items-center text-xs text-lightGrey font-extralight hidden md:flex">
        <p>Designed by Monish</p>
      </div>
      {/* =================== */}
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
