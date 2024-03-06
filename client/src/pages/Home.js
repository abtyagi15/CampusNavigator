import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
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
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Home