import React from "react";
import './OfferSection.css';

const OfferSection = () => {
  return (
    <section
      className="offer-section"
      style={{ backgroundImage: "url('/src/assets/bg-offer.jpg')" }}
    >
      {/* Left Image */}
      <div className="slide-left-right">
        <img
          src="/src/assets/chowmein.png"
          alt="Left Dish"
          className="w-full h-auto"
        />
      </div>

      {/* Right Image */}
      <div className="slide-right-left">
        <img
          src="/src/assets/offer-right-side-food-2.png"
          alt="Right Dish"
          className="w-full h-auto"
        />
      </div>

      {/* Center Content */}
      <div className="content">
        <h2 className="text-greenHighlight text-sm uppercase">Cafe Heden</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mt-4">
          Special Offer
        </h1>
        <p className="text-xl md:text-2xl text-orange-500 mt-2">
          On Online Orders
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Get flat 15% off across our menu
        </p>
        <div className="bg-yellowHighlight text-secondaryColor font-bold py-2 px-6 mt-4">
          USE CODE: "REG15"
        </div>
        <div className="mt-8 space-x-4">
          <button className="px-8 py-2 bg-secondaryColor text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Order Online
          </button>
          <button className="px-8 py-2 border-2 border-secondaryColor text-secondaryColor font-semibold rounded-full hover:bg-gray-100 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;