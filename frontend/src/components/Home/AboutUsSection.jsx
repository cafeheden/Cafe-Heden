import React, { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInSection, setIsInSection] = useState(false);

  const handleScroll = () => {
    if (isInSection) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInSection]);

  return (
    <section
      className="relative w-full bg-cover bg-left"
      style={{ backgroundImage: "url(/src/assets/about-bg.jpg)" }}
      ref={sectionRef}
    >
      {/* Content Overlay */}
      <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 px-8 py-16 md:px-32 md:py-64 space-y-8 md:space-y-0 z-10">
          <h1 className="text-6xl font-bold text-yellow-500 uppercase">
            About<br/>Cafe Heden
          </h1>
          <p className="text-lg text-white mt-12">
            Café Heden is an offbeat restro-cafe with an
            <br />
            exceptional quality of food and beverages.
          </p>
          <div className="mt-8 space-x-4">
            <button className="px-8 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition-colors">
              ABOUT US
            </button>
            <button className="px-8 py-2 bg-orange-400 text-white font-semibold hover:bg-orange-500 transition-colors">
              PLAY VIDEO
            </button>
          </div>
        </div>

        {/* Right Side - Animated Image */}
        <div className="relative flex-1 flex justify-end items-end overflow-hidden">
          <img
            src="/src/assets/about-right-thumb.png"
            alt="About Us"
            className="w-[400px] h-auto transition-transform ease-out duration-200"
            style={{ transform: `translateY(${isInSection ? scrollY * 0.1 : 0}px)` }}
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;