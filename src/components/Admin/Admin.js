import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import profile_img from "../../assets/profile/profilephoto.jpg"
import { Outlet } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const location = useLocation();

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    }, [token, navigate]);

    const onChangePageHandler = (pageName) => {
        navigate(`/admin/${pageName}`);
    }


    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-64 bg-white border-r border-gray-200">
                <aside className="flex-1 overflow-auto">
                    <div className="px-4 py-6">
                        <span className="grid h-10 w-full place-content-center  rounded-lg  text-xl  bg-gray-200 text-gray-400 font-bold">
                            ABHISHEK MISHRA
                        </span>
                        <ul className="mt-6 space-y-1">
                            <li onClick={() => onChangePageHandler("about")}>
                                <div
                                    className={`block rounded-lg  px-4 py-2 text-sm font-xl ${location?.pathname === "/admin/about" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} cursor-pointer`}>
                                    ABOUT
                                </div>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        onClick={() => onChangePageHandler("experience")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/experience" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `} >
                                        <span className="text-sm font-xl text-gray-400">EXPERIENCE</span>
                                    </summary>

                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary onClick={() => onChangePageHandler("skill")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/skill" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `} >
                                        <span className="text-sm font-xl text-gray-400">SKILLS</span>

                                    </summary>

                                </details>
                            </li>
                            <li>
                                <details onClick={() => onChangePageHandler("project")} className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/project" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `} >
                                        <span className="text-sm font-xl text-gray-400">PROJECTS</span>

                                    </summary>

                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        onClick={() => onChangePageHandler("tool")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/tool" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `} >
                                        <span className="text-sm font-xl text-gray-400">TOOLS</span>

                                    </summary>

                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        onClick={() => onChangePageHandler("contribution")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/contribution" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `}>
                                        <span className="text-sm font-xl text-gray-400">CONTRIBUTIONS</span>

                                    </summary>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        onClick={() => onChangePageHandler("contact")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/contact" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `}>
                                        <span className="text-sm font-xl text-gray-400">CONTACT</span>

                                    </summary>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        onClick={() => onChangePageHandler("account")}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 ${location?.pathname === "/admin/account" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} `}>
                                        <span className="text-sm font-xl text-gray-400">ACCOUNT</span>
                                    </summary>
                                </details>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="border-t border-gray-100 bg-white">
                    <div className="flex items-center gap-2 p-4 hover:bg-gray-100 cursor-pointer">
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
                    </div>
                </div>
            </div>
            <main className="flex-1 overflow-auto bg-gray-50">
                <Outlet />
            </main>
        </div>
    )
}

export default Admin;
