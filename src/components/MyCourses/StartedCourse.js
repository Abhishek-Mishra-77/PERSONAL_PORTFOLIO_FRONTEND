import React from 'react'
import CourseHeader from './CourseHeader'
import SideMenuBar from './SideMenuBar'

const StartedCourse = () => {
    return (
        <>
            <CourseHeader />
            <div className="flex">
                {/* Sidebar with fixed width */}
                <div className="w-1/6 border-gray-100 border-2">
                    <SideMenuBar />
                </div>

                {/* Main content area */}
                <div className="w-5/6 p-4">
                    {/* Add your course content here */}
                </div>
            </div>
        </>
    )
}

export default StartedCourse
