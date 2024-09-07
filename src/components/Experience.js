import React from 'react';

const experiences = [
    {
        _id: 1,
        company: 'OMR India Outsources Pvt Ltd',
        designation: 'Software Developer',
        duration: 'Mar 2024 - Present',
        type: 'Full-time',
        location: 'Agra Uttar Pradesh',
        description: 'Working as a full-time Software Developer, involved in 2 significant projects utilizing MERN stack technologies. Collaborating with an exceptional team and under the guidance of experienced team leaders, I am continuously learning and deepening my expertise in modern technologies. Gaining hands-on experience in advanced aspects of software development, while contributing to impactful projects. Based in Agra, actively engaged in the development and enhancement of innovative solutions.',
        summary: 'Full-time Software Developer at OMR India Outsources Pvt Ltd, working on significant MERN stack projects and gaining advanced software development experience.',
        details: [
            'Involved in 2 major projects utilizing MERN stack technologies.',
            'Collaborating with a skilled team and experienced leaders.',
            'Continuous learning and development in modern technologies.',
            'Hands-on experience in advanced software development.',
            'Contributing to impactful projects and innovative solutions.'
        ],
        website: 'https://omrios.com/',
    },
    {
        _id: 2,
        company: 'Sharpener Tech',
        designation: 'Mentor & Teacher',
        duration: 'Jul 2024 - Present',
        type: 'Part-time',
        location: 'Remote',
        description: 'Working as a part-time mentor and teacher, guiding and training new trainees. Engaging in teaching and mentoring activities related to full stack development and other technologies. Gaining deep insights and understanding of these fields through hands-on teaching experiences, while helping trainees grasp complex concepts and apply them effectively in their projects. Enhancing my own expertise in full stack development and related technologies by staying updated with the latest trends and best practices.',
        summary: 'Part-time Mentor & Teacher at Sharpener Tech, guiding trainees in full stack development and related technologies.',
        details: [
            'Guiding and training new trainees in full stack development.',
            'Engaging in hands-on teaching experiences and mentoring activities.',
            'Helping trainees grasp complex concepts and apply them effectively.',
            'Enhancing personal expertise by staying updated with latest trends and best practices.'
        ],
        website: 'https://www.sharpener.tech/',
    },
    {
        _id: 3,
        company: 'Sharpener Tech',
        designation: 'Trainee',
        duration: 'Feb 2023 - Feb 2024',
        type: 'Full-time',
        location: 'Remote',
        description: 'Completed a year-long full stack development training. Gained comprehensive knowledge in MERN stack and DSA. Developed and deployed various frontend and backend projects, including web applications and APIs. Learned best practices from top instructors working in leading tech companies. Enhanced communication and problem-solving skills through real-world projects and rigorous training.',
        summary: 'Full-time Trainee at Sharpener Tech, completed comprehensive training in MERN stack and DSA, and developed various projects.',
        details: [
            'Completed a year-long full stack development training program.',
            'Gained comprehensive knowledge in MERN stack and DSA.',
            'Developed and deployed various frontend and backend projects.',
            'Learned best practices from top industry instructors.',
            'Enhanced communication and problem-solving skills through real-world projects.'
        ],
        website: 'https://www.sharpener.tech/',
    },
];



const Experience = () => {
    return (
        <section id='skills' className='py-10 relative'>
            <div className='mt-8 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
                <p className='text-gray-600 text-lg uppercase tracking-wider'>Experience</p>
                <h3 className='text-4xl font-bold text-gray-800 mt-4'>Professional Experience</h3>
                <div className='flex flex-wrap justify-center mt-4 gap-8'>
                    {experiences.map((exp) => (
                        <article
                            key={exp._id}
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full sm:w-[calc(50%-1rem)] max-w-md"
                        >
                            <div className="rounded-[10px] bg-white  p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between cursor-pointer">
                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl font-semibold text-gray-400">
                                    {exp.company}
                                </a>
                                <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
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
    );
}


export default Experience;
