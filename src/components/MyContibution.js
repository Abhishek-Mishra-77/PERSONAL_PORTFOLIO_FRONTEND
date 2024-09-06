import React from 'react';
import leetcode from '../assets/leetcode.jpeg'
import github from '../assets/github.jpeg'

const MyContibution = () => {
    return (
        <section id='hireme' className='py-10  px-3 text-white bg-gradient-to-b from-gray-800 to-gray-700'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    Code <span className='text-cyan-600'>Contributions</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>Do you have any work ? </p>
            </div>
            <div className='bg-gray-800 relative px-8 p-2 rounded-2xl  lg:max-w-4xl 
                mx-auto lg:max-w-3xl   mt-24  gap-6 lg:flex-row flex-col-reverse items-center box1'>
                <div>
                    <h1 className='text-1xl font-semibond'>Leetcode</h1>
                    <img src={leetcode} alt='submission' className='rounded-lg ' />
                </div>
                <div>
                    <h1 className='text-1xl font-semibond'>Github</h1>
                    <img src={github} alt='submission' className='rounded-lg ' />
                </div>
            </div>
        </section>
    )
}

export default MyContibution