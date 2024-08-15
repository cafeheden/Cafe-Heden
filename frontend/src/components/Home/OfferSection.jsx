import React from "react";
import "./OfferSection.css";

const OfferSection = () => {
  return (
    <section
      className="offer-section py-16 md:py-24 lg:py-32 bg-cover md:bg-center md:bg-contain relative"
      style={{ backgroundImage: "url('/src/assets/bg-offer.jpg')" }}
    >
      {/* Left Image */}
      <div className="absolute left-0 top-20 md:top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/4 slide-left-right">
        <img
          src="/src/assets/chowmein.png"
          alt="Left Dish"
          className="w-full h-auto"
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-3/4 md:top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/4 slide-right-left">
        <img
          src="/src/assets/offer-right-side-food-2.png"
          alt="Right Dish"
          className="w-full h-auto"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center mx-auto px-4 md:px-8 lg:px-16 uppercase">
        <h2 className="text-secondaryColor text-xs md:text-sm lg:text-base font-bold uppercase">
          Cafe Heden
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:text-redHighlight mt-4">
          Special Offer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-darkGrey mt-2 md:mt-4 font-bold">
          On Online Orders
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 md:mt-4">
          Get flat 15% off across our menu
        </p>
        <div className="bg-primaryColor text-secondaryColor text-center font-bold py-2 px-4 mt-4 w-full max-w-xs mx-auto">
          USE CODE: <span className="text-tertiaryColor">"REG15"</span>
        </div>
        <div className="mt-8 flex justify-center items-center gap-4 md:gap-12 lg:gap-4 px-8 md:x-0">
          <button className="px-2 md:px-8 py-2 bg-secondaryColor text-tertiaryColor font-semibold rounded-full hover:bg-primaryColor transition-colors w-full md:w-auto">
            Order Online
          </button>
          <button className="px-2 md:px-8 py-2 border-2
          border-transparent text-tertiaryColor bg-secondaryColor md:border-secondaryColor md:text-secondaryColor font-semibold rounded-full hover:bg-primaryColor hover:border-transparent hover:text-tertiaryColor transition-colors w-full md:w-auto">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
