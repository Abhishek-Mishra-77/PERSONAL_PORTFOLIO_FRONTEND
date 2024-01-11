import React from 'react';
import Submissions from '../assets/Submissions.jpg'


const MyContibution = () => {
    return (
        <section id='hireme' className='py-10  px-3 text-white'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    Github <span className='text-cyan-600'>Submissions</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>Do you have any work ? </p>
            </div>
            <div className='bg-gray-800 relative px-8 p-2 rounded-2xl  lg:max-w-4xl 
                mx-auto lg:max-w-3xl   mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center box1'>
                <div>
                    <h2 className='text-1xl font-semibond'>Do you want any work from me?</h2>
                    <img src={Submissions} alt='submission' className='rounded-lg ' />
                </div>
            </div>
        </section>
    )
}

export default MyContibution