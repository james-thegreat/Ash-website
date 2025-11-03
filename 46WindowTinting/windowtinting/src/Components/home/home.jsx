import { useState } from 'react';

export default function Home() {
    return (
        <section id="home" className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
            <h1 className='text-5-1 font-bold text-blue-600 mb-4'>Welcome</h1>
            <p className='text-lg text-gray-600'>Your one-stop window tinting solution.</p>
        </section>
    )
}
