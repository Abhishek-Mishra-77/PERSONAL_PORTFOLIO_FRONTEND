import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserCreate = ({ setIsUserCreated, setUserDetails, userDetails, title }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border rounded-md shadow-sm p-2"
                            value={userDetails?.name}
                            onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border rounded-md shadow-sm p-2"
                            value={userDetails?.email}
                            onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Password:</label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                value={userDetails?.password}
                                onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-2 cursor-pointer"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Roles:</label>
                        <div>
                            <label className="block">
                                <input
                                    type="checkbox"
                                    checked={userDetails?.roles.admin}
                                    // onChange={() => handleRoleChange('admin')}
                                    className="mr-2"
                                />
                                Admin
                            </label>
                            <label className="block">
                                <input
                                    type="checkbox"
                                    checked={userDetails?.roles.user}
                                    // onChange={() => handleRoleChange('user')}
                                    className="mr-2"
                                />
                                User
                            </label>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsUserCreated(false)}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserCreate;
