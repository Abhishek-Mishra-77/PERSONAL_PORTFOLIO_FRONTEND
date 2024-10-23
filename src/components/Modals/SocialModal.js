import { GiCrossMark } from "react-icons/gi";


const SkillModal = ({ heading, setSocialModal, social, setSocial, onCreateAndUpdateSocialHandler }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className='flex justify-between  items-center'>
                    <h2 className="text-2xl font-bold text-gray-500 mb-4">{heading}</h2>
                    <button
                        onClick={() => {
                            setSocialModal(false)
                            setSocial({
                                Symbol: '',
                                link: '',
                            })
                        }}
                        className='text-2xl'>   <GiCrossMark /></button>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
                        Link
                    </label>
                    <input
                        id="level"
                        type="text"
                        value={social.link}
                        onChange={(e) => setSocial({ ...social, link: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter social link"
                    />
                </div>

                <div className="mb-4">
                    <label className="block flex justify-between text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
                        <p>Symbol</p>
                        <a href="https://ionic.io/ionicons" target="_blank" rel="noopener noreferrer" >Copy from the ionicons</a>
                    </label>
                    <input
                        id="Symbol"
                        type="text"
                        value={social.Symbol}
                        onChange={(e) => setSocial({ ...social, Symbol: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter logo name (e.g., person-outline)"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onCreateAndUpdateSocialHandler}
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
