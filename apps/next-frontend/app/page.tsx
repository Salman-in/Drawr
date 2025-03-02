import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="fixed top-2 left-0 w-full z-50">
        <Navbar />
      </div>
      <section className="flex flex-col items-center justify-center text-center pt-24 md:pt-32 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Unleash Your Creativity
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl">
          Drawr is an intuitive, real-time collaborative drawing platform. Create, share, and collaborate effortlessly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/Signup">
            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:cursor-pointer">
              Sign Up
            </button>
          </Link>
          <Link href="/Signin">
            <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:cursor-pointer">
              Sign In
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-10 md:mt-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center mb-52">
        <div className="p-4 sm:p-6 bg-white/20 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold">Real-Time Collaboration</h2>
          <p className="mt-2 text-xs sm:text-sm">Draw together with friends and colleagues instantly.</p>
        </div>
        <div className="p-4 sm:p-6 bg-white/20 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold">Powerful Tools</h2>
          <p className="mt-2 text-xs sm:text-sm">Access a variety of brushes, layers, and editing features.</p>
        </div>
        <div className="p-4 sm:p-6 bg-white/20 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold">Save & Share</h2>
          <p className="mt-2 text-xs sm:text-sm">Export your work and share it with the world.</p>
        </div>
      </section>

      <footer className="mt-10 md:mt-20 py-4 sm:py-6 text-center bg-white/10">
        <p className="text-xs sm:text-sm">&copy; 2025 Drawr. All rights reserved.</p>
      </footer>
    </div>
  );
}