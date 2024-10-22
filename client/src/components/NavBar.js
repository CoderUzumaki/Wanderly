import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/closed
  };

  return (
      <nav className="flex justify-between items-center h-[10vh] w-[92%] mx-auto">
        <div>
          <img className='w-48' src='images/wanderly.png' alt='...' />
        </div>

        {/* Nav Links */}
        <div className={`md:static absolute md:min-h-fit ${isMenuOpen ? 'min-h-[60vh] top-0 bg-white px-5 pt-5' : 'top-[-100%]'} md:flex md:items-center w-full md:w-auto left-0 flex-col md:flex-row gap-8`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
            <li>
              <a className='hover:text-gray-500' href='#'>Home</a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>About</a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>Services</a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Sign Up Button */}
        <div className='flex items-center gap-6'>

          <button className='bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 font-semibold'>
            Sign Up
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
