import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/herosection'
import FeatureSection from '../components/features'
import { useContexts } from '../config/contextApp'


const Homex = () => {
   
  
  return (
    <div className=''>
       
        <div className="z-40">
           <Navbar/>

        {/* hero section */}
        <HeroSection/>
        <FeatureSection/>
      
        </div>
    </div>
  )
}

export default Homex
