import React from 'react'
import { GiCrossMark } from "react-icons/gi";

const ExperienceModal = ({ setIsModalOpen }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg overflow-hidden">
                <div className='flex justify-between items-center'>
                    <h3 className="text-2xl text-gray-600 font-bold mb-4">Edit Experience</h3>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        type="button"
                        className="text-gray-500 hover:text-gray-800 transition"
                    >
                        <GiCrossMark className="text-3xl" />
                    </button>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
                        <input
                            type="text"
                            name="company"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Designation:</label>
                        <input
                            type="text"
                            name="designation"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Duration: (Mar 2024 - Present)</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 overflow-y-auto"
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ExperienceModal