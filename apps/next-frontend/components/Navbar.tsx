import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="mx-8 md:mx-8 rounded-2xl md:rounded-4xl shadow-md flex flex-col md:flex-row justify-between items-center justify-self-center text-black px-4 md:px-7 w-full md:w-192 bg-white/30 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex justify-center md:justify-start items-center p-2 md:p-2">
        <img src="./Drawr.png" alt="logo" width={80} className="md:w-[100px]" />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-3 p-2 text-white">
        <Link href="/Signin">
          <button className="hover:text-purple-900 hover:cursor-pointer">
            Sign in
          </button>
        </Link>
        <Link href="/Signup">
          <button className="hover:text-purple-900 hover:cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;