import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ExperienceModal from '../Modals/ExperienceModal';


function Experience() {
    // const [experienceData, setExperienceData] = useState({
    //     ExperienceInfo: {
    //         title: 'EXPERIENCE',
    //         description: 'Professional Experience',
    //     },
    //     experiences: [
    //         {
    //             _id: 1,
    //             company: 'OMR India Outsources Pvt Ltd',
    //             designation: 'Software Developer',
    //             duration: 'Mar 2024 - Present',
    //             type: 'Full-time',
    //             location: 'Agra Uttar Pradesh',
    //             description: 'Working as a full-time Software Developer, involved in 2 significant projects utilizing MERN stack technologies...',
    //             summary: 'Full-time Software Developer at OMR India Outsources Pvt Ltd...',
    //             details: ['Involved in 2 major projects utilizing MERN stack technologies...', 'Collaborating with a skilled team...'],
    //             website: 'https://omrios.com/',
    //         },
    //         {
    //             _id: 2,
    //             company: 'Sharpener Tech',
    //             designation: 'Mentor & Teacher',
    //             duration: 'Jul 2024 - Present',
    //             type: 'Part-time',
    //             location: 'Remote',
    //             description: 'Working as a part-time mentor and teacher, guiding and training new trainees...',
    //             summary: 'Part-time Mentor & Teacher at Sharpener Tech...',
    //             details: ['Guiding and training new trainees in full stack development...', 'Engaging in hands-on teaching experiences...'],
    //             website: 'https://www.sharpener.tech/',
    //         },
    //         {
    //             _id: 3,
    //             company: 'Sharpener Tech',
    //             designation: 'Trainee',
    //             duration: 'Feb 2023 - Feb 2024',
    //             type: 'Full-time',
    //             location: 'Remote',
    //             description: 'Completed a year-long full stack development training...',
    //             summary: 'Full-time Trainee at Sharpener Tech...',
    //             details: ['Completed a year-long full stack development training program...', 'Gained comprehensive knowledge in MERN stack...'],
    //             website: 'https://www.sharpener.tech/',
    //         },
    //     ],
    // });
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(null);



    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/experience/getall`);
                setExperiences(response.data);
            } catch (error) {
                console.error('Error fetching experience data:', error);
            }
        };
        fetchExperienceData();
    }, [])



    return (
        <section className="bg-gray-50">
            <button
                onClick={() => setShowCreateModal(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE EXPERIENCE </span>
                <span
                    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
                >
                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </button>
            <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {experiences?.map((data) => (
                        <article key={data._id} className="rounded-xl border-2 border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex justify-start p-2">
                                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-lg bg-green-500 px-3 py-1.5 text-white transition-colors hover:bg-green-700">
                                    <span className="text-[10px] font-medium sm:text-xs">{data.duration}</span>
                                </strong>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                                <div>
                                    <h3 className="font-semibold text-lg sm:text-xl text-blue-600">
                                        <a target='_blank' rel="noreferrer" href={data.website} className="hover:underline">{data.company}</a>
                                    </h3>
                                    <p className="line-clamp-2 text-sm text-gray-800">{data.description}</p>
                                    <div className="mt-2 gap-2 sm:flex justify-between sm:items-center sm:mt-2">
                                        <h6 className="text-sm text-white bg-blue-500 px-2 py-1 rounded">{data.designation}</h6>
                                        <h6 className="text-sm text-gray-700 bg-green-300 px-2 py-1 rounded sm:mt-2">{data.type}</h6>
                                    </div>
                                    <div className="mt-2 sm:flex justify-between sm:items-center sm:gap-2">
                                        <h6 className="text-sm text-gray-700 bg-yellow-400 px-2 py-1 rounded">{data.location}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500 p-8">
                                <button
                                    className="flex items-center gap-2 text-xs text-yellow-500 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Edit
                                </button>
                                <button

                                    className="flex items-center gap-2 text-xs text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </button>
                            </div>

                        </article>
                    ))}
                </div>
            </div>

            {showCreateModal &&
                <ExperienceModal
                    setIsModalOpen={setShowCreateModal}
                />}
        </section>

    );
}

export default Experience;
