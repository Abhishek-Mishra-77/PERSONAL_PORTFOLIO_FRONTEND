import React from 'react'
import { GiCrossMark } from "react-icons/gi";
const MessageShowModal = ({ setIsMessageModalOpen, setMessageData, messageData }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className='flex justify-between p-2'>
                    <h2 className="text-lg font-semibold mb-4">Message</h2>
                    <button
                        onClick={() => {
                            setIsMessageModalOpen(false)
                            setMessageData({ name: '', email: '', message: '', phone: '' })
                        }}
                        className="text-2xl p-2">
                        <GiCrossMark />
                    </button>
                </div>

                <div className="max-h-80 overflow-y-auto mb-4">
                    <p className="text-gray-700 whitespace-pre-wrap">{messageData?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageShowModal
