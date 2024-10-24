import React from 'react'

const AllProjects = ({ projects, setIsProjectModal, setRemoveId, setIsModalOpen, setProjectDetails, currentPage, handlePageChange, totalPages }) => {
    return (
        <div>
            <button
                onClick={() => setIsProjectModal(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE PROJECT </span>
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
            <div className="p-4">
                <ul className="divide-y divide-gray-100 ">
                    {projects?.map((project) => (
                        <li key={project?._id} className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                            <div className="flex min-w-0 gap-x-4">
                                <a href={project?.imageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-16 w-24 flex-none  rounded-xl bg-blue-500 text-white flex items-center justify-center overflow-hidden">
                                    {project?.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt="projectImg"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg font-semibold">P</span>
                                    )}
                                </a>

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{project?.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{project?.company}</p>
                                    <a target="_blank" rel="noopener noreferrer" href={project?.liveLink} className="underline">
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{project?.liveLink}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500 flex-wrap">
                                <button
                                    onClick={() => {
                                        setIsModalOpen(true)
                                        setRemoveId(project?._id)
                                    }}
                                    className="flex items-center gap-2 text-xs text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        setProjectDetails(project)
                                        setIsProjectModal(true)
                                    }}
                                    className="flex items-center gap-2 text-xs  text-yellow-500 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Pagination Controls */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 transition"
                    >
                        Previous
                    </button>
                    <span className="self-center text-sm text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AllProjects