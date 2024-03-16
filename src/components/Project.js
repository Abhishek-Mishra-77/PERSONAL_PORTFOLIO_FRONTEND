
import React from 'react';
import Project4 from '../assets/Project4.jpg'
import Project7 from '../assets/Project7.jpg'
import Project9 from '../assets/Project9.jpg'
import Project2 from '../assets/Project2.jpg'
import Project8 from '../assets/project_9.png'
import Project10 from '../assets/Project10.jpeg'
import Project3 from '../assets/Project3.jpg'
import Project11 from '../assets/Project11.jpeg'
import 'swiper/css'



const Project = () => {

  const projects = [
    {
      id: 'a1',
      development: 'FrontEnd Project',
      img: Project4,
      name: 'Expense Tracker',
      tech: 'Reactjs Firebase',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Expense_Tracker',
      live_link: 'https://expense-tracker-40eba.web.app/',
      para: 'Expense Tracker Pro: Experience seamless expense management with login,signUp ,  password control, profile updates, email verification, and easy daily expense handling including add, edit, and delete functions.'
    },
    {
      id: 'a2',
      development: 'FrontEnd Project',
      img: Project8,
      tech: 'Reactjs Firebase Redux Stripe',
      name: 'StoreCode (An e-commerce website)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/storecodeShop',
      live_link: 'https://65acaee72b4752246b0cc477--clinquant-creponne-461534.netlify.app/',
      para: 'The StoreCode: An e-commerce site with authentication (login/ signup/logout/ password change/ secure payment). Users browser, shop, view details,add item, remove , secure payment, buy, login required.',
    },
    {
      id: 'a3',
      development: 'FrontEnd Project',
      img: Project7,
      tech: 'Vanilla JS',
      name: 'Simple Javascprit',
      githup_link: 'https://gitlab.com/abhishekmishra992016/nextlabassignment',
      live_link: 'https://6505c4d0861a180008716afd--dainty-kringle-9a0523.netlify.app/',
      para: 'Simple javascript website , with lazy loading , form , slider highter , apis'
    },
    {
      id: 'a4',
      development: 'FrontEnd Project',
      img: Project9,
      tech: 'Reactjs firebase Redux',
      name: 'EmailOutLook(Email Clone)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/EmailOutLook',
      live_link: 'https://651990d711fd766013605e02--lucent-dango-83c963.netlify.app/',
      para: 'EmailOutLook(userSpecific): Create a personalized EmailBox platform where users can log in, sign up, and securely browse, compose, send, and view emails in their inbox; non-logged-in users are directed to the login page for access.'
    },
    {
      id: 'a5',
      development: 'FrontEnd Project',
      img: Project2,
      name: 'Zomato clone',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Zomato-app',
      live_link: 'https://abhishek-mishra-77.github.io/Zomato-app/',
      para: 'Craft a visually appealing Zomato-style application using ReactJS by following a YouTube tutorial for a polished and intuitive user experience.'
    },
    {
      id: 'a6',
      development: 'FrontEnd Project',
      img: Project10,
      tech: 'Vanilla JS',
      name: 'TicToc (Followed by Youtube)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/TicTac',
      live_link: 'https://659e90905ad9f6e80d1fbee8--remarkable-croquembouche-982024.netlify.app/',
      para: 'Trying to clone the Dino game and working on some functionality as the game.'
    },
    {
      id: 'a7',
      development: 'FrontEnd Project',
      img: Project3,
      tech: 'Reactjs, Redux Firebase',
      name: 'The Generic (An e-commerce website)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/Ecommerce_website',
      live_link: 'https://ecommerceapp-121ff.web.app/',
      para: 'The Generic: An e-commerce site with authentication (login/ signup/logout/ password change). Users browser, shop, view details,add item, remove , secure payment, buy, login required.'
    },
    {
      id: 'a8',
      development: 'FrontEnd Project',
      img: Project11,
      tech: 'Reactjs, Redux',
      name: 'CryptoForge (Info About Cryptocurrency)',
      githup_link: 'https://github.com/Abhishek-Mishra-77/CryptoForge',
      live_link: 'https://65c5efb3c5ad1a000857650b--glowing-faloodeh-1aeafa.netlify.app/',
      para: 'CryptoForge: A cryptocurrency education app where users can explore information about various cryptocurrencies, including their prices, all-time highs, and related news. No login is required, allowing users to freely access educational content on the world of cryptocurrency.'
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
      <div className='p-6 mt-12 max-w-3xl max-h-3xl mx-auto flex flex-wrap'>
        {projects.map((project_Info) => (
          <div className='p-4 bg-gray-700  rounded-xl mt-7 border-2 border-rose-500' key={project_Info.id}>
            <p>{project_Info.development}</p>
            <img src={project_Info.img} alt={project_Info.name} className='rounded-lg ' />
            <h3 className='text-xl my-4 name'>{project_Info.name}</h3>
            <p>{project_Info.tech}</p>
            <p className='mt-2'>{project_Info.para}</p>
            <div className='flex gap-4 button1 mt-3'>
              <a
                target="_blank" rel="noopener noreferrer"
                href={project_Info.githup_link}
                className='text-cyan-600 text-center w-20 bg-gray-800 py-1 inline-block button btn box1'>Github</a>
              <a
                target="_blank" rel="noopener noreferrer"
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