import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className='bg-gray-200 rounded-lg p-4 flex w-76 justify-center justify-self-center m-32 min-h-76 shadow-2xl text-black'>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <h1 className='text-2xl font-bold'>Signup</h1>
        <div className='flex flex-col space-y-8'>
          <input className='px-4 py-2 border border-gray-600 rounded-lg ' type="text" name="username" placeholder='username' />
          <input className='px-4 py-2 border border-gray-600 rounded-lg ' type="password" name="password" placeholder='password' />
          
          <p className='text-gray-400 justify-center text-sm'>Already have an account? <Link className='text-gray-700 hover:text-gray-950' href={'/Signin'}>Sign in</Link></p>
          <Link href={'/Dashboard'} className='flex justify-center'>
          <button className='bg-blue-500 rounded-lg px-4 py-2 text-amber-50 hover:cursor-pointer hover:bg-blue-950'>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup