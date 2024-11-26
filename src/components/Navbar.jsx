import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-black text-white h-16 flex items-center px-4">
            {/* Left Side: Image */}
            <div className="flex items-center ml-10 ">
                <img
                    src="/src/assets/l1.png" // Replace with your image URL
                    alt="Logo"
                    className="w-10 h-10 "
                />
                {/* <span className="ml-2 text-lg font-semibold">Brand</span> */}
            </div>

            {/* Right Side: Links and Login Button */}
            <div className="flex items-center ml-auto space-x-6">
                <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">Home</button>
                <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">Gallery</button>
                 <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
