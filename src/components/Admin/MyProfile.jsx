import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import ConfirmationModal from '../Modals/ConfirmationModal';
import { toast } from 'react-toastify';
import UserCreate from '../Modals/UserCreate';

const MyProfile = () => {
    const [users, setUsers] = useState([]);
    const [onConfirm, setOnConfirm] = useState(false);
    const [userId, setUserId] = useState("");
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isEditModal, setIsEditModal] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        roles: {
            admin: false,
            user: false,
        }
    });

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
    }, [isUserCreated, isEditModal]);

    const onCreateUserHandler = async (e) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.email || !userDetails.password) {
            toast.error("All fields are required");
            return;
        }

        try {
            const token = JSON.parse(localStorage.getItem('token'));
            await axios.post(`${process.env.REACT_APP_SERVER_IP}/auth/register`, userDetails, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("User created successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setIsUserCreated((prev) => !prev);
            setUserDetails({
                name: "",
                email: "",
                password: "",
                roles: {
                    admin: false,
                    user: false,
                }
            });
        }
    };

    const onRemoveUserHandler = async () => {
        if (users.length === 1) {
            setOnConfirm(false);
            toast.error("Can't delete last user");
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            await axios.delete(`${process.env.REACT_APP_SERVER_IP}/auth/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filteredUsers = users.filter((user) => user._id !== userId);
            setUsers(filteredUsers); // Update local state
            toast.success("User deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setOnConfirm(false);
            setUserId("");
        }
    };

    // Handler for editing a user
    const onUserEditHandler = async () => {
        if (!userDetails.name || !userDetails.email || !userDetails.password) {
            toast.error("All fields are required");
            return;
        }
        if (!userId) {
            toast.error("User not found");
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            await axios.put(`${process.env.REACT_APP_SERVER_IP}/auth/user/${userId}`, userDetails, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("User updated successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setIsEditModal(false);
            setUserDetails({
                name: "",
                email: "",
                password: "",
                roles: {
                    admin: false,
                    user: false,
                }
            });
            setUserId("");
        }
    };

    return (
        <Fragment>

            <button
                onClick={() => setIsUserCreated(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE USER </span>
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
                    {users?.map((user) => (
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
                                <button
                                    onClick={() => {
                                        setIsEditModal(true);
                                        setUserId(user._id);
                                        setUserDetails((prev) => ({
                                            ...prev,
                                            name: user.name,
                                            email: user.email,
                                            roles: {
                                                admin: user.roles?.admin ?? false,
                                                user: user.roles?.user ?? true,
                                            }
                                        }));
                                    }}
                                    className="flex items-center gap-2 text-xs text-yellow-500 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setUserId(user._id);
                                        setOnConfirm(true);
                                    }}
                                    className="flex items-center gap-2 text-xs text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </button>
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
                setRemoveId={setUserId}
            />}

            {isUserCreated && <UserCreate
                setUserId={setUserId}
                title="Create New User"
                onClose={setIsUserCreated}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
                onFunctionHandler={onCreateUserHandler}
            />}

            {isEditModal && <UserCreate
                setUserId={setUserId}
                title="Edit User"
                onClose={setIsEditModal}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                onFunctionHandler={onUserEditHandler}
            />}
        </Fragment>
    );
};

export default MyProfile;
