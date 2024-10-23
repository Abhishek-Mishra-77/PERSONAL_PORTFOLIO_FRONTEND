import React from 'react'
import { GiCrossMark } from "react-icons/gi";

const ExperienceModal = ({ setIsModalOpen, experience, setExperience, onCreateAndUpdateExperience }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg mt-10 ">
                <div className='flex justify-between items-center'>
                    <h3 className="text-2xl text-gray-600 font-bold mb-4">Edit Experience</h3>
                    <button
                        onClick={() => {
                            setIsModalOpen(false)
                            setExperience({
                                company: '',
                                designation: '',
                                duration: '',
                                type: '',
                                location: '',
                                description: '',
                                website: '',
                            })
                        }}
                        type="button"
                        className="text-gray-500 hover:text-gray-800 transition"
                    >
                        <GiCrossMark className="text-3xl" />
                    </button>
                </div>
                <form onSubmit={onCreateAndUpdateExperience}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={experience.company}
                            onChange={(e) => setExperience({ ...experience, company: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4 flex gap-2">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Designation:</label>
                            <input
                                type="text"
                                name="designation"
                                value={experience.designation}
                                onChange={(e) => setExperience({ ...experience, designation: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={experience.location}
                                onChange={(e) => setExperience({ ...experience, location: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex gap-2">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Duration: (Mar 2024 - Present)</label>
                            <input
                                type="text"
                                name="duration"
                                value={experience.duration}
                                onChange={(e) => setExperience({ ...experience, duration: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Type: (Full-time or Part-time)</label>
                            <input
                                type="text"
                                name="type"
                                value={experience.type}
                                onChange={(e) => setExperience({ ...experience, type: e.target.value })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Website link</label>
                        <input
                            type="text"
                            name="website"
                            value={experience.website}
                            onChange={(e) => setExperience({ ...experience, website: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                        <textarea
                            name="description"
                            rows="4"
                            value={experience.description}
                            onChange={(e) => setExperience({ ...experience, description: e.target.value })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 overflow-y-auto"
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                    <div className="flex justify-end space-x-4 w-full">
                        <button
                            type="submit"
                            className="px-4 py-2  w-full bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Save
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExperienceModal