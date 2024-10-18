import React, { useEffect, useState, Fragment } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import ConfirmationModal from '../Modals/ConfirmationModal';
import { toast } from 'react-toastify';


const MyProfile = () => {
    const [users, setUsers] = useState([]);
    const [onConfirm, setOnConfirm] = useState(false);
    const [userId, setUserId] = useState("")

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


    const onRemoveUserHandler = () => {
        if (users && users.length === 1) {
            setOnConfirm(false)
            toast.error("Can't delete last user")
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            axios.delete(`${process.env.REACT_APP_SERVER_IP}/auth/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filteredUsers = users.filter((user) => user._id !== userId);
            setUsers(filteredUsers);
            toast.success("User deleted successfully")
        }
        catch (error) {
            console.log(error)
            toast.error(error.response.data)
        }
        finally {
            setOnConfirm(false)
            setUserId("")
        }
    }


    return (
        <Fragment>
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
                                <FaTrashAlt
                                    onClick={() => {
                                        setUserId(user._id)
                                        setOnConfirm(true)
                                    }}
                                    className="h-6 w-6 cursor-pointer hover:text-red-500" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {onConfirm && <ConfirmationModal
                heading="Delete User"
                message="Are you sure you want to delete this user?"
                setOnConfirm={setOnConfirm}
                onFunctionHandler={onRemoveUserHandler}
                setUserId={setUserId}
            />}
        </Fragment>
    );
};

export default MyProfile;
