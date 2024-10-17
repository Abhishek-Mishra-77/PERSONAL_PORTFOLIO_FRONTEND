import React from 'react'
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";


const MyTools = () => {
    const toolDetails = {
        Tools: [
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
        ],
        toolInfo: {
            title: 'TOOLS & TECHNOLOGIES',
            description: "Development Toolkits"
        }
    }

    return (
        <section id='skills' className='py-10 bg-white relative'>
        <div className='mt-8 text-gray-100 text-center py-16 px-4 sm:px-6 lg:px-8'>
          <p className='text-gray-500'>{toolDetails?.toolInfo?.title}</p>
          <h3 className='text-4xl font-bold text-gray-800 mt-4'>{toolDetails?.toolInfo?.description}</h3>
          <div className='flex items-center justify-center mt-12 gap-6 flex-wrap'>
            {toolDetails?.Tools.map((tool) => (
              <div
                key={tool._id}
                className='bg-gray-200 h-48 w-64 sm:w-72 rounded-xl cursor-pointer shadow-lg transition-transform transform hover:scale-105'>
                <div className='group relative min-w-[8rem] max-w-[12rem] p-4 sm:p-6 rounded-xl bg-gray-300 hover:bg-gray-400 transition-colors'>
                  <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 group-hover:text-cyan-600'>
                    {tool.logo}
                  </h1>
                  <p className='text-base sm:text-lg mt-3 text-gray-700 group-hover:text-cyan-700'>
                    {tool.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    )
}

export default MyTools