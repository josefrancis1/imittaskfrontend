import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const user = useSelector((state) => state?.feeds?.user);
    return (
        <div className="bg-white text-black h-16 flex items-center px-4">
            {/* Left Side: Image */}
            <div className="flex items-center ml-10 ">
                <img
                    src="/src/assets/logo2.png" // Replace with your image URL
                    alt="Logo"
                    className="w-10 h-10 "
                />
                {/* <span className="ml-2 text-lg font-semibold">Brand</span> */}
            </div>

            {/* Right Side: Links and Login Button */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-4 lg:space-x-6 ml-auto p-2">
                <button className="w-full sm:w-auto bg-white hover:bg-black hover:text-white text-black font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base transition-colors duration-200">
                    Home
                </button>

                <button className="w-full sm:w-auto bg-white hover:bg-black hover:text-white text-black font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base transition-colors duration-200">
                    Gallery
                </button>

                {!user.length ? (
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="w-full sm:w-auto bg-white hover:bg-black hover:text-white text-black font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base transition-colors duration-200"
                    >
                        Login
                    </button>
                ) : (
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="w-full sm:w-auto bg-white hover:bg-black hover:text-white text-black font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base transition-colors duration-200"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
