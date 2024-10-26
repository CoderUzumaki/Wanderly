import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
      <nav className="flex bg-white z-10 justify-between items-center h-[10vh] w-[92%] mx-auto fixed">
        <div>
          <img className='w-48' src='images/wanderly.png' alt='...' />
        </div>

        {/* Nav Links */}
        <div className={`md:static absolute md:min-h-fit ${isMenuOpen ? 'min-h-[60vh] top-0 bg-white px-5 pt-5' : 'top-[-100%]'} md:flex md:items-center w-full md:w-auto left-0 flex-col md:flex-row gap-8`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 '>
            <li>
              <a className='hover:text-white hover:bg-blue-500 font-semibold px-5 py-3 rounded-full' href='#'><Link to="/">Home</Link></a>
            </li>
            <li>
              <a className='hover:text-white hover:bg-blue-500 font-semibold px-5 py-3 rounded-full' href='#'>About</a>
            </li>
            <li>
              <a className='hover:text-white hover:bg-blue-500 font-semibold px-5 py-3 rounded-full' href='#'>Services</a>
            </li>
            <li>
              <a className='hover:text-white hover:bg-blue-500 font-semibold px-5 py-3 rounded-full' href='#'>FAQs</a>
            </li>
            <li>
              <a className='hover:text-white hover:bg-blue-500 font-semibold px-5 py-3 rounded-full' href='#'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Sign Up Button */}
        <div className='flex items-center gap-6'>

          <button className='text-black font-bold px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-[quicksand]'>
            Log In
          </button>

          <ion-icon 
            name={isMenuOpen ? "close" : "menu"}
            class="text-3xl cursor-pointer md:hidden"
            onClick={onToggleMenu}
          ></ion-icon>

        </div>
      </nav>
  );
};

export default NavBar;
