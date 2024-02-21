import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import LoginForm from '../components/core/LoginPage/LoginForm'
const Login = () => {
  return (
    <div className='h-screen'>
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <LoginForm />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Login