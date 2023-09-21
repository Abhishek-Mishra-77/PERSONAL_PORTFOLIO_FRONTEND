import React from 'react';
import './About.css';


const About = () => {

  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-12'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>Know about me?</p>
        <div className='flex md:flex-row flex-col-reverse items-center
              max-w-6xl  mx-auto'>
          <div className='p-2 content'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto '>
                Self-motivated, hard-working, and ambitious Front End Developer from Sharpener Tech with proficiency in javascript and React.
                Experienced at creating apps in collaborative as well as individual capacities with React Framework and various web technologies including HTML,
                CSS, Javascript, React, and Redux. Looking for job opportunities in a technology-driven organization that helps to enhance career as well as knowledge.
              </p>
              <a
                href='https://drive.google.com/file/d/1lncTrZojoG0cdeQbcb-SodqqwsNaCoe9/view'>
                <button className='btn-primary mt-5 ml-9'>Resume <ion-icon name="play-outline"></ion-icon></button> </a>
            </div>
          </div>

          <div className='flex-1 md:mt=0 mt-6 flex justify-center items-center'>
            <div className='profile-picture1 aboutImage'>
              <div className=' w-full flex-1 flex items-center justify-center h-full 
              profile-picture-background1 bg-cyan-600 '>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About