import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// importing Icons
import { GoBell } from "react-icons/go";
import { RiLogoutCircleLine } from "react-icons/ri";

const Header = () => {

  const userName = localStorage.getItem("userName");

  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.clear();
    onClick = `${window.location.reload()}`;
    handleSuccess("Logged out successfully!");
    setTimeout(() => {
      navigate("/admin-login");
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-8 text-tertiaryColor">
        <div>
          <h1 className="text-xs">Welcome Back</h1>
          <p className="text-xl font-semibold">{userName}</p>
        </div>
        <div className="flex items-center space-x-5">
          <button onClick={handleLogout} className="logout-icon cursor-pointer">
            <RiLogoutCircleLine size={28} />
          </button>
          <div className="flex items-center space-x-5">
            {/* <button className="relative text-2xl text-gray-600 ">
              <GoBell size={28} className="text-tertiaryColor" />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
                9
              </span>
            </button> */}

            {/* Profile Button */}
            <Link to="/admin/admin-settings">
              <img
                className="w-8 h-8 rounded-full border-4 border-tertiaryColor"
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
