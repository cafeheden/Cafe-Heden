import React from 'react'

// Importing Pages
import HeroSection from "../components/Home/HeroSection"
import Header from '../components/Header/Header'
import FeaturedSection from '../components/Home/CoffeeBeansSection'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturedSection />
    </div>
  )
}

export default Home