import React from "react";
import NavBar from "../components/NavBar";

const Error404 = () => {
    return (
        <div className="h-[100vh] w-full bg-white">
            <NavBar />
            <img src='images\404error.png' alt='...' className="md:w-[70%] mx-auto" />
        </div>
    );
};

export default Error404;