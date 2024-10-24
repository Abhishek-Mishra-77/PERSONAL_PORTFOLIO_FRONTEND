import React, { useState, useEffect, Fragment } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import SocialModal from '../Modals/SocialModal';
import ConfirmationModal from '../Modals/ConfirmationModal';

const SocialMedia = () => {
    const [socials, setSocials] = useState([]);
    const [isSocialModal, setSocialModal] = useState(false);
    const [social, setSocial] = useState({ Symbol: '', link: '', name: '' });
    const [socialId, setSocialId] = useState("");
    const [isConfirmationModal, setIsConfirmationModal] = useState(false);


    useEffect(() => {
        const fetchSocials = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/social/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setSocials(response.data);
            } catch (error) {
                console.error('Error fetching socials:', error);
            }
        };
        fetchSocials();
    }, [isSocialModal, setSocialModal]);

    const onCreateAndUpdateSocialHandler = async () => {
        if (!social.Symbol || !social.link) {
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            const URL = social?._id ? `${process.env.REACT_APP_SERVER_IP}/social/update/${social?._id}` : `${process.env.REACT_APP_SERVER_IP}/social/create`;
            await axios.post(URL, social, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSocials([...socials, social]);
            setSocial({ Symbol: '', link: '' });
            setSocialModal(false);
        } catch (error) {
            console.error('Error creating social:', error);
        }
    };



    const onRemoveSocialHandler = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            await axios.delete(`${process.env.REACT_APP_SERVER_IP}/social/remove/${socialId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSocials(socials.filter((social) => social._id !== socialId));
        } catch (error) {
            console.error('Error deleting social:', error);
        }
        finally {
            setIsConfirmationModal(false);
            setSocialId('');
        }
    };

    return (
        <Fragment>
            <button
                onClick={() => setSocialModal(true)}
                className="group flex ml-4 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE SOCIAL </span>
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
                    {socials && socials?.map((data) => {
                        return (
                            <li className="flex justify-between rounded-xl mt-2 gap-x-6 py-5 bg-gray-100 p-4">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="h-12 w-12 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                                        <ion-icon name={data.Symbol} class="text-3xl"></ion-icon>
                                        <span
                                            className="inline-flex items-center text-sm justify-center rounded-full w-[10px]"
                                        >
                                            {data.count}
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="font-semibold leading-6  text-gray-500">{data?.Symbol}</p>
                                        <p className="font-semibold text-sm leading-6 text-gray-500">{data?.name}</p>
                                        <a href={data?.link} target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 underline'>  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data?.link}</p></a>
                                    </div>
                                </div>
                                <div className="flex gap-x-3 items-center text-gray-500 ">
                                    <FaEdit
                                        onClick={() => {
                                            setSocial(data)
                                            setSocialModal(true)
                                        }}
                                        className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                                    <FaTrashAlt
                                        onClick={() => {
                                            setIsConfirmationModal(true)
                                            setSocialId(data._id)
                                        }}
                                        className="h-6 w-6 cursor-pointer hover:text-red-500" />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>


            {isConfirmationModal && <ConfirmationModal
                heading="Delete Social Media"
                message="Are you sure you want to delete this social?"
                setOnConfirm={setIsConfirmationModal}
                onFunctionHandler={onRemoveSocialHandler}
                setRemoveId={setSocialId}
            />}

            {/* Social Modal */}
            {isSocialModal && <SocialModal
                social={social}
                setSocial={setSocial}
                heading="CREATE SOCIAL "
                setSocialModal={setSocialModal}
                onCreateAndUpdateSocialHandler={onCreateAndUpdateSocialHandler}
            />}

        </Fragment>
    )
}

export default SocialMedia
