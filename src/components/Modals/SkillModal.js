import { GiCrossMark } from "react-icons/gi";


const SkillModal = ({ setIsModalOpen, data, heading,
    onCreateAndUpdateHandler,
    setData }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className='flex justify-between  items-center'>
                    <h2 className="text-2xl font-bold text-gray-500 mb-4">{heading}</h2>
                    <button onClick={() => {
                        setIsModalOpen(false)
                        setData({ ...data, logo: '', level: '', count: '50' })
                    }} className='text-2xl'>   <GiCrossMark /></button>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
                        Level
                    </label>
                    <input
                        id="level"
                        type="text"
                        value={data.level}
                        onChange={(e) => setData({ ...data, level: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter skill level"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
                        Logo (Copy from the react-icons)
                    </label>
                    <input
                        id="logo"
                        type="text"
                        value={data.logo}
                        onChange={(e) => setData({ ...data, logo: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter logo name (e.g., FaHtml5)"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="count">
                        Skill Proficiency
                    </label>
                    <input
                        id="count"
                        type="range"
                        min="1"
                        max="100"
                        value={data.count}
                        onChange={(e) => setData({ ...data, count: e.target.value })}
                        className="w-full"
                    />
                    <span className="block text-center mt-2">{data.count}%</span>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={
                            onCreateAndUpdateHandler}
                        className="bg-green-500 text-white px-4 w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillModal;
