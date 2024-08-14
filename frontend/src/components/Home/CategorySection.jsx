import React from "react";
import BouncingBalls from "../Home/BouncingBalls";
import './CategorySection.css';

const CategorySection = () => {
  return (
    <section className="foods-thumb p-0">
      <ul className="flex flex-wrap m-0 p-0 list-none gap-0">
        {/* Premium Tea */}
        <li
          className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-64 md:h-[385px] overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:zoom-in"
          style={{ backgroundImage: "url('/src/assets/green-tea.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-transparent bg-opacity-50 flex flex-col justify-center items-start p-4">
            <h2 className="text-tertiaryColor text-xl md:text-2xl font-bold">
              Premium Tea
            </h2>
            <button className="mt-4 px-4 py-2 bg-tertiaryColor text-green-800 font-semibold rounded-full hover:bg-green-800 hover:text-tertiaryColor transition-colors">
              View Menu
            </button>
          </div>
        </li>

        {/* Spicy Grills */}
        <li
          className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-64 md:h-[385px] overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:zoom-in"
          style={{ backgroundImage: "url('/src/assets/spicy-grills.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-transparent bg-opacity-50 flex flex-col justify-center items-start p-4">
            <h2 className="text-tertiaryColor text-xl md:text-2xl font-bold">
              Spicy Grills
            </h2>
            <button className="mt-4 px-4 py-2 bg-tertiaryColor text-gray-700 font-semibold rounded-full hover:bg-gray-700 hover:text-tertiaryColor transition-colors">
              View Menu
            </button>
          </div>
        </li>

        {/* Quick Bites */}
        <li
          className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-64 md:h-[385px] overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:zoom-in"
          style={{ backgroundImage: "url('/src/assets/indian-veg-burger.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-60 flex flex-col justify-center items-start p-4">
            <h2 className="text-tertiaryColor text-xl md:text-2xl font-bold">
              Quick Bites
            </h2>
            <button className="mt-4 px-4 py-2 bg-tertiaryColor text-black font-semibold rounded-full hover:bg-black hover:text-tertiaryColor transition-colors">
              View Menu
            </button>
          </div>
        </li>

        {/* Pan Asian */}
        <li
          className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-56 md:h-[385px] lg:h-56 overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:zoom-in"
          style={{ backgroundImage: "url('/src/assets/pan-asian-food.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-transparent bg-opacity-50 flex flex-col justify-center items-start p-4">
            <h2 className="text-tertiaryColor text-xl md:text-2xl font-bold">
              Pan Asian
            </h2>
            <button className="mt-4 px-4 py-2 bg-tertiaryColor text-orange-800 font-semibold rounded-full hover:bg-orange-800 hover:text-tertiaryColor transition-colors">
              View Menu
            </button>
          </div>
        </li>

        {/* Continental */}
        <li
          className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-56 md:h-56 overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:zoom-in"
          style={{ backgroundImage: "url('/src/assets/continental-food.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent bg-opacity-50 flex flex-col justify-center items-start p-4">
            <h2 className="text-tertiaryColor text-xl md:text-2xl font-bold">
              Continental
            </h2>
            <button className="mt-4 px-4 py-2 bg-tertiaryColor text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-tertiaryColor transition-colors">
              View Menu
            </button>
          </div>
        </li>

        {/* And Much More */}
        <li className="relative flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/6 h-56 md:h-56 overflow-hidden bg-gray-200 flex flex-col justify-center items-center hover:text-primaryColor">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondaryColor">
              AND MUCH
            </h2>
            <div className="flex items-end">
              <span className="text-xl md:text-2xl font-bold text-secondaryColor flex-shrink-0">
                MORE
              </span>
              <div className="ml-4 flex items-end">
                <BouncingBalls />
              </div>
            </div>
            <div className="text-2xl text-secondaryColor hover:text-primaryColor transition-colors">
              →
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CategorySection;
