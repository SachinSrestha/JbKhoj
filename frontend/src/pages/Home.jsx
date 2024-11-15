import CategoryCarousel from '@/components/shared/CategoryCarousel'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import LatestJobs from '@/components/shared/LatestJobs'
import Navbar from '@/components/shared/Navbar'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { setUser } from '@/store/authSlice'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


function Home() {
  useGetAllJobs();
  const navigate = useNavigate();
  const { user , isFirstTime} = useSelector((store) => store.auth);
  useEffect(() => {
    if (user === null && isFirstTime) {
      navigate("/login");

    }
  }, [user]);

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