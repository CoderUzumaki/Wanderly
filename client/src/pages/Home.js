import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function Home() {
  return (
    <div 
    className='flex flex-col min-h-screen max-h-fit overflow-x-hidden items-center justify-between scroll-smooth relative '
    >
      <NavBar />
      <div 
      className="container bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-4xl font-bold w-[92%] h-[85vh] rounded-lg mt-5 mb-10 shadow-xl shadow-gray-400"
      style={{backgroundImage: `url(https://i.pinimg.com/1200x/81/a5/ac/81a5acc0c27fe29a0a7515e839caa851.jpg)`}}
      >
      
        <div className='text-center flex flex-col items-center backdrop-blur-[1px] w-full'>
            <h1 className='text-5xl'>Discover The Magic In <br/>Every Destination With Us</h1>

            <p className='text-white text-sm mt-10 w-[50%]'> 
              Wanderly is a travel agency that offers the best travel packages to different destinations around the world.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
