
import React from 'react';
import Project2 from '../../assets/projects/project_9.png'
import OmrImage from "../../assets/projects/omr.png";
import webinfomatrix from "../../assets/projects/webinfomatrix.png";
import onscreenmarking from "../../assets/projects/onscreen.png"
import HtsImage from "../../assets/projects/Hts.png";
import 'swiper/css'


const projectDetails = {
  projects: [
    {
      _id: 'proj1',
      company: 'OMR India Outsources Pvt Ltd',
      title: 'Onscreen Marking System',
      role: 'Backend Developer',
      description: 'Developing a comprehensive web application aimed at streamlining subject marking processes and improving operational efficiency for educational institutions. The project is designed to enhance scalability and optimize workflow through an integrated on-screen marking system.',
      functionalities: [
        'Implementation of new features to support subject-specific evaluation and marking workflows.',
        'Codebase maintenance to ensure system stability and seamless integration with the admin panel and evaluator panel.',
        'Scalability improvements to accommodate growing user bases, including administrators and evaluators, ensuring efficient performance under increased workloads.'
      ],
      technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React'],
      outcomes: 'In progress; expected to improve operational efficiency for business needs.',
      duration: 'Ongoing',
      status: 'In Progress',
      showLinks: false,
      githubLink: 'https://github.com/yourusername/ongoing-project',
      liveLink: 'https://yourliveprojecturl.com',
      imageUrl: onscreenmarking
    },
    {
      _id: 'proj2',
      company: 'OMR India Outsources Pvt Ltd',
      title: 'Hybrid Testing System',
      role: 'Frontend Developer',
      description: 'Intelligent Secure Testing & Evaluation Node (IS10) offers an all-encompassing solution for modern assessments. It streamlines the entire process, from question bank creation to offline and online examination delivery. With AI-powered analytics, IS10 provides a robust, flexible, and user-friendly platform for educational institutions, certification bodies, and training centers globally.',
      functionalities: [
        'IS10 facilitates seamless examination management, encompassing all facets of the process to drive educational excellence.',
        'With advanced AI capabilities, IS10 delivers valuable insights to improve education quality, ensures examination security, and empowers institutions to make data-driven improvements.',
        'IS10 provides flexibility, security, and powerful tools for data-driven improvements, making it a leading choice for optimizing examination processes in educational institutions.',
        'IS10 sets a new benchmark for secure, intelligent testing with comprehensive features and unmatched ease of use.'
      ],
      technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React', "dotnet", "python"],
      outcomes: 'In progress; expected to improve operational efficiency for business needs.',
      duration: '6 Months',
      status: 'Completed',
      showLinks: true,
      githubLink: '',
      liveLink: 'https://is10live.com/',
      imageUrl: HtsImage
    },
    {
      _id: 'proj3',
      company: 'OMR India Outsources Pvt Ltd',
      title: 'Web Data Conversion',
      role: 'Frontend Developer',
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
      _id: 'proj4',
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
      _id: 'proj5',
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
  ],
  projectInfo: {
    title: 'KEY PROJECTS FROM MY CAREER',
    description: "Projects"
  }
}


const Project = () => {
  return (
    <section id="projects" className="py-10 relative">
      <div className="text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-600 mt-2">{projectDetails?.projectInfo?.title}</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-5">{projectDetails?.projectInfo?.description}</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {projectDetails?.projects.map((exp) => (
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
                      {exp.githubLink && (
                        <a
                          href={exp.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline font-semibold transition-all duration-300 hover:text-blue-700 hover:underline-offset-4 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
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