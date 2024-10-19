import { FaBackward } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
const CreateProjectPage = ({ projectDetails,
    setProjectDetails,
    setIsProjectModal,
    onCreateAndUpdateProjectHandler
}) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleTechChange = (index, value) => {
        const techs = [...(projectDetails?.technologies || [])];
        techs[index] = value;
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: techs,
        }));
    };

    const addTechnology = () => {
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: [...(prevDetails?.technologies || []), ''],
        }));
    };

    const removeTechnology = (index) => {
        const techs = projectDetails?.technologies?.filter((_, i) => i !== index);
        setProjectDetails((prevDetails) => ({
            ...prevDetails,
            technologies: techs,
        }));
    };


    return (
        <div className="container mx-auto my-6 px-4 sm:px-6 lg:px-8">

            <div className="bg-white rounded-lg p-4 sm:p-6 w-full shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-600">Create Project</h2>
                    <button onClick={() => setIsProjectModal(false)} className="text-2xl">  <FaBackward /></button>
                </div>
                <form onSubmit={onCreateAndUpdateProjectHandler} className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Project Name"
                            value={projectDetails?.title || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={projectDetails?.company || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="duration"
                            placeholder="Duration"
                            value={projectDetails?.duration || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="githubLink"
                            placeholder="GitHub Link"
                            value={projectDetails?.githubLink || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={projectDetails?.imageUrl || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="liveLink"
                            placeholder="Live Link"
                            value={projectDetails?.liveLink || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="outcomes"
                            placeholder="Outcomes"
                            value={projectDetails?.outcomes || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={projectDetails?.role || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <select
                            name="status"
                            value={projectDetails?.status || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Ongoing">Ongoing</option>
                        </select>

                    </div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={projectDetails?.description || ''}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="showLinks"
                            checked={projectDetails?.showLinks || false}
                            onChange={() => setProjectDetails((prev) => ({ ...prev, showLinks: !prev?.showLinks }))}
                            className="mr-2"
                        />
                        <label>Show Links</label>
                    </div>

                    <div className="flex justify-between">
                        <h3 className="font-semibold mb-2 text-blue-600">Technologies</h3>
                        <button
                            onClick={addTechnology}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
                        >
                            <IoMdAdd size={20} />
                        </button>
                    </div>

                    <div className="flex justify-between mt-2 flex-wrap">
                        {projectDetails?.technologies?.map((tech, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    placeholder={`Technology ${index + 1}`}
                                    value={tech || ''}
                                    onChange={(e) => handleTechChange(index, e.target.value)}
                                    className="w-full border border-gray-300 p-3 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button
                                    onClick={() => removeTechnology(index)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200 ease-in-out"
                                >
                                    <GiCrossMark size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button

                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Create Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectPage;
