import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import Project3 from '../assets/Project3.jpg'
import Project4 from '../assets/Project4.jpg'
import Project7 from '../assets/Project7.jpg'
import Project6 from '../assets/Project6.jpg'
import 'swiper/css'



const Project = () => {

  const projects = [
    {
      id: 'a4',
      development: 'FrontEnd Project',
      img: Project4,
      name: 'Expense Tracker',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Expense_Tracker',
      live_link: 'https://expense-tracker-40eba.web.app/',
      para: 'Expense Tracker Pro: Experience seamless expense management with login,signUp ,  password control, profile updates, email verification, and easy daily expense handling including add, edit, and delete functions.'
    },
    {
      id: 'a3',
      development: 'FrontEnd Project',
      img: Project3,
      name: 'Ecommerce Website ',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Ecommerce_website',
      live_link: 'https://ecommerceapp-121ff.firebaseapp.com/',
      para: 'The Generic: E-commerce site with authentication (login, signup, password change). Users browse, shop, view details, but login required; non-logged-in users redirected for access.'
    },
    {
      id: 'a2',
      development: 'FrontEnd Project',
      img: Project2,
      name: 'Zomato (Clone)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Zomato-app',
      live_link: 'https://abhishek-mishra-77.github.io/Zomato-app/',
      para: 'Zomato Clone: Explore diverse food, add to cart, and order seamlessly with user-friendly interface.',
    },

    {
      id: 'a5',
      development: 'FrontEnd Project',
      img: Project1,
      name: 'Resturant-App',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Resturant-meal-App',
      live_link: 'https://abhishek-mishra-77.github.io/Resturant-meal-App/',
      para: 'ReactMeal: Restaurant expenses & delivery site, diverse menu. Browse, purchase, customize orders easily. User-friendly for seamless selection, order, delivery/takeout'
    },
    {
      id: 'a1',
      development: 'FrontEnd Project',
      img: Project7,
      name: 'Simple Javascprit',
      githup_link: 'https://gitlab.com/abhishekmishra992016/nextlabassignment',
      live_link: 'https://6505c4d0861a180008716afd--dainty-kringle-9a0523.netlify.app/',
      para: 'simple javascript website , with lazy loading , form , slider highter , apis'
    },
    {
      id: 'a6',
      development: 'FrontEnd Project',
      img: Project6,
      name: 'EmailBox',
      githup_link: 'https://github.com/Abhishek-Mishra-77/MailBox',
      live_link: 'https://mailbox-53339.web.app/',
      para: 'EmailBox(userSpecific): EmailBox site with authentication(login, signup, password).Users browse, Compose, view Send Emails , And view Inbox Emails, but login required; non - logged -in users redirected for access.'
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
      <div className='mt-12 max-w-4xl max-h-4xl mx-auto flex flex-wrap'>
        {projects.map((project_Info) => (
          <div className='p-2 bg-gray-700 max-h-4xl rounded-xl mt-7 border-2 border-rose-500' key={project_Info.id}>
            <p>{project_Info.development}</p>
            <img src={project_Info.img} alt={project_Info.name} className='rounded-lg ' />
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
        ))}
      </div>
    </section >
  )
}

export default Project