import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import profile_img from "../../assets/profile/profilephoto.jpg";

const Admin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    }, [token, navigate]);

    const onChangePageHandler = (pageName) => {
        navigate(`/admin/${pageName}`);
        setMenuOpen(false); // Close mobile menu on navigation
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <header>
                <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">ABHISHEK</span>
                        </a>
                        <div className="flex items-center lg:order-2 relative">
                            <button onClick={toggleDropdown} className="relative text-white flex items-center focus:outline-none">
                                <img src={profile_img} alt="Profile" className="rounded-full w-10 h-10" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-32 w-48 bg-white rounded-md shadow-lg z-10">
                                    <button onClick={() => onChangePageHandler('settings')} className="block px-4 py-2 text-gray-800 w-full text-left rounded hover:bg-yellow-300">Profile</button>
                                    <button onClick={() => { localStorage.removeItem('token'); navigate('/auth'); }} className="block px-4 py-2 w-full rounded text-left text-gray-800 hover:bg-red-300">Logout</button>
                                </div>
                            )}
                            <button onClick={toggleMenu} className="lg:hidden p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                </svg>
                            </button>
                        </div>
                        <div className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${menuOpen ? "block" : "hidden"}`}>
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("about")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/about" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`} aria-current="page">ABOUT</button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("experience")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/experience" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        EXPERIENCE
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("skill")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/skill" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        SKILLS
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("project")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/project" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        PROJECTS
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("tool")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/tool" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        TOOLS
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("tool")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/tool" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        CONTRIBUTIONS
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => onChangePageHandler("contact")}
                                        className={`block py-2 pr-4 pl-3 text-gray-200 hover:bg-yellow-200 lg:hover:bg-transparent ${location?.pathname === "/admin/contact" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"} lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white`}>
                                        CONTACT
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default Admin;
