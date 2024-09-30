import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";

function ProfileEditor() {
    const [profileData, setProfileData] = useState({
        skills: [
            "MERN STACK DEVELOPER",
            "FRONTEND DEVELOPER",
            "BACKEND DEVELOPER",
            "MENTORSHIP SESSION",
        ],
        personalInfo: {
            Name: "𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑴𝒊𝒔𝒉𝒓𝒂",
            Available: "Available for Work",
            imageUrl: "https://ugc.production.linktr.ee/849beda0-ee98-43cb-8e8a-549d05db232a_profilephoto.jpeg?io=true&size=avatar-v3_0", // Replace with actual image URL
            designation: "Software Developer",
            description:
                "Experienced Software Developer specializing in MERN stack technologies, adept at delivering scalable and innovative web solutions.",
            ResumeLink:
                "https://drive.google.com/file/d/1LyVTiZ5_haRPmyspnops2lMbe6aJNrp1/view?usp=drive_link",
        },
    });

    // Handle change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            personalInfo: {
                ...profileData.personalInfo,
                [name]: value,
            },
        });
    };

    // Handle change for skills array
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...profileData.skills];
        updatedSkills[index] = value;
        setProfileData({ ...profileData, skills: updatedSkills });
    };

    // Add a new skill
    const addSkillInputHandler = () => {
        setProfileData({ ...profileData, skills: [...profileData.skills, ""] });
    };

    // Remove a skill input box
    const removeSkillHandler = (index) => {
        const updatedSkills = profileData.skills.filter((_, i) => i !== index);
        setProfileData({ ...profileData, skills: updatedSkills });
    };

    // Save the updated data (you can implement saving logic here)
    const saveProfile = () => {
        console.log("Profile data saved:", profileData);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-8 pt-8 mb-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>

            <div className="flex gap-6">
                {/* Profile Image */}
                <div>
                    <img
                        className="w-32 h-32 object-cover rounded-full"
                        src={profileData.personalInfo.imageUrl}
                        alt="Profile"
                    />
                </div>

                {/* Image URL input */}
                <div className="flex-1 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={profileData.personalInfo.imageUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Paste new image URL here"
                        />
                    </div>

                    {/* Other Personal Info Fields */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            name="Name"
                            value={profileData.personalInfo.Name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Available Status
                        </label>
                        <input
                            type="text"
                            name="Available"
                            value={profileData.personalInfo.Available}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Designation
                        </label>
                        <input
                            type="text"
                            name="designation"
                            value={profileData.personalInfo.designation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={profileData.personalInfo.description}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Resume Link
                        </label>
                        <input
                            type="text"
                            name="ResumeLink"
                            value={profileData.personalInfo.ResumeLink}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-6">
                <div className="flex justify-between items-center p-2">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Skills</h3>
                    <button
                        onClick={addSkillInputHandler}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                    >
                        <IoMdAdd />
                    </button>
                </div>
                {profileData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            onClick={() => removeSkillHandler(index)}
                            className="mt-2 px-4 py-2 mr-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
                        >
                            <GiCrossMark />
                        </button>
                    </div>
                ))}
                <div className="flex gap-4">

                    <button
                        onClick={saveProfile}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
                    >
                        Save Profile
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProfileEditor;
