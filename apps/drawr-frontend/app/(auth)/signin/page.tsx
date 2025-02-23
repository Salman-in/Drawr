"use client";
import React, { useState } from 'react';

const Signin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle signup logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="max-w-md mx-auto mt-32 bg-gray-100 rounded-xl shadow-lg p-16">
            <h1 className="text-6xl text-center pb-8 text-purple-950 font-black">Drawr</h1>
            <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
                    />
                </div>
                <div className='flex justify-center mx-auto w-fit'>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[5px]">
                    Sign In
                </button>
                </div>
            </form>
        </div>
    );
};

export default Signin;
