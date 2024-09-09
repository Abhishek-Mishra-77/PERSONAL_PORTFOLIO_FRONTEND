import React from 'react';

const coursesDetails = {
    courseInfo: {
        title: 'COURSES',
        description: 'Explore My Courses',
        website: 'https://omrios.com/',
    },
    courseData: [
        {
            _id: 1,
            title: "Top DSA Questions for Interview Preparation",
            subtitle: "DSA Mastery #101",
            description: "Master the most commonly asked Data Structures and Algorithms (DSA) questions to ace your technical interviews. This curated list covers essential topics such as arrays, linked lists, dynamic programming, and more. By working through these questions, you will build a solid foundation for tackling any coding challenge with confidence.",
            duration: "Thousands of Questions",
            imageUrl: "path/to/dsa-image.jpg",
            link: "#"
        },
        {
            _id: 2,
            title: "React Essentials",
            subtitle: "React Basics #201",
            description: "Learn the core concepts of React including components, hooks, and state management. This course is designed to provide a strong foundation in building interactive UIs with React.",
            duration: "10+ Hours of Content",
            imageUrl: "path/to/react-image.jpg",
            link: "#"
        },
        {
            _id: 3,
            title: "Node.js Fundamentals",
            subtitle: "Node.js Mastery #301",
            description: "Understand the basics of Node.js, including its asynchronous nature, event-driven architecture, and how to build scalable server-side applications.",
            duration: "12+ Hours of Content",
            imageUrl: "path/to/nodejs-image.jpg",
            link: "#"
        },
        {
            _id: 4,
            title: "Express.js for Backend Development",
            subtitle: "Express.js Guide #401",
            description: "Dive into Express.js and learn how to build robust and scalable APIs with this powerful web framework. This course covers routing, middleware, and best practices.",
            duration: "8+ Hours of Content",
            imageUrl: "path/to/express-image.jpg",
            link: "#"
        },
        {
            _id: 5,
            title: "MySQL Database Management",
            subtitle: "MySQL Basics #501",
            description: "Get a comprehensive introduction to MySQL, including SQL queries, database design, and data manipulation. Perfect for those looking to manage and query relational databases effectively.",
            duration: "15+ Hours of Content",
            imageUrl: "path/to/mysql-image.jpg",
            link: "#"
        },
        {
            _id: 6,
            title: "MongoDB for Modern Applications",
            subtitle: "MongoDB Essentials #601",
            description: "Explore the fundamentals of MongoDB, a NoSQL database, including its document-oriented structure, queries, and aggregation framework. Ideal for modern web applications.",
            duration: "11+ Hours of Content",
            imageUrl: "path/to/mongodb-image.jpg",
            link: "#"
        }
    ]
};

const Courses = () => {
    return (
        <section id='experience' className='py-10 relative'>
            <div className='mt-8 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
                <p className='text-gray-600 text-lg uppercase tracking-wider'>{coursesDetails?.courseInfo?.title}</p>
                <h3 className='text-4xl font-bold text-gray-500 mt-4'>{coursesDetails?.courseInfo?.description}</h3>
                <div className='flex flex-wrap justify-center mt-8 gap-8'>
                    {coursesDetails?.courseData?.map((course) => (
                        <article className="rounded-xl cursor-pointer bg-white shadow-lg p-6 ring ring-indigo-50 sm:p-8 lg:p-12 w-full max-w-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <div className="sm:gap-8">
                                <div className='flex justify-around items-center'>
                                    <div
                                        className="hidden sm:grid sm:h-24 sm:w-24 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                                        aria-hidden="true"
                                    >
                                        <div className="flex gap-1">
                                            <span className="h-12 w-1 rounded-full bg-indigo-500"></span>
                                            <span className="h-10 w-1 rounded-full bg-indigo-500"></span>
                                            <span className="h-8 w-1 rounded-full bg-indigo-500"></span>
                                            <span className="h-10 w-1 rounded-full bg-indigo-500"></span>
                                            <span className="h-12 w-1 rounded-full bg-indigo-500"></span>
                                        </div>
                                    </div>
                                    <strong
                                        className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                                    >
                                        {course?.subtitle}
                                    </strong>
                                </div>
                                <div>
                                    <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
                                        <a href="#" className="hover:underline text-indigo-600">{course?.title}</a>
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-700 leading-relaxed text-left">
                                        {course?.description}
                                    </p>


                                    <div className="mt-6 sm:flex sm:items-center sm:gap-4">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <svg
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>

                                            <p className="text-xs font-medium">{course?.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;