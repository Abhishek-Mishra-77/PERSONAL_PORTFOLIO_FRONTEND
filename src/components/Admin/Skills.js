import React, { useEffect, useState, Fragment } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';



const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("token"));
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/skill/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setSkills(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSkills()
    }, [])


    return (
        <Fragment>
            <button
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE SKILL </span>
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
                    {skills && skills?.map((skill) => (
                        <li className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="h-12 w-12 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                                    {skill?.count}
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{skill?.level}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{skill?.logo}</p>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500 ">
                                <FaEdit

                                    className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                                <FaTrashAlt

                                    className="h-6 w-6 cursor-pointer hover:text-red-500" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </Fragment>
    )
}

export default Skills