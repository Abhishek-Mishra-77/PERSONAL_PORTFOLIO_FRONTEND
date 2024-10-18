import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';


const MyProfile = () => {
    const [users, setUsers] = useState([]);

    const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/auth/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);


    return (
        <div className="p-4">
            <ul className="divide-y divide-gray-100 ">
                {users && users?.map((user) => (
                    <li key={user._id} className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="h-12 w-12 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                                {getInitials(user.name)}
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3 items-center text-gray-500 ">
                            <FaEdit className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <FaTrashAlt className="h-6 w-6 cursor-pointer hover:text-red-500" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyProfile;
