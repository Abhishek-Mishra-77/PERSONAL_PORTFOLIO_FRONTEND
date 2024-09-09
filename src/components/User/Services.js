import React from 'react';

const servicesDetails = {
    serviceInfo: {
        title: 'OUR EXPERTISE',
        description: 'Professional Services We Offer',
    },
    allServices: [
        {
            id: 1,
            title: "Freelancing & Website Design",
            description: "Expert freelance and web design services to build and enhance your online presence. From custom applications to responsive designs, I deliver high-quality solutions tailored to your needs.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
            creator: "Abhishek Mishra",
            link: "#",
            contactInfo: "For freelance projects, please fill out this form available on our website.",
        },
        {
            id: 2,
            title: "Courses",
            description: "Comprehensive courses designed to boost your skills in areas like Data Structures, React, and Node.js. Gain practical experience and theoretical knowledge to advance your career.",
            imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlfGVufDB8fDB8fHww",
            creator: "Abhishek Mishra",
            link: "#",
            contactInfo: "For Courses visit, this website.",
        },
        {
            id: 3,
            title: "Mentorship Sessions",
            description: "Personalized mentorship to guide your growth, whether starting a new project or seeking career advice. Benefit from tailored guidance to achieve your professional goals.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            creator: "Abhishek Mishra",
            link: "#",
            contactInfo: "For mentorship sessions, please fill out this form available on our website.",
        },
    ],
};

const Services = () => {
    return (
        <section id='services' className='py-10 relative'>
            <div className='text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
                <p className='text-gray-600 text-lg uppercase tracking-wider'>{servicesDetails?.serviceInfo?.title}</p>
                <h3 className='text-4xl font-bold text-gray-500 mt-4'>{servicesDetails?.serviceInfo?.description}</h3>
                <div className='flex flex-wrap justify-center mt-8 gap-8'>
                    {servicesDetails?.allServices?.map(service => (
                        <a
                            key={service.id}
                            href={service.link}
                            className="relative block overflow-hidden rounded-lg border border-gray-100 p-6 sm:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm lg:max-w-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-gray-300"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>

                            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-500 text-left sm:text-xl">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs font-medium text-left text-gray-600 mt-2">By {service.creator}</p>
                                </div>

                                <div className="hidden sm:block sm:shrink-0">
                                    <img
                                        alt={service.title}
                                        src={service.imageUrl}
                                        className="w-16 h-16 rounded-lg object-cover shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm text-gray-500 text-left">
                                    {service.description}
                                </p>
                                <p className="mt-4 text-sm text-blue-600 hover:underline">
                                    {service.contactInfo}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
