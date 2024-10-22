import React, { useEffect, useState, Fragment } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import SkillModal from '../Modals/SkillModal';
import { toast } from 'react-toastify';
import ConfirmationModal from '../Modals/ConfirmationModal';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState({
        logo: '',
        level: '',
        count: '50',
    })
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [skillId, setSkillId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

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
    }, [setIsSkillModalOpen, isSkillModalOpen])

    const onCreateAndUpdateSkillHandler = async () => {
        if (!skill.logo || !skill.level) {
            toast.warning("All fields are required")
            return;
        }

        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const URL = skill?._id ? `${process.env.REACT_APP_SERVER_IP}/skill/update/${skill?._id}` : `${process.env.REACT_APP_SERVER_IP}/skill/create`;
            await axios.post(URL, skill, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Skill added successfully")

        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            }
        }
        finally {
            setIsSkillModalOpen(false)
            setSkill({
                logo: '',
                level: '',
                count: '50'
            })
        }
    }

    const onRemoveSkillHandler = () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            axios.delete(`${process.env.REACT_APP_SERVER_IP}/skill/remove/${skillId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const filterdSkills = skills.filter(skill => skill._id !== skillId)
            setSkills(filterdSkills)
            toast.success("Skill removed successfully")
        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            }
        }
        finally {
            setIsModalOpen(false)
            setSkillId("")
        }
    }

    return (
        <Fragment>
            <button
                onClick={() => setIsSkillModalOpen(true)}
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
                    {skills && skills?.map((data) => (
                        <li className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="h-12 w-12 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                                    {data?.count}
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{data?.level}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.logo}</p>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500 ">
                                <FaEdit
                                    onClick={() => {
                                        setIsSkillModalOpen(true)
                                        setSkill(data)
                                    }}
                                    className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                                <FaTrashAlt
                                    onClick={() => {
                                        setIsModalOpen(true)
                                        setSkillId(data._id)
                                    }}
                                    className="h-6 w-6 cursor-pointer hover:text-red-500" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {isSkillModalOpen && <SkillModal
                onCreateAndUpdateHandler={onCreateAndUpdateSkillHandler}
                data={skill}
                setData={setSkill}
                setIsModalOpen={setIsSkillModalOpen}
                heading={skill?._id ? "Update Skill" : "Create Skill"}
            />}

            {isModalOpen && <ConfirmationModal
                message={`Are you sure you want to delete this skill?`}
                heading="Delete Skill"
                setOnConfirm={setIsModalOpen}
                onFunctionHandler={onRemoveSkillHandler}
                setRemoveId={setSkillId}
            />
            }
        </Fragment>
    )
}

export default Skills