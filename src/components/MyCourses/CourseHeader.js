import React from 'react'

const CourseHeader = () => {
    return (
        <header className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8"> {/* Reduced padding here */}
                <div className="flex flex-col items-start  md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Blog Posts</h1>

                        <p className=" text-sm text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Create Post
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CourseHeader
