import CategoryCarousel from '@/components/shared/CategoryCarousel'
import HeroSection from '@/components/shared/HeroSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
    </div>
  )
}

export default Home