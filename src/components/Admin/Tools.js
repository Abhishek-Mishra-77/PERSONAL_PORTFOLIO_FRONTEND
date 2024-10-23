import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ConfirmationModal from '../Modals/ConfirmationModal';
import SkillModal from '../Modals/SkillModal';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import * as IOIcons from 'react-icons/io5';
import * as RIIcons from 'react-icons/ri';


const Tools = () => {
    const [tools, setTools] = useState([]);
    const [tool, setTool] = useState({
        logo: '',
        level: '',
        count: '50',
    })
    const [isToolModalOpen, setToolModalOpen] = useState(false);
    const [toolId, setToolId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 4;



    useEffect(() => {
        const fetchTools = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("token"));
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/tool/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTools(response?.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTools()
    }, [isToolModalOpen, setToolModalOpen])


    const onCreateAndUpdateToolHandler = async () => {
        if (!tool.logo || !tool.level) {
            toast.warning("All fields are required")
            return;
        }

        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const URL = tool?._id ? `${process.env.REACT_APP_SERVER_IP}/tool/update/${tool?._id}` : `${process.env.REACT_APP_SERVER_IP}/tool/create`;
            await axios.post(URL, tool, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tool added successfully")

        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            }
        }
        finally {
            setToolModalOpen(false)
            setTool({
                logo: '',
                level: '',
                count: '50'
            })
        }
    }

    const onRemoveToolHandler = () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            axios.delete(`${process.env.REACT_APP_SERVER_IP}/tool/remove/${toolId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const filterdTools = tools.filter(tool => tool._id !== toolId)
            setTools(filterdTools)
            toast.success("Tool removed successfully")
        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            }
        }
        finally {
            setIsModalOpen(false)
            setToolId("")
        }
    }


    const getIconComponent = (iconName) => {
        const allIcons = {
            ...FaIcons,
            ...IoIcons,
            ...SiIcons,
            ...TbIcons,
            ...IOIcons,
            ...RIIcons
        };
        return allIcons[iconName] || FaIcons.FaQuestionCircle;
    };


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const totalPages = Math.ceil(tools?.length / contactsPerPage);
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentTools = tools?.slice(indexOfFirstContact, indexOfLastContact);

    return (
        <Fragment>
            <button
                onClick={() => setToolModalOpen(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE TOOL </span>
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
                    {currentTools && currentTools?.map((data) => {
                        const LogoComponent = getIconComponent(data.logo);
                        return (
                            <li className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="h-12 w-12 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                                        <LogoComponent />
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{data?.level}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.logo}</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-3 items-center text-gray-500 ">
                                    <FaEdit
                                        onClick={() => {
                                            setToolModalOpen(true)
                                            setTool(data)
                                        }}
                                        className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                                    <FaTrashAlt
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setToolId(data._id)
                                        }}
                                        className="h-6 w-6 cursor-pointer hover:text-red-500" />
                                </div>
                            </li>
                        )
                    })}
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

            {isToolModalOpen && <SkillModal
                onCreateAndUpdateHandler={onCreateAndUpdateToolHandler}
                data={tool}
                setData={setTool}
                setIsModalOpen={setToolModalOpen}
                heading={tool?._id ? "Update Tool" : "Create Tool"}
            />}

            {isModalOpen && <ConfirmationModal
                message={`Are you sure you want to delete this tool?`}
                heading="Delete Tool"
                setOnConfirm={setIsModalOpen}
                onFunctionHandler={onRemoveToolHandler}
                setRemoveId={setToolId}
            />
            }
        </Fragment>
    )
}

export default Tools