import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Unleash Your Creativity with <span className="font-semibold">Drawr</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create, collaborate, and bring your ideas to life with our intuitive drawing application.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link href="/signup">
          <div className='flex justify-center mx-4 w-fit'>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[5px]">
                    Sign Up
                </button>
                </div>
          </Link>
          <Link href="/signin">
          <div className='flex justify-center mx-auto w-fit'>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[5px]">
                    Sign In
                </button>
                </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
