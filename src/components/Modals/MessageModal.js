import React from 'react'
import { GiCrossMark } from "react-icons/gi";

const MessageModal = ({
    setIsMessageCreateModal,
    setMessageData,
    messageData,
    onCreateAndUpdateContactHandler
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-500 mb-4">Message</h2>
                    <button onClick={() => {
                        setIsMessageCreateModal(false)
                        setMessageData({ name: '', email: '', newMessage: '', phone: '' })
                    }} className="text-2xl">
                        <GiCrossMark />
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={messageData.name}
                        onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={messageData.email}
                        onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        PHONE
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="number"
                        value={messageData.phone}
                        onChange={(e) => setMessageData({ ...messageData, phone: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        MESSAGE
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={messageData.newMessage}
                        onChange={(e) => setMessageData({ ...messageData, newMessage: e.target.value })}
                        className="w-full h-24 max-h-60 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 overflow-y-auto resize-none"
                        placeholder="Enter message"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={onCreateAndUpdateContactHandler}
                        className="bg-green-500 text-white px-4 w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MessageModal;