import React from 'react'
import bgImage from '../assets/travel2.png'; // Import the image

export default function Signup() {
  return (
    <div className='w-full flex absolute top-0 left-0 z-0'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 h-screen flex items-center justify-center'>
        <form className='w-1/2'>
          <h1 className='text-3xl font-bold'>Let’s get you signed in!</h1>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Name</label>
            <input type='string' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your name' />
          </div>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Email</label>
            <input type='email' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your email' />
          </div>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Password</label>
            <input type='password' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your password' />
          </div>
          <div className='mt-5'>
            <label className='block text-gray-700 font-bold'>Confirm Password</label>
            <input type='password' className='w-full mt-1 p-2 border border-gray-300 rounded' placeholder='Enter your password' />
          </div>
          <div className='mt-5'>
            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded'>Register</button>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div 
      style={{backgroundImage: `url(${bgImage})`}}
     className='hidden sm:flex w-1/2 h-screen bg-blue-600 items-center justify-center px-10 bg-center bg-cover'>
        {/* <div className='text-slate-900'>
          <h1 className='text-5xl font-bold'>Ready for Your Next Adventure?</h1>
          <p className='text-2xl mt-5'>Create an account to unlock exciting travel possibilities and discover destinations that await you!</p>
        </div> */}
      </div>
      
    </div>
  )
}
