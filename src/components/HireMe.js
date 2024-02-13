import React from 'react';
import myImage from '../assets/My.png'

const HireMe = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do you have any work ? </p>
      </div>
      <div className='bg-gray-800 relative px-8 rounded-2xl py-5 lg:max-w-4xl 
      mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center box1'>
        <div>
          <h2 className='text-2xl font-semibond'>Do you want any work from me?</h2>
          <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 font-sans'>
            Highly skilled Front End Developer with expertise in JavaScript and React.
            Proven track record of creating collaborative and individual apps using HTML, CSS, JavaScript, React, and Redux.
            Seeking growth and challenges in a technology-driven organization. Committed to delivering exceptional user experiences and staying up-to-date with industry trends. Eager to contribute my talents to drive impactful web development projects.
          </p>
          <button className='btn-primary mt-10'>Say Hello <ion-icon name="play-outline"></ion-icon></button>
        </div>
        {/* <img src={myImage} alt='' className='lg:h-[32rem] h-80 lg:absolute 
        bottom-0 -right-3 object-cover'/> */}
      </div>
    </section>
  )
}

export default HireMe