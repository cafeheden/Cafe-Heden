import React from 'react'

// Importing Pages
import HeroSection from "../components/Home/HeroSection"
import Header from '../components/Header/Header'
import FeaturedSection from '../components/Home/CoffeeBeansSection'
import CategorySection from '../components/Home/CategorySection'
import AboutUsSection from '../components/Home/AboutUsSection'
import OfferSection from '../components/Home/OfferSection'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturedSection />
        <CategorySection />
        <OfferSection />
        <AboutUsSection />
    </div>
  )
}

export default Home