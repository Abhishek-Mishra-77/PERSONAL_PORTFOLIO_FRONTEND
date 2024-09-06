import React from 'react'
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const MyTools = () => {
    const Tools = [
        {
            id: 'b1',
            level: 'VS Code',
            logo: <TbBrandVscode />
        },
        {
            id: 'b2',
            level: 'Postman',
            logo: <SiPostman />
        },
        {
            id: 'b3',
            level: 'GitHub',
            logo: <FaGithub />
        },

        {
            id: 'b5',
            level: 'Netlify',
            logo: <SiNetlify />
        },
    ]


    return (
        <section id='tools' className='py-40 bg-gradient-to-b from-gray-800 to-gray-700 relative'>
            <div className='mt-8 text-gray-100 text-center'>
                <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Tools</span></h3>
                <p className='text-gray-400 mt-3 text-lg'>Working on....</p>
                <div className='flex items-center justify-center mt-12 gap-10 flex-wrap '>
                    {Tools?.map((Tool) => (
                        <div key={Tool.id} className=' group border-cyan-600 relative min-w-[10rem] max-w-[16rem] 
               bg-gray-900 p-10 rounded-xl box'>
                            <div style={{
                                background: `conic-gradient(rgb(8,145,170) 100%,#ddd 100%)`
                            }} className='w-15 h-14 flex items-center justify-center rounded-full'>
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full
                   flex items-center justify-center group-hover:text-cyan-600'>
                                    {Tool?.logo}
                                </div>
                            </div>
                            <p className='text-xl mt-3 group-hover:text-cyan-600'>{Tool.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyTools