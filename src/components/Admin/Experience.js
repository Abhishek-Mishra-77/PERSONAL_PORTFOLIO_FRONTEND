import { useState } from 'react';

function Experience() {
    const [experienceData, setExperienceData] = useState({
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
                location: 'Agra Uttar Pradesh',
                description: 'Working as a full-time Software Developer, involved in 2 significant projects utilizing MERN stack technologies...',
                summary: 'Full-time Software Developer at OMR India Outsources Pvt Ltd...',
                details: ['Involved in 2 major projects utilizing MERN stack technologies...', 'Collaborating with a skilled team...'],
                website: 'https://omrios.com/',
            },
            {
                _id: 2,
                company: 'Sharpener Tech',
                designation: 'Mentor & Teacher',
                duration: 'Jul 2024 - Present',
                type: 'Part-time',
                location: 'Remote',
                description: 'Working as a part-time mentor and teacher, guiding and training new trainees...',
                summary: 'Part-time Mentor & Teacher at Sharpener Tech...',
                details: ['Guiding and training new trainees in full stack development...', 'Engaging in hands-on teaching experiences...'],
                website: 'https://www.sharpener.tech/',
            },
            {
                _id: 3,
                company: 'Sharpener Tech',
                designation: 'Trainee',
                duration: 'Feb 2023 - Feb 2024',
                type: 'Full-time',
                location: 'Remote',
                description: 'Completed a year-long full stack development training...',
                summary: 'Full-time Trainee at Sharpener Tech...',
                details: ['Completed a year-long full stack development training program...', 'Gained comprehensive knowledge in MERN stack...'],
                website: 'https://www.sharpener.tech/',
            },
        ],
    });

    const [showModal, setShowModal] = useState(false);  
    const [selectedExperience, setSelectedExperience] = useState(null);  


    const openModal = (experience) => {
        setSelectedExperience(experience);  // Set selected experience
        setShowModal(true);  // Show modal
    };

    const closeModal = () => {
        setShowModal(false);  // Hide modal
        setSelectedExperience(null);  // Clear selected experience
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedExperience((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Update experience data with the edited one
        setExperienceData((prevState) => ({
            ...prevState,
            experiences: prevState.experiences.map((exp) =>
                exp._id === selectedExperience._id ? selectedExperience : exp
            ),
        }));
        closeModal();  // Close modal after saving
    };

    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:flex md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-5xl">
                            {experienceData?.ExperienceInfo?.title}
                        </h2>
                        <p>{experienceData?.ExperienceInfo?.description}</p>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {experienceData?.experiences?.map((experience) => (
                        <div
                            key={experience._id}
                            onClick={() => openModal(experience)}  // Open modal on click
                            className="flex h-full flex-col justify-between cursor-pointer bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div>
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                    {experience.company}
                                </p>
                                <p className="mt-4 leading-relaxed text-gray-700">
                                    {experience.description}
                                </p>
                            </div>
                            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                &mdash; {experience.designation}
                            </footer>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && selectedExperience && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                        <h3 className="text-2xl font-bold mb-4">Edit Experience</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={selectedExperience.company}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Designation:</label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={selectedExperience.designation}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            {/* Add more input fields for other editable fields */}

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Experience;
