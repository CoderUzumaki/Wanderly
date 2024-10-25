import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/api/auth', {
        email,
        password
      });

      navigate('/home');

    } catch (error) {
      setError('Invalid email or password. Please try again.'); 
      console.log(error);
    }
  }

  return (
    <div
      className="flex md:flex-row flex-col items-center justify-center min-h-screen max-h-fit bg-cover bg-center bg-blue-200"
    >

      {/* left side */}
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center bg-blue-400 h-screen">
        <h1 className="text-5xl font-bold text-white text-center mt-20">Welcome Back</h1>
        <p className="text-white text-center mt-5">To keep connected with us please login with your personal info</p>
      </div>

      {/* right side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
        <img src="/images/logo-nobg.png" alt="Logo" className="mb-4 w-20 h-auto" />
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <a
              href="#"
              className="text-sm text-indigo-500 hover:underline block text-right mt-2"
            >
              Forgot Password?
            </a>
          </div>

          <motion.button
            type='submit'
            className="w-full bg-indigo-500 hover:bg-indigo-600 font-bold rounded-md px-4 py-2 md:py-3 relative radial-gradient "
            initial={{ "--x": "100%" }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              repeatDelay: 0,
              repeat: Infinity,
              repeatType: "loop",
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              }
            }}
          >
            <span
              className="text-white tracking-wide font-bold h-full w-full block relative linear-mask"
            >
              LOGIN
            </span>

            <span
              className="absolute block inset-0 rounded-md p-px linear-overlay"
            />
          </motion.button>

          <span className='flex justify-center gap-2 items-center'>
            Don't have an account?
            <Link
              to="/signup"
              className="text-sm text-indigo-500 hover:underline block"
            >
              Sign Up
            </Link>
          </span>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
