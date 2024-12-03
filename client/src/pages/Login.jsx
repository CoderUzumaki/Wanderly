import React from 'react'
import bgImage from '../assets/airplane2.jpg'; // Import the image
export default function Login() {
  return (
    <div className='w-full flex absolute z-0 top-0 left-0'>
      {/* Left Section */}
      <div 
      style={{backgroundImage: `url(${bgImage})`}}
     className='hidden sm:flex w-1/2 h-screen bg-blue-600 items-start justify-center px-10 bg-center bg-cover py-40'>
        {/* <div className='text-slate-900'>
          <h1 className='text-5xl font-bold'>Welcome Back!</h1>
          <p className='text-2xl mt-5'>To keep connected with us please login with your personal info</p>
        </div> */}
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 h-screen flex items-center justify-center'>
        <form className='w-1/2'>
          <h1 className='text-3xl font-bold'>Let’s get you signed in!</h1>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Email</label>
            <input type='email' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your email' />
          </div>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Password</label>
            <input type='password' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your password' />
          </div>
          <div className='mt-5'>
            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
