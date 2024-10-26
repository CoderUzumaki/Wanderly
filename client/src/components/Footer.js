import React from "react";
import ItemsContainer from "./ItemsContainer";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full flex justify-center">
            <div className=" text-white p-10 flex flex-col md:flex-row items-center justify-between bg-cover bg-center w-[92%] h-auto" style={{ backgroundImage: "url('images/bg-img-01.png')" }}>

                {/* Left Section */}
                {/* <div className="md:w-1/2 w-3/4 text-left flex flex-col justify-center">
                <div className="text-4xl md:text-3xl font-bold mb-2">
                <span className="text-emerald-400">Subscribe</span> To Our Mailing List & Stay Up To Date
                </div>
                
                <p className="text-sm md:text-lg mb-4">
                    Share the core values and principles that drive your company. Emphasize a commitment to customer satisfaction.
                </p>
                {/* Email Input */}
                {/* <div className="flex justify-center md:justify-start">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="p-2 md:p-3 focus:outline-none text-[#001A3D] font-semibold w-2/3 md:w-1/2"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 border-8 border-white">
                        Subscribe Now →
                    </button>
                </div>
            </div> */}

                <div
                    className="w-1/2 flex flex-col justify-center items-start" >
                    <span className="text-4xl md:text-3xl font-bold mb-2">
                        <span className="text-emerald-400">
                            Subscribe
                        </span> To Our Mailing List & Stay Up To Date
                    </span>

                    <p
                        className="text-sm md:text-lg mb-4 mt-2"
                    >
                        Share the core values and principles that drive your company. Emphasize a commitment to customer satisfaction.
                    </p>

                    <div
                        className="bg-white border-8 border-white flex items-center justify-left text-left w-fit hover:shadow-lg shadow-slate-900">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-2/3 md:w-1/2 p-2 md:p-3 focus:outline-none text-[#001A3D] font-semibold"
                        />

                        <motion.button
                            className="bg-blue-500 rounded-md px-4 py-2 md:py-3 w-fit md:w-1/2 relative radial-gradient "
                            initial={{ "--x": "100%" }}
                            animate={{ "--x": "-100%" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ 
                                repeatDelay: 1,
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
                                className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask"
                            >
                                Subscribe Now →
                            </span>

                            <span    
                                className="absolute block inset-0 rounded-md p-px linear-overlay"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Right Section */}

            </div>
        </footer>
    );
};

export default Footer;