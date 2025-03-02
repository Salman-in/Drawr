import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='mx-8 mt-4 rounded-4xl shadow-md flex justify-between items-center justify-self-center text-black px-7 w-192 bg-white/30 backdrop-blur-xl'>
            <div className='flex justify-between items-center px-5 py-2'>
                <img src="./Drawr.png" alt="logo" width={100} />
            </div>
            <div className='flex justify-between items-center space-x-3 px-5 py-2 text-white'>
                <Link href="/Signin">
                        <button className='hover:text-purple-900 hover:cursor-pointer'>Sign in</button>
                </Link>
                <Link href="/Signup">
                <button className='hover:text-purple-900 hover:cursor-pointer'>Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar