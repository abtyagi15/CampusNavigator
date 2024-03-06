import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import PostCardSection from '../components/core/UserHome/PostCardSection'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className='h-screen'>
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <PostCardSection />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Home