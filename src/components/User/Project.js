import React from 'react';
import Project2 from '../../assets/projects/project_9.png';
import OmrImage from "../../assets/projects/omr.png";
import onscreenmarking from "../../assets/projects/onscreen.png";
import HtsImage from "../../assets/projects/Hts.png";
import 'swiper/css';

const Project = () => {
  const projectDetails = {
    projects: [
      {
        _id: 'proj1',
        company: 'OMR India Outsources Pvt Ltd',
        title: 'Onscreen Marking System',
        role: 'Backend Developer',
        description: 'A web application to streamline subject marking processes for educational institutions, enhancing scalability and workflow efficiency.',
        technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React'],
        outcomes: 'In progress; expected to improve operational efficiency.',
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
        description: 'A comprehensive solution for modern assessments, streamlining exam processes from question bank creation to delivery with AI-powered analytics.',
        technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React', 'dotnet', 'python'],
        outcomes: 'In progress; expected to enhance operational efficiency.',
        duration: '6 Months',
        status: 'Completed',
        showLinks: true,
        liveLink: 'https://is10live.com/',
        imageUrl: HtsImage
      },
      {
        _id: 'proj3',
        company: 'OMR India Outsources Pvt Ltd',
        title: 'Web Data Conversion',
        role: 'Fullstack Developer',
        description: 'Full-stack web application to streamline data entry and management, focusing on efficiency and scalability.',
        technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MySQL', 'React', 'Tailwind CSS'],
        outcomes: 'Enhanced data handling and task management efficiency.',
        duration: '4 months',
        status: 'Completed',
        showLinks: false,
        githubLink: 'https://github.com/yourusername/completed-project',
        liveLink: 'https://yourliveprojecturl.com',
        imageUrl: OmrImage
      },
      {
        _id: 'proj5',
        company: 'Sharpener Tech',
        title: 'eCommerce Website for Sales',
        role: 'Front Developer',
        description: 'A fully-featured eCommerce platform with product management, cart integration, and secure payment processing.',
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Stripe', 'Firebase'],
        outcomes: 'Robust platform with improved user experience and management capabilities.',
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
  };

  return (
    <section id="projects" className="py-10 relative">
      <div className="text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-600 mt-2">{projectDetails?.projectInfo?.title}</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-5">{projectDetails?.projectInfo?.description}</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {projectDetails?.projects.map((exp) => (
            <article
              key={exp._id}
              className="rounded-xl bg-white p-6 shadow-lg w-full sm:w-[calc(33.333%-1rem)] md:w-80 lg:w-96"
            >
              <img src={exp.imageUrl} alt={exp.title} className="w-full h-40 object-cover rounded-md" />
              <div className="flex justify-start">
                <span className="inline-flex items-center justify-items-start rounded-full bg-emerald-100 px-3 py-0.5 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100">
                  <p className="text-sm font-medium text-gray-700 mt-2 border-1 p-2 rounded-xl w-[40px] bg-green-200">{exp.role}</p>
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-400 mt-2 text-left">{exp.company}</h3>
              <p className="text-sm text-gray-500 mt-2 text-left">{exp.description}</p>
              <p className="text-sm text-gray-600 mt-1 text-left">
                <strong>Technologies: </strong>{exp.technologies.join(', ')}
              </p>
              <p className="text-sm text-gray-500 mt-2 text-left">
                <strong>Duration: </strong>{exp.duration} | <strong>Status: </strong>{exp.status}
              </p>
              <div className="mt-4">
                {exp.showLinks ? (
                  <>
                    {exp.githubLink && (
                      <a
                        href={exp.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300"
                      >
                        GitHub
                      </a>
                    )}
                    {exp.liveLink && (
                      <a
                        href={exp.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 ml-2 border border-green-500 text-green-500 font-semibold rounded hover:bg-green-500 hover:text-white transition duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </>
                ) : (
                  <p className="text-red-500 font-medium mt-2">
                    Links are unavailable due to company policy.
                  </p>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
