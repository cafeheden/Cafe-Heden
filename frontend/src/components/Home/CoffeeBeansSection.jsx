// src/components/FeaturedSection/FeaturedSection.js
import React from 'react';
import Slider from 'react-slick';
// import './FeaturedSection.css'; // For any additional CSS if needed

// Importing Images
import TopLeftImage from '../../assets/seed-left.png';
import TopRightImage from '../../assets/seed-right.png';
import Dish1 from '../../assets/coffebean1.png';
import Dish2 from '../../assets/coffebean2.png';
import Dish3 from '../../assets/coffebean3.png';

function FeaturedSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="relative w-full py-16 bg-[#DCDCD7]">
      {/* Background Images */}
      <img
        src={TopLeftImage}
        alt="Top Left Background"
        className="absolute bottom-0 lg:top-16 left-0  w-1/2 md:w-1/6 lg:w-1/8 z-0"
      />
      <img
        src={TopRightImage}
        alt="Top Right Background"
        className="absolute top-0 right-0 w-1/4 md:w-1/6 lg:w-1/8 z-0"
      />

      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-secondaryColor uppercase">Perfectly Roasted<span className='text-3xl md:4xl lg:text-5xl'><br/>Coffee Beans</span></h2>

        {/* Dish Images */}
        <div className="hidden md:flex justify-center space-x-4">
          <img
            src={Dish1}
            alt="Dish 1"
            className="w-1/5 transform transition-transform duration-300 hover:scale-105 "
          />
          <img
            src={Dish2}
            alt="Dish 2"
            className="w-1/5 transform transition-transform duration-300 hover:scale-105 "
          />
          <img
            src={Dish3}
            alt="Dish 3"
            className="w-1/5 transform transition-transform duration-300 hover:scale-105 "
          />
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-12">
          <Slider {...settings}>
            <div>
              <img
                src={Dish1}
                alt="Dish 1"
                className="w-full max-w-[300px] transform transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={Dish2}
                alt="Dish 2"
                className="w-full max-w-[300px] transform transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={Dish3}
                alt="Dish 3"
                className="w-full max-w-[300px] transform transition-transform duration-300"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
