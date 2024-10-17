import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const experiencesDetails = {
    ExperienceInfo: {
        title: 'EXPERIENCE',
        description: 'Professional Experience',
    },
    experiences: [
        {
            _id: 1,
            company: 'OMR India Outsources Pvt Ltd',
            designation: 'Software Developer',
            duration: 'Mar 2024 - Present',
            type: 'Full-time',
            location: 'Agra, Uttar Pradesh',
            description:
                'Developing impactful solutions using the MERN stack in a dynamic team environment. Throughout this project, I have learned advanced skills in React, Node.js, Express, and MongoDB, enabling me to build scalable applications.',
            website: 'https://omrios.com/',
        },
        {
            _id: 2,
            company: 'Sharpener Tech',
            designation: 'Mentor & Teacher',
            duration: 'Jul 2024 - Present',
            type: 'Part-time',
            location: 'Remote',
            description:
                'Guiding new trainees in full stack development, enhancing their skills through hands-on teaching. I have provided guidance to over 200+ students, helping them grasp key concepts in MERN stack development and best practices in software engineering.',
            website: 'https://www.sharpener.tech/',
        },
        {
            _id: 3,
            company: 'Sharpener Tech',
            designation: 'Trainee',
            duration: 'Feb 2023 - Feb 2024',
            type: 'Full-time',
            location: 'Remote',
            description:
                'Completed a comprehensive training program in full stack development, focusing on MERN and DSA. I gained extensive knowledge in algorithms and data structures, which I applied in various projects to enhance performance and efficiency.',
            website: 'https://www.sharpener.tech/',
        },
    ],
};

const Experience = () => {
    return (
        <section id="experience" className="py-10 relative bg-gray-50">
            <div className="mt-8 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-gray-600 text-lg uppercase tracking-wider">{experiencesDetails?.ExperienceInfo?.title}</p>
                <h3 className="text-4xl font-bold text-gray-800 mt-4">{experiencesDetails?.ExperienceInfo?.description}</h3>
                <div className="flex flex-wrap justify-center mt-4 gap-8">
                    {experiencesDetails?.experiences.map((exp) => (
                        <article
                            key={exp._id}
                            className="transition-transform transform hover:scale-105 rounded-xl border-2 border-transparent shadow-lg hover:shadow-xl hover:border-blue-500 hover:bg-blue-50 p-4 sm:p-6 lg:p-8 w-full sm:w-[calc(50%-1rem)] max-w-md"
                        >
                            <div className="flex flex-col justify-between h-full">
                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    {exp.company}
                                </a>
                                <p className="text-lg font-medium text-gray-600 mt-1">{exp.designation}</p>
                                <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <FaClock className="mr-1" />
                                    <span>{exp.duration} | {exp.type}</span>
                                    <span className="mx-2">|</span>
                                    <FaMapMarkerAlt className="mr-1" />
                                    <span>{exp.location}</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-4 leading-relaxed">{exp.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
