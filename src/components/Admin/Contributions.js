import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import ContributionModal from "../Modals/ContributionModal";
import ConfirmationModal from "../Modals/ConfirmationModal";


const Contributions = () => {
    const [contributions, setContributions] = useState([]);
    const [contribution, setContribution] = useState({
        name: "",
        url: "",
        imageUrl: "",
    })
    const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
    const [contributionId, setContributionId] = useState("");
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);



    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/contribution/getall`);
                setContributions(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContributions();
    }, [isContributionModalOpen, setIsContributionModalOpen])

    const onCreateAndUpdateContributionHandler = async (e) => {
        e.preventDefault();
        if (
            !contribution.name ||
            !contribution.url ||
            !contribution.imageUrl) {
            toast.error("All fields are required");
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const URL = contribution?._id ? `${process.env.REACT_APP_SERVER_IP}/contribution/update/${contribution?._id}` : `${process.env.REACT_APP_SERVER_IP}/contribution/create`;
            await axios.post(`${URL}`, contribution, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Project created or updated successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred while creating the project");
            console.log(error);
        }
        finally {
            setIsContributionModalOpen(false);
            setContribution({
                name: "",
                url: "",
                imageUrl: "",
            });
        }
    }

    const onRemoveContributionHandler = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            await axios.delete(`${process.env.REACT_APP_SERVER_IP}/contribution/remove/${contributionId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filteredContributions = contributions.filter((contribution) => contribution._id !== contributionId);
            setContributions(filteredContributions);
            toast.success("Project deleted successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred while deleting the project");
            console.log(error);
        }
        finally {
            setIsConfirmationModalOpen(false);
            setContributionId("");
        }
    }


    return (
        <div>
            <button
                onClick={() => setIsContributionModalOpen(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE CONTRIBUTION </span>
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
                    {contributions?.map((data) => (
                        <li key={data?._id} className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                            <div className="flex min-w-0 gap-x-4">
                                <a href={data?.imageUrl}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className="h-16 w-24 flex-none  rounded-xl bg-blue-500 text-white flex items-center justify-center overflow-hidden">
                                    {data?.imageUrl ? (
                                        <img
                                            src={data.imageUrl}
                                            alt="projectImg"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg font-semibold">P</span>
                                    )}
                                </a>

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{data?.name}</p>
                                    <a
                                        href={data?.url}
                                        className="mt-1 block truncate text-xs leading-5 text-blue-500 hover:text-blue-700 hover:underline transition duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data?.url}
                                    </a>
                                </div>

                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500 flex-wrap">
                                <button
                                    onClick={() => {
                                        setIsConfirmationModalOpen(true);
                                        setContributionId(data?._id);
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
                                        setIsContributionModalOpen(true);
                                        setContribution(data);
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
            </div>
            {isContributionModalOpen &&
                <ContributionModal
                    contribution={contribution}
                    setContribution={setContribution}
                    handleSubmit={onCreateAndUpdateContributionHandler}
                    setIsContributionModalOpen={setIsContributionModalOpen}
                    heading={contribution?._id ? "Update Contribution" : "Create Contribution"}
                />}


            {isConfirmationModalOpen &&
                <ConfirmationModal
                    heading="Delete Contribution"
                    message="Are you sure you want to delete this contribution?"
                    setOnConfirm={setIsConfirmationModalOpen}
                    onFunctionHandler={onRemoveContributionHandler}
                    setRemoveId={setContributionId}
                />}

        </div>
    )
}

export default Contributions
