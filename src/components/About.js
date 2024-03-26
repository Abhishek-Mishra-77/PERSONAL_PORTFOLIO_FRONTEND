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
              <p className='text-justify leading-7 w-11/12 mx-auto font-sans'>
                I am a dedicated Frontend Developer hailing from Bhadohi, Uttar Pradesh, currently employed at OMR India. With a keen analytical mindset and a meticulous eye for detail, I specialize in ReactJS, crafting user-centric solutions that seamlessly blend functionality with aesthetics. With a collaborative spirit and adeptness in interdisciplinary teamwork, I excel in driving goal-oriented projects to fruition. Passionate about enhancing products through innovative software development, I am eagerly seeking a challenging Software Developer position where I can contribute my expertise and further elevate project outcomes.
              </p>
              <a
                target="_blank" rel="noopener noreferrer"
                href='https://drive.google.com/file/d/1nkKiXcPVYgJdCBjJHYUdmaBUcQpWXuYx/view'>
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