import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// Importing Icons and Images
import CafeImage from '../../assets/images/cafe-img1.jpg'

const AdminLogin = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password}  =loginInfo
    if(!email || !password) {
      return handleError('All fields are required')
    }
    try {
      const url = "http://localhost:8080/api/admin/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, userType, error } = result;
      if(success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userType', userType);
        localStorage.setItem('userName', name);

        navigate('/admin/home')
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if(!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <div className="bg-secondaryColor min-h-screen flex items-center justify-center">
      <div className="bg-tertiaryColor flex shadow-lg shadow-black max-w-3xl p-10 font-lora items-center justify-center">
        {/* Form */}
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-primaryColor">Login</h2>
          <p className="text-sm mt-4">
            If you are already a member, easily login
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4 text-secondaryColor">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              autoFocus
              placeholder="Email"
              value={loginInfo.email}
              className="p-2 mt-8 border"
            />
            <div className="relative">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                autoFocus
                placeholder="Password"
                value={loginInfo.password}
                className="p-2 border w-full"
              />
            </div>

            <a href="" className="mt-1 text-xs text-right text-darkGrey">
              Forgot Password?
            </a>

            <button type="submit" className="bg-primaryColor text-tertiaryColor font-medium py-2 hover:scale-110">
              Login
            </button>
            <div className="text-xs">
              <p className="text-darkGrey font-normal">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primaryColor font-semibold hover:scale-110"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* ============== */}

        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img src={CafeImage} alt="Cafe Image" />
        </div>
        {/* ============== */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
