import { useState, useEffect } from 'react';
import { FaBars, FaBell, FaTimes, FaUser, FaCogs, FaEnvelope } from 'react-icons/fa';
import profile_img from "../../assets/profile/profilephoto.jpg";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const user = {
    name: 'Abhishek Mishra',
    email: 'abhishekmishra992016@gmail.com',
    imageUrl: profile_img,
};

const navigation = [
    { name: 'ABOUT', href: 'about', icon: <FaUser />, current: true },
    { name: 'EXPERIENCE', href: 'experience', icon: <FaCogs />, current: false },
    { name: 'SKILLS', href: 'skill', icon: <FaBell />, current: false },
    { name: 'PROJECTS', href: 'project', icon: <FaCogs />, current: false },
    { name: 'TOOLS', href: 'tool', icon: <FaCogs />, current: false },
    { name: 'CONTRIBUTIONS', href: 'contribution', icon: <FaBell />, current: false },
    { name: 'CONTACT', href: 'contact', icon: <FaEnvelope />, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Admin() {
    const [currentPageName, setCurrentPageName] = useState("about");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
        else {
            if (location?.pathname) {
                setCurrentPageName(location?.pathname.split('/')[2]);
            }
        }

    }, [token, navigate, location]);




    const handleNavigation = (pageName) => {
        navigate(`/admin/${pageName}`);
        setCurrentPageName(pageName);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div className="min-h-full">
                {/* Navbar */}
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                {/* Logo or Name */}
                                <div className="flex-shrink-0">
                                    <span className="text-2xl font-bold text-indigo-500">
                                        ABHISHEK
                                    </span>
                                </div>

                                {/* Desktop Menu */}
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() => handleNavigation(item.href)}
                                                className={classNames(
                                                    item.href === currentPageName ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Profile and Notifications */}
                            <div className="hidden md:flex items-center space-x-4">
                                {/* Profile dropdown */}
                                <div className="relative ml-3">
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                                            <button
                                                onClick={() => {
                                                    handleNavigation('myprofile');
                                                    setDropdownOpen(!dropdownOpen);
                                                }}
                                                className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </button>
                                            <button
                                                className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100"
                                            >
                                                Social
                                            </button>
                                            <button
                                                onClick={() => { localStorage.removeItem('token'); navigate('/auth'); }}
                                                className="block px-4 py-2  w-full text-left text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex md:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <FaBars className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
                                    <FaTimes className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href)}
                                        className={classNames(
                                            item.href === currentPageName ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'flex items-center space-x-3 block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.name}</span>
                                    </button>
                                ))}
                            </div>
                            {/* Profile in mobile view */}
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                    </div>

                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <button
                                        onClick={() => handleNavigation('myprofile')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        onClick={() => { localStorage.removeItem('token'); navigate('/auth'); }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Header */}
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-400">{currentPageName?.toUpperCase()}</h1>
                    </div>
                </header>

                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Admin;
