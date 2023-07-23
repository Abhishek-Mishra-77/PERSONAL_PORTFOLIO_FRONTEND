import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import 'swiper/css'



const Project = () => {

  const projects = [
    {
      id: 'a1',
      img: Project1,
      name: 'Resturant-App',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Resturant-meal-App',
      live_link: 'https://abhishek-mishra-77.github.io/Resturant-meal-App/'
    },
    {
      id: 'a2',
      img: Project2,
      name: 'Zomato (Clone)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Zomato-app',
      live_link: 'https://abhishek-mishra-77.github.io/Zomato-app/'
    },

  ]


  return (
    <section id='projects' className='py-20 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works </p>
      </div>
      <br />
      <div className=' items-center justify-center mt-12 gap-10 flex-wrap flex max-w-6xl px-5 mx-auto items-center relative Project'>
        <div className='w-full'>
          <Swiper slidesPerView={2} spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
          >

            {projects.map((project_Info) => (
              <SwiperSlide key={project_Info.id}>
                <div className='h-fil w-full p-4 bg-gray-700 rounded-xl display-flex pro'>
                  <img src={project_Info.img} alt={project_Info.name} className='rounded-lg' />
                  <h3 className='text-xl my-4 name'>{project_Info.name}</h3>
                  <div className='flex gap-4 button1'>
                    <a
                      href={project_Info.githup_link}
                   
                      className='text-cyan-600 text-center w-20 bg-gray-800 py-1 inline-block button btn box1'>Githup</a>

                    <a
                      href={project_Info.live_link}
                      className='text-cyan-600 bg-gray-800 text-center py-1 w-20 inline-block button btn box1'>Live Demo</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Project