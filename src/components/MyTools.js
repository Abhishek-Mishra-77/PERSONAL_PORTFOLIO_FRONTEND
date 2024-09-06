import React from 'react'
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";

const MyTools = () => {
    const Tools = [
        {
            _id: 'b1',
            level: 'VS Code',
            logo: <TbBrandVscode />
        },
        {
            _id: 'b2',
            level: 'Postman',
            logo: <SiPostman />
        },
        {
            _id: 'b3',
            level: 'GitHub',
            logo: <FaGithub />
        },
        {
            _id: 'b4',
            level: 'Netlify',
            logo: <SiNetlify />
        },
        {
            _id: 'b5',
            level: 'Vercel',
            logo: <IoLogoVercel />
        },
        {
            _id: 'b6',
            level: 'Render',
            logo: <SiRender />
        },
    ]

    return (
        <section id='skills' className='py-10 bg-white relative'>
            <div className='mt-8 text-gray-100 text-center py-16 px-4 sm:px-6 lg:px-8'>
                <p className='text-gray-500'>TOOLS & TECHNOLOGIES</p>
                <h3 className='text-4xl font-bold text-gray-800 mt-4'> Development Toolkits</h3>
                <div className='flex items-center justify-center mt-12 gap-6 flex-wrap'>
                    {Tools.map((tool) => (
                        <div key={tool._id} className='bg-gray-200 h-64 w-80 sm:w-96 rounded-xl cursor-pointer shadow-lg transition-transform transform hover:scale-105'>
                            <div className='group relative min-w-[10rem] max-w-[16rem] p-6 sm:p-10 rounded-xl bg-gray-300 hover:bg-gray-400 transition-colors'>
                                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-gray-600 group-hover:text-cyan-600'>{tool.logo}</h1>
                                <p className='text-lg sm:text-xl mt-3 text-gray-700 group-hover:text-cyan-700'>{tool.level}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyTools