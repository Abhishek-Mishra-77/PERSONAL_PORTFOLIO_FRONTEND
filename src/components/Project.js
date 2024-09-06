
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

const projects = [
  {
    id: 'proj1',
    company: 'OMR India Outsources Pvt Ltd',
    title: 'Completed Project',
    role: 'Full Stack Developer',
    description: 'Developed and deployed a full-stack web application, handling both frontend and backend tasks. Implemented features, fixed bugs, and ensured the application met the client’s requirements.',
    technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React'],
    outcomes: 'Successfully delivered the project on time, leading to improved client satisfaction and an enhanced user experience.',
    duration: '6 months',
    status: 'Completed',
    githubLink: 'https://github.com/yourusername/completed-project', // Replace with actual GitHub link
    liveLink: 'https://yourliveprojecturl.com', // Replace with actual live link
    imageUrl: 'https://yourimageurl.com/image.jpg' // Replace with actual image URL
  },
  {
    id: 'proj2',
    company: 'OMR India Outsources Pvt Ltd',
    title: 'Ongoing Project',
    role: 'Full Stack Developer',
    description: 'Currently working on a web application to streamline business operations. Responsible for implementing new features, maintaining the codebase, and ensuring the application’s scalability.',
    technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React'],
    outcomes: 'In progress; expected to enhance operational efficiency and provide a robust solution for business needs.',
    duration: 'Ongoing',
    status: 'In Progress',
    githubLink: 'https://github.com/yourusername/ongoing-project', // Replace with actual GitHub link
    liveLink: 'https://yourliveprojecturl.com', // Replace with actual live link
    imageUrl: 'https://yourimageurl.com/image.jpg' // Replace with actual image URL
  },
  {
    id: 'proj3',
    company: 'Freelance',
    title: 'SEO Website for Sales',
    role: 'Freelance Developer',
    description: 'Developed an SEO-optimized website focused on increasing sales and improving online visibility. Implemented SEO best practices, designed user-friendly interfaces, and integrated analytics for performance tracking.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SEO Optimization', 'WordPress'],
    outcomes: 'Enhanced the website’s search engine ranking, leading to increased traffic and higher conversion rates for the client.',
    duration: '3 months',
    status: 'Completed',
    githubLink: 'https://github.com/yourusername/seo-website', // Replace with actual GitHub link (if available)
    liveLink: 'https://yourliveprojecturl.com', // Replace with actual live link
    imageUrl: 'https://yourimageurl.com/image.jpg' // Replace with actual image URL
  }
];



const Project = () => {

  // const projects = [
  //   {
  //     id: 'a1',
  //     development: 'FrontEnd Project',
  //     img: Project4,
  //     name: 'Expense Tracker',
  //     tech: 'Reactjs Firebase',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/Expense_Tracker',
  //     live_link: 'https://expense-tracker-40eba.web.app/',
  //     para: 'Expense Tracker Pro: Experience seamless expense management with login,signUp ,  password control, profile updates, email verification, and easy daily expense handling including add, edit, and delete functions.'
  //   },
  //   {
  //     id: 'a2',
  //     development: 'FrontEnd Project',
  //     img: Project8,
  //     tech: 'Reactjs Firebase Redux Stripe',
  //     name: 'StoreCode (An e-commerce website)',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/storecodeShop',
  //     live_link: 'https://65acaee72b4752246b0cc477--clinquant-creponne-461534.netlify.app/',
  //     para: 'The StoreCode: An e-commerce site with authentication (login/ signup/logout/ password change/ secure payment). Users browser, shop, view details,add item, remove , secure payment, buy, login required.',
  //   },
  //   {
  //     id: 'a3',
  //     development: 'FrontEnd Project',
  //     img: Project7,
  //     tech: 'Vanilla JS',
  //     name: 'Simple Javascprit',
  //     githup_link: 'https://gitlab.com/abhishekmishra992016/nextlabassignment',
  //     live_link: 'https://6505c4d0861a180008716afd--dainty-kringle-9a0523.netlify.app/',
  //     para: 'Simple javascript website , with lazy loading , form , slider highter , apis'
  //   },
  //   {
  //     id: 'a4',
  //     development: 'FrontEnd Project',
  //     img: Project9,
  //     tech: 'Reactjs firebase Redux',
  //     name: 'EmailOutLook(Email Clone)',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/EmailOutLook',
  //     live_link: 'https://651990d711fd766013605e02--lucent-dango-83c963.netlify.app/',
  //     para: 'EmailOutLook(userSpecific): Create a personalized EmailBox platform where users can log in, sign up, and securely browse, compose, send, and view emails in their inbox; non-logged-in users are directed to the login page for access.'
  //   },
  //   {
  //     id: 'a5',
  //     development: 'FrontEnd Project',
  //     img: Project2,
  //     name: 'Zomato clone',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/Zomato-app',
  //     live_link: 'https://abhishek-mishra-77.github.io/Zomato-app/',
  //     para: 'Craft a visually appealing Zomato-style application using ReactJS by following a YouTube tutorial for a polished and intuitive user experience.'
  //   },
  //   {
  //     id: 'a6',
  //     development: 'FrontEnd Project',
  //     img: Project10,
  //     tech: 'Vanilla JS',
  //     name: 'TicToc (Followed by Youtube)',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/TicTac',
  //     live_link: 'https://659e90905ad9f6e80d1fbee8--remarkable-croquembouche-982024.netlify.app/',
  //     para: 'Trying to clone the Dino game and working on some functionality as the game.'
  //   },
  //   {
  //     id: 'a7',
  //     development: 'FrontEnd Project',
  //     img: Project3,
  //     tech: 'Reactjs, Redux Firebase',
  //     name: 'The Generic (An e-commerce website)',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/Ecommerce_website',
  //     live_link: 'https://ecommerceapp-121ff.web.app/',
  //     para: 'The Generic: An e-commerce site with authentication (login/ signup/logout/ password change). Users browser, shop, view details,add item, remove , secure payment, buy, login required.'
  //   },
  //   {
  //     id: 'a8',
  //     development: 'FrontEnd Project',
  //     img: Project11,
  //     tech: 'Reactjs, Redux',
  //     name: 'CryptoForge (Info About Cryptocurrency)',
  //     githup_link: 'https://github.com/Abhishek-Mishra-77/CryptoForge',
  //     live_link: 'https://65c5efb3c5ad1a000857650b--glowing-faloodeh-1aeafa.netlify.app/',
  //     para: 'CryptoForge: A cryptocurrency education app where users can explore information about various cryptocurrencies, including their prices, all-time highs, and related news. No login is required, allowing users to freely access educational content on the world of cryptocurrency.'
  //   },
  // ]


  return (
    <section id='skills' className='py-10 relative'>
      <div className='mt-8 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
      <p className='text-lg text-gray-600 mt-2'>KEY PROJECTS FROM MY CAREER.</p>
        <h1 className='text-4xl font-bold text-gray-800 mt-5'>Projects</h1>
        <div className='flex flex-col items-center mt-12 gap-8'>
          {projects.map((exp) => (
            <article
              key={exp._id}
              className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full max-w-3xl"
            >
              <div className="rounded-[10px] bg-white p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between cursor-pointer">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-gray-700 mt-2">
                  {exp.designation}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-600 mt-2">
                  {exp.duration} | {exp.type} | {exp.location}
                </p>
                <p className="text-sm sm:text-base text-gray-500 mt-4 text-left max-w-prose mx-auto px-4 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project