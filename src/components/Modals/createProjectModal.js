import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CreateProjectModal = ({ isOpen, onClose }) => {
    const [projectDetails, setProjectDetails] = useState({
        company: '',
        description: '',
        duration: '',
        githubLink: '',
        imageUrl: '',
        liveLink: '',
        outcomes: '',
        role: '',
        showLinks: false,
        status: '',
        title: '',
        technologies: [''],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleTechChange = (index, value) => {
        const techs = [...projectDetails.technologies];
        techs[index] = value;
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: techs,
        }));
    };

    const addTechnology = () => {
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: [...prevDetails.technologies, ''],
        }));
    };

    const removeTechnology = (index) => {
        const techs = projectDetails.technologies.filter((_, i) => i !== index);
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: techs,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectDetails);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Create Project</h2>
                    <button onClick={onClose}>
                        <AiOutlineClose className="text-gray-600 hover:text-gray-800" size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={projectDetails.company}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={projectDetails.description}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={projectDetails.duration}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="githubLink"
                        placeholder="GitHub Link"
                        value={projectDetails.githubLink}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={projectDetails.imageUrl}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="liveLink"
                        placeholder="Live Link"
                        value={projectDetails.liveLink}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="outcomes"
                        placeholder="Outcomes"
                        value={projectDetails.outcomes}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        value={projectDetails.role}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            name="showLinks"
                            checked={projectDetails.showLinks}
                            onChange={() => setProjectDetails((prev) => ({ ...prev, showLinks: !prev.showLinks }))}
                            className="mr-2"
                        />
                        <label>Show Links</label>
                    </div>
                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={projectDetails.status}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={projectDetails.title}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded mb-4"
                    />

                    <h3 className="font-semibold mb-2">Technologies</h3>
                    {projectDetails.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                placeholder={`Technology ${index + 1}`}
                                value={tech}
                                onChange={(e) => handleTechChange(index, e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded mr-2"
                            />
                            <button type="button" onClick={() => removeTechnology(index)} className="text-red-500">
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addTechnology} className="text-blue-500 mb-4">
                        Add Technology
                    </button>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Create Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;
