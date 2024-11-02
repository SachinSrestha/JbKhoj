import React from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
  return (
    <div className=' w-full mt-10 text-center'>
        <span className=' border-none bg-gray-200  h-11 rounded-3xl  px-4 py-2 text-[#F83002] font-semibold'>No. 1 Site For Job Hunting</span>

        <h1 className='mt-7 text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#5e39c2]'>Dream Jobs</span></h1>

        <p className=' w-[670px] mx-auto mt-6 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus sunt perferendis consequuntur, dolores eligendi libero dolor deleniti aliquam 
        </p>

        <div className='flex justify-center items-center'>
            <input type="text" placeholder='Find your dream jobs' className='outline-none mt-6 w-[620px] rounded-l-full px-4 py-[10px] shadow-lg border-2 border-slate-100'/>
            
            <Button className='rounded-r-full bg-[#6A38C2] hover:bg-[#6b38c2d2] active:bg-[#6b38c2] 
            mt-6 h-[47px]'> <Search className='size-5 mr-1'/> </Button>
        </div>
    </div>
  )
}

export default HeroSection