import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import MessageModal from '../Modals/MessageModal'
import MessageShowModal from '../Modals/MessageShowModal'
import ConfirmationModal from '../Modals/ConfirmationModal'


const Contact = () => {
    const [contacts, setContacts] = useState([])
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [messageData, setMessageData] = useState({
        name: '',
        email: '',
        newMessage: '',
        phone: ''
    });
    const [isMessageCreateModal, setIsMessageCreateModal] = useState(false)
    const [isConfirmationModal, setIsConfirmationModal] = useState(false)
    const [contactId, setContactId] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 4;

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_SERVER_IP}/message/getall`)
                setContacts(res.data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        fetchContact()
    }, [isMessageCreateModal, isMessageModalOpen])

    const onCreateAndUpdateContactHandler = async (e) => {
        e.preventDefault()
        if (!messageData.name || !messageData.email || !messageData.newMessage || !messageData.phone) {
            toast.error('All fields are required')
            return
        }

        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const URL = messageData._id ? `${process.env.REACT_APP_SERVER_IP}/message/update/${messageData._id}` : `${process.env.REACT_APP_SERVER_IP}/message/create`;
            await axios.post(URL, messageData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setMessageData({
                name: '',
                email: '',
                message: '',
                phone: ''
            })
            setIsMessageCreateModal(false)
        }
    }



    const onRemoveContactHandler = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            await axios.delete(`${process.env.REACT_APP_SERVER_IP}/message/remove/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const filteredContacts = contacts.filter((contact) => contact._id !== contactId)
            setContacts(filteredContacts)
            toast.success('Contact deleted successfully')
        } catch (error) {
            toast.error(error.message || 'An error occurred while deleting the contact')

        }
        finally {
            setIsConfirmationModal(false)
            setContactId('')
        }
    }
    const totalPages = Math.ceil(contacts?.length / contactsPerPage);
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts?.slice(indexOfFirstContact, indexOfLastContact);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="container mx-auto p-6">
            <button
                onClick={() => setIsMessageCreateModal(true)}
                className="group flex ml-4 mb-6 items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="font-medium transition-colors group-hover:text-white"> CREATE CONTACT </span>
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
                <ul className="divide-y divide-gray-100">
                    {currentContacts?.map((data) => (
                        <li
                            key={data?._id}
                            className="flex justify-between items-center rounded-xl mt-2 gap-x-6 py-5 px-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex items-center gap-x-4">
                                <div className="h-12 w-12 flex-none rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-bold">
                                    {data?.name ? data.name.charAt(0).toUpperCase() : 'N'}
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-md font-semibold leading-6 text-gray-900">{data?.name}</p>
                                    <p className="text-sm leading-6 text-gray-600">{data?.email}</p>
                                    <p className="text-sm leading-6 text-gray-600">{data?.phone}</p>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center text-gray-500">
                                <button
                                    onClick={() => {
                                        setIsMessageModalOpen(true);
                                        setMessageData(data);
                                    }}
                                    className="flex items-center gap-2 text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Show
                                </button>
                                <button
                                    onClick={() => {
                                        setIsConfirmationModal(true);
                                        setContactId(data?._id);
                                    }}
                                    className="flex items-center gap-2 text-xs text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        setIsMessageCreateModal(true);
                                        setMessageData({
                                            name: data?.name,
                                            email: data?.email,
                                            newMessage: data?.message,
                                            phone: data?.phone,
                                            _id: data?._id
                                        });
                                    }}
                                    className="flex items-center gap-2 text-xs text-yellow-500 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Pagination Controls */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 transition"
                    >
                        Previous
                    </button>
                    <span className="self-center text-sm text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 transition"
                    >
                        Next
                    </button>
                </div>
            </div>

            {isMessageModalOpen &&
                <MessageShowModal
                    setMessageData={setMessageData}
                    messageData={messageData}
                    setIsMessageModalOpen={setIsMessageModalOpen}
                />}
            {isMessageCreateModal &&
                <MessageModal
                    setIsMessageCreateModal={setIsMessageCreateModal}
                    setMessageData={setMessageData}
                    messageData={messageData}
                    onCreateAndUpdateContactHandler={onCreateAndUpdateContactHandler}
                />}


            {isConfirmationModal &&
                <ConfirmationModal
                    heading="Delete Message"
                    message="Are you sure you want to delete this message?"
                    setOnConfirm={setIsConfirmationModal}
                    onFunctionHandler={onRemoveContactHandler}
                    setRemoveId={setContactId}
                />}
        </div>
    )
}

export default Contact
