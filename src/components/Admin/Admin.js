import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile_img from "../../assets/profile/profilephoto.jpg"

const Admin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    }, [token, navigate]);

    

    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-64 bg-white border-r border-gray-200">
                <aside className="flex-1 overflow-auto">
                    <div className="px-4 py-6">
                        <span className="grid h-10 w-full place-content-center font-bold rounded-lg bg-gray-200 text-xl text-gray-400">
                            SLOW DOWN
                        </span>
                        <ul className="mt-6 space-y-1">
                            <li>
                                <div className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                    ABOUT
                                </div>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-medium">EXPERIENCE</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Banned Users
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Calendar
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-medium">SKILLS</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Banned Users
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Calendar
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-medium">PROJECTS</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Banned Users
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Calendar
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-medium">TOOLS</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Banned Users
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Calendar
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-medium">CONTRIBUTIONS</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Banned Users
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                Calendar
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="text-sm font-medium">CONTACT</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Messages
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="text-sm font-medium">ACCOUNT</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                User Profile
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Settings
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Support
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Feedback
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Account Security
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Privacy Settings
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Activity Log
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                API Keys
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                                Logout
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="border-t border-gray-100 bg-white">
                    <fiv className="flex items-center gap-2 p-4 hover:bg-gray-100 cursor-pointer">
                        <img
                            alt="User profile"
                            src={profile_img}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium text-gray-400">ABHSIHEK MISHRA</strong>
                                <span className='text-gray-400'>abhishekmishra992016@gmail.com</span>
                            </p>
                        </div>
                    </fiv>
                </div>
            </div>
            <main className="flex-1 overflow-auto bg-gray-50">
                dasdasd
            </main>
        </div>
    )
}

export default Admin;
