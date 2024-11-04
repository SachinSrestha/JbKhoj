import CategoryCarousel from '@/components/shared/CategoryCarousel'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import LatestJobs from '@/components/shared/LatestJobs'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home