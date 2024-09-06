import React from 'react';
import profile from "../assets/profilephoto.jpg"
import { FaArrowDown } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Profile = () => {

  const social_media = [
    {
      id: 'd1',
      Symbol: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/abhishek-mishra-342494237/'
    },
    {
      id: 'd2',
      Symbol: "logo-github",
      link: 'https://github.com/Abhishek-Mishra-77'
    },
    {
      id: 'd3',
      Symbol: "logo-whatsapp",
      link: 'https://wa.me/8577887978'
    },
  ]


  return (
    <section className='mt-16 md:mt-32 mb-10 flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-12'>
      {/* Profile Picture */}
      <div className='flex flex-col md:flex-row justify-around bg-gray-200 p-6 sm:p-8 rounded-2xl w-full md:w-auto'>
        <div>
          <div className='relative w-full h-72 sm:h-80 md:w-96 md:h-96 rounded-2xl border-4 border-cyan-500 shadow-lg overflow-hidden'>
            <img
              // src={profile}
              alt='Profile'
              className='w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-110'
            />
          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-2xl sm:text-3xl text-gray-400 font-semibold mt-2'>𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑴𝒊𝒔𝒉𝒓𝒂</h1>
            <div className='rounded border-2 mt-2 px-2'>
              <p className='text text-gray-400'>Available for Work</p>
            </div>
            <div className='text-2xl sm:text-3xl mt-4 flex items-center justify-center md:justify-start gap-4 sm:gap-6'>
              {social_media?.map((icon) => (
                <div
                  key={icon.id}
                  className='text-gray-500 bg-white rounded-2xl cursor-pointer flex justify-center items-center hover:text-cyan-500 transition-transform transform hover:scale-110 duration-300'
                >
                  <a className='p-2' href={icon.link} target='_blank' rel='noopener noreferrer'>
                    <ion-icon name={icon.Symbol}></ion-icon>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className='flex mt-6 md:mt-0 md:ml-12 paragraph w-full md:w-1/2 text-center md:text-left'>
          <div className='animate-fade-in'>
            <h1 className='text-white font-bold text-xl sm:text-2xl md:text-5xl leading-tight'>
              <span className='text-cyan-600 block md:inline md:text-6xl'>
                𝑯𝒆𝒍𝒍𝒐!
              </span>
              <br />
              𝑰 𝒂𝒎 <span className='text-cyan-600'>𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑴𝒊𝒔𝒉𝒓𝒂</span>
            </h1>
            <h1 className='mt-4 text-gray-400 text-lg sm:text-2xl md:text-2xl font-bold'>
              Software Engineer
            </h1>

            <p className='mt-4 text-gray-500 text-sm md:text-base leading-relaxed'>
              Experienced Software Developer specializing in MERN stack technologies, adept at delivering scalable and innovative web solutions.
            </p>

            {/* Contact Button */}
            <a href="https://wa.me/8577887978" target="_blank" rel="noopener noreferrer">
              <button className='btn-primary flex justify-center items-center mt-8 px-6 py-2 sm:px-8 sm:py-3 gap-4 bg-black text-white shadow-lg hover:bg-white hover:text-black border border-black transition-colors duration-300'>
                <h1 className='text-sm sm:text-xl font-semibold'>Download CV</h1>
                <FaArrowDown />
              </button>
            </a>

            <div className='mt-8'>
              <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-16'>
                <div className='flex items-center gap-4'>
                  <FaLocationArrow />
                  <p className='text-gray-500 text-sm sm:text-base'>MERN STACK DEVELOPER</p>
                </div>
                <div className='flex items-center gap-4'>
                  <FaLocationArrow />
                  <p className='text-gray-500 text-sm sm:text-base'>FRONTEND DEVELOPER</p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-16 mt-4 sm:mt-8'>
                <div className='flex items-center gap-4'>
                  <FaLocationArrow />
                  <p className='text-gray-500 text-sm sm:text-base'>BACKEND DEVELOPER</p>
                </div>
                <div className='flex items-center gap-4'>
                  <FaLocationArrow />
                  <p className='text-gray-500 text-sm sm:text-base'>MENTORSHIP SESSION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Profile;
