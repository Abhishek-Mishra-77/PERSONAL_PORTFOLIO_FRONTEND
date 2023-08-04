import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import Project3 from '../assets/Project3.jpg'
import 'swiper/css'



const Project = () => {

  const projects = [
    {
      id: 'a2',
      development: 'FrontEnd Project',
      img: Project2,
      name: 'Zomato (Clone)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Zomato-app',
      live_link: 'https://abhishek-mishra-77.github.io/Zomato-app/',
      para: 'Zomato Clone is a food website that offers a wide range of culinary delights. The platform allows users to browse through a diverse selection of food items and make purchases. Additionally, users can conveniently add their desired food products to the shopping cart for a smooth ordering experience. The website provides an easy-to-navigate interface, ensuring a seamless process from selecting food items to placing the final order.'
    },
    {
      id: 'a3',
      development: 'FrontEnd Project',
      img: Project3,
      name: 'Ecommerce Website ',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Ecommerce_website',
      live_link: 'https://ecommerceapp-121ff.firebaseapp.com/',
      para: 'The Generic is an e-commerce website that offers a range of user authentication features, including login, sign-up, and password change. The platform enables users to browse and purchase items, add products to their shopping cart, and view detailed information about each product. However, to access the store and its functionalities, users must be logged in. Non-logged-in users will be redirected to the login/signup page before being able to explore the platform`s offerings.'
    },
    {
      id: 'a1',
      development: 'FrontEnd Project',
      img: Project1,
      name: 'Resturant-App',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Resturant-meal-App',
      live_link: 'https://abhishek-mishra-77.github.io/Resturant-meal-App/',
      para:'ReactMeal is a restaurant expenses and delivery website that offers a diverse range of delectable dishes. The platform allows users to browse through various menu items and make purchases with ease. Additionally, users can conveniently add their desired food products to the shopping cart, customizing their orders as they wish. The website`s user-friendly interface ensures a smooth and hassle-free experience, from selecting food items to placing the final order for delivery or takeout.'
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
                  <p>{project_Info.development}</p>

                  <img src={project_Info.img} alt={project_Info.name} className='rounded-lg' />
                  <h3 className='text-xl my-4 name'>{project_Info.name}</h3>
                  <p className='mt-2'>{project_Info.para}</p>

                  <div className='flex gap-4 button1 mt-3'>
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
          <h1 style={{ float: 'right' }}>More......................</h1>
        </div>
      </div>
    </section>
  )
}

export default Project