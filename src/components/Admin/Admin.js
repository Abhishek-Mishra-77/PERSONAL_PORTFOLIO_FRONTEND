import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile_img from "../../assets/profile/profilephoto.jpg"
import { Outlet } from 'react-router-dom';

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
                            ABHISHEK MISHRA
                        </span>
                        <ul className="mt-6 space-y-1">
                            <li>
                                <div className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-xl text-gray-400 cursor-pointer">
                                    ABOUT
                                </div>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" >
                                        <span className="text-sm font-xl text-gray-400">EXPERIENCE</span>

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
                                        <span className="text-sm font-xl text-gray-400">SKILLS</span>

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
                                        <span className="text-sm font-xl text-gray-400">PROJECTS</span>

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
                                        <span className="text-sm font-xl text-gray-400">TOOLS</span>

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
                                        <span className="text-sm font-xl text-gray-400">CONTRIBUTIONS</span>

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
                                        <span className="text-sm font-xl text-gray-400">CONTACT</span>

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
                                        <span className="text-sm font-xl text-gray-400">ACCOUNT</span>
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
                <Outlet/>
            </main>
        </div>
    )
}

export default Admin;
