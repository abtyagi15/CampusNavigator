import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/core/HomePage/HeroSection'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className='h-screen'>
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <HeroSection />
            </div>
            <div className='max-w-[1292px] flex flex-col mx-auto'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Home