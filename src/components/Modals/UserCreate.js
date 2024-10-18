import React, { useState } from 'react';
import { GiCrossMark } from 'react-icons/gi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserFormModal = ({ title, userDetails, setUserDetails, onClose, onFunctionHandler }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={() => onClose(false)} className="text-2xl hover:bg-gray-200 p-1 rounded-full">
                        <GiCrossMark />
                    </button>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 transition duration-150"
                            value={userDetails?.name}
                            onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 transition duration-150"
                            value={userDetails?.email}
                            onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password:</label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 transition duration-150"
                                value={userDetails?.password}
                                onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-2 cursor-pointer text-gray-600 hover:text-blue-500 transition duration-150"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Roles:</label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={userDetails?.roles.admin}
                                    onChange={() => setUserDetails((prev) => ({ ...prev, roles: { ...prev.roles, admin: !prev.roles.admin, user: false } }))}
                                    className="mr-2"
                                />
                                <span>Admin</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={userDetails?.roles.user}
                                    onChange={() => setUserDetails((prev) => ({ ...prev, roles: { ...prev.roles, user: !prev.roles.user, admin: false } }))}
                                    className="mr-2"
                                />
                                <span>User</span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onFunctionHandler}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-150"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserFormModal;
