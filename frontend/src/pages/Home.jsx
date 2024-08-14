import React from 'react'

// Importing Pages
import HeroSection from "../components/Home/HeroSection"
import Header from '../components/Header/Header'
import FeaturedSection from '../components/Home/CoffeeBeansSection'
import CategorySection from '../components/Home/CategorySection'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturedSection />
        <CategorySection />
    </div>
  )
}

export default Home