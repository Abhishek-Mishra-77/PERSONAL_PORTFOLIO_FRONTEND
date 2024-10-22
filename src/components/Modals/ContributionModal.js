import React from 'react'
import { GiCrossMark } from "react-icons/gi";

const ContributionModal = ({
    setIsContributionModalOpen,
    contribution,
    setContribution,
    handleSubmit,
    heading
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-500 mb-4">{heading}</h2>
                    <button onClick={() => {
                        setIsContributionModalOpen(false)
                        setContribution({
                            name: "",
                            url: "",
                            imageUrl: ""
                        })
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
                        value={contribution.name}
                        onChange={(e) => setContribution({ ...contribution, name: e.target.value })}
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        URL
                    </label>
                    <input
                        id="url"
                        name="url"
                        value={contribution.url}
                        onChange={(e) => setContribution({ ...contribution, url: e.target.value })}
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image Url
                    </label>
                    <input
                        id="image"
                        name="image"
                        value={contribution.imageUrl}
                        onChange={(e) => setContribution({ ...contribution, imageUrl: e.target.value })}
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter image url"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white px-4 w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContributionModal;