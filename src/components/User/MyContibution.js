import React from 'react';
import leetcodeImage1 from '../../assets/contributions/leetcode.png';
import githubImage from '../../assets/contributions/github.png';
import geeksforgeeks from '../../assets/contributions/geeksforgeeks.png';



const contributionDetails = {
    contributionInfo: {
        title: "Code Contributions",
        description: "My Contribution Highlights"
    },
    contributions: [
        {
            id: 1,
            name: 'LeetCode',
            url: 'https://leetcode.com/u/abhishekmishra992016/',
            image: leetcodeImage1,
        },
        {
            id: 2,
            name: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/user/abhishekmissfie/',
            image: geeksforgeeks,
        },
        {
            id: 3,
            name: 'GitHub',
            url: 'https://github.com/Abhishek-Mishra-77',
            image: githubImage,
        },
    ],
}


const MyContribution = () => {
    return (
        <section id='contributions' className='py-10 bg-white relative'>
            <div className='mt-8 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
                <p className='text-gray-600 text-lg uppercase tracking-wider'>{contributionDetails?.contributionInfo?.title}</p>
                <h3 className='text-4xl font-bold text-gray-800 mt-4'>{contributionDetails?.contributionInfo?.description}</h3>
                <div className='flex flex-wrap justify-center mt-12 gap-8'>
                    {contributionDetails?.contributions.map((contribution) => (
                        <div
                            key={contribution.id}
                            className='bg-gray-200 w-full sm:w-1/2 lg:w-1/3 h-80 p-4 rounded-xl cursor-pointer shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden'
                        >
                            <a
                                href={contribution.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='block h-full'
                            >
                                <div className='w-full h-full flex items-center justify-center'>
                                    <img
                                        src={contribution.image}
                                        alt={contribution.name}
                                        className='object-contain w-full h-full'
                                    />
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-xl'>
                                    {contribution.name}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyContribution;
