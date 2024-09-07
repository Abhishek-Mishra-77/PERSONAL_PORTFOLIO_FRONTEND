
import React from 'react';
import Project2 from '../../assets/projects/project_9.png'
import OmrImage from "../../assets/projects/omr.png";
import webinfomatrix from "../../assets/projects/webinfomatrix.png";
import 'swiper/css'

const projects = [
  {
    _id: 'Project1',
    company: 'OMR India Outsources Pvt Ltd',
    title: 'Web Data Conversion',
    role: 'Full Stack Developer',
    description: `Developed and deployed a full-stack web application to streamline data entry and management processes, focusing on frontend development using React and Tailwind CSS.`,
    functionalities: [
      'Advanced system design for handling large-scale data',
      'CSV and ZIP file upload supporting over 200,000 records',
      'Dynamic template creation for OMR sheets',
      'Duplicate data detection algorithms',
      'Task assignment system with role-based permissions (Admin, Operator, Moderator)',
      'Result Generation for all types of OMR sheets',
      'Compare and merge multiple OMR sheets',
    ],
    technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MySQL', 'React', 'Tailwind CSS'],
    outcomes: 'Significantly enhanced data handling and task management efficiency for the client.',
    duration: '4 months',
    status: 'Completed',
    showLinks: false,
    githubLink: 'https://github.com/yourusername/completed-project',
    liveLink: 'https://yourliveprojecturl.com',
    imageUrl: OmrImage
  },
  {
    _id: 'proj2',
    company: 'OMR India Outsources Pvt Ltd',
    title: 'Screening System',
    role: 'Full Stack Developer',
    description: 'Currently working on a web application to streamline business operations and enhance scalability.',
    functionalities: [
      'New feature implementation',
      'Codebase maintenance',
      'Scalability improvements'
    ],
    technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React'],
    outcomes: 'In progress; expected to improve operational efficiency for business needs.',
    duration: 'Ongoing',
    status: 'In Progress',
    showLinks: false,
    githubLink: 'https://github.com/yourusername/ongoing-project',
    liveLink: 'https://yourliveprojecturl.com',
    imageUrl: ""
  },
  {
    _id: 'proj3',
    company: 'Freelance (webinfomatrix)',
    title: 'SEO Website for Sales',
    role: 'MERN-Stack Developer',
    description: 'Developed an SEO-optimized website to improve online visibility and boost sales.',
    functionalities: [
      'SEO best practices implementation',
      'User-friendly interface design',
      'Analytics integration for performance tracking',
      'Admin Panel for content management and tracking',
      'Mostly includes crud operations',
    ],
    technologies: ['React', 'Talwind', 'JavaScript', 'SEO Optimization', 'MongoDB', 'Express.js', 'Node.js'],
    outcomes: 'Improved search engine ranking, leading to increased traffic and higher conversions.',
    duration: '2 months',
    status: 'Completed',
    showLinks: true,
    githubLink: 'https://github.com/shubhamkush321/NewWebInfo',
    liveLink: 'https://www.webinfomatrix.com/',
    imageUrl: webinfomatrix
  },
  {
    _id: 'proj4',
    company: 'Sharpener Tech (Training Project)',
    title: 'eCommerce Website for Sales',
    role: 'MERN-Stack Developer',
    description: 'Developed a fully-featured eCommerce website as part of a training project at Sharpener Tech. The platform includes essential eCommerce functionalities such as product management, cart integration, and payment processing.',
    functionalities: [
      'Product listing and management',
      'Add to cart functionality',
      'Stripe payment integration',
      'User authentication and profile management',
      'Admin panel for order and user management',
      'CRUD operations for product and order handling'
    ],
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Stripe', 'Firebase',],
    outcomes: 'Successfully implemented a robust eCommerce platform with improved user experience, secure payment processing, and effective product and order management.',
    duration: '10 Days',
    status: 'Completed',
    showLinks: true,
    githubLink: 'https://github.com/Abhishek-Mishra-77/storecodeShop',
    liveLink: 'https://65acaee72b4752246b0cc477--clinquant-creponne-461534.netlify.app/',
    imageUrl: Project2
  }
];


const Project = () => {

  return (
    <section id="projects" className="py-10 relative">
      <div className="text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-600 mt-2">KEY PROJECTS FROM MY CAREER</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-5">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {projects.map((exp) => (
            <article
              key={exp.id}
              className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full sm:w-[calc(50%-1rem)] max-w-3xl"
            >
              <div className="rounded-[10px] bg-white p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between cursor-pointer">
                <img src={exp.imageUrl} alt={exp.title} className="w-full h-96 object-cover rounded-md" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mt-4">{exp.company}</h3>
                <p className="text-lg sm:text-xl font-medium text-gray-700 mt-2">{exp.role}</p>
                <p className="text-sm sm:text-base font-medium text-gray-600 mt-2">{exp.title} | {exp.duration} | {exp.status}</p>
                <p className="text-sm sm:text-base text-gray-500 mt-4 text-left leading-relaxed">{exp.description}</p>
                <div className="text-sm text-gray-600 mt-4">
                  <strong className="block mb-2 text-gray-800 text-left">Key Features:</strong>
                  <div className="bg-gray-100 border border-gray-300 rounded-md p-4">
                    <ul className="list-disc pl-5">
                      {exp.functionalities.map((feature, index) => (
                        <li key={index} className="mb-2 text-left">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-left">
                  <strong>Technologies: </strong>{exp.technologies?.join(', ')}
                </p>
                <div className="mt-4">
                  {exp.showLinks ? (
                    <>
                      <a
                        href={exp.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline font-semibold transition-all duration-300 hover:text-blue-700 hover:underline-offset-4 hover:underline"
                      >
                        GitHub
                      </a>
                      <a
                        href={exp.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline font-semibold transition-all duration-300 hover:text-blue-700 hover:underline-offset-4 hover:underline ml-4"
                      >
                        Live Demo
                      </a>
                    </>
                  ) : (
                    <p className="text-red-500 font-medium mt-2">
                      Links are unavailable due to company policy.
                    </p>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project