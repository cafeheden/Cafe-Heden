import React from 'react'

// Importing Pages
import HeroSection from "../components/Home/HeroSection"
import Header from '../components/Header/Header'
import FeaturedSection from '../components/Home/CoffeeBeansSection'
import CategorySection from '../components/Home/CategorySection'
import AboutUsSection from '../components/Home/AboutUsSection'
import OfferSection from '../components/Home/OfferSection'
import RatingSection from '../components/Home/RatingSection'
import FooterSection from '../components/Home/FooterSection'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturedSection />
        <CategorySection />
        <AboutUsSection />
        <OfferSection />
        <div className='bg-secondaryColor py-10 md:py-16 text-center text-tertiaryColor font-bold text-2xl md:text-4xl'>We Serve Every Food With Love</div>
        <RatingSection />
        <FooterSection />
    </div>
  )
}

export default Home