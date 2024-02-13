import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
const Skill = () => {

  const skills = [
    {
      id: 'e1',
      logo: <FaHtml5 />,
      level: 'HTML',
      count: '86'
    },
    {
      id: 'e2',
      logo: <FaCss3Alt />,
      level: 'CSS',
      count: '90'
    },
    {
      id: 'e3',
      logo: <IoLogoJavascript />,
      level: 'Javascript',
      count: '75'
    },
    {
      id: 'e4',
      logo: <FaReact />,
      level: 'React',
      count: '77'
    },
    {
      id: 'e5',
      logo: <TbBrandRedux />,
      level: 'Redux',
      count: '55'
    },

    {
      id: 'e6',
      logo: <FaJava />,
      level: <h2>Java</h2>,
      count: '75'
    }, {
      id: 'e7',
      logo: <IoLogoFirebase />,
      level: 'Firebase',
      count: '75'
    },
    , {
      id: 'e8',
      logo: <TbBrandReactNative />,
      level: 'React-Native',
      count: '75'
    },
    , {
      id: 'e9',
      logo: <FaNodeJs />,
      level: 'NodeJs',
      count: '75'
    },
    , {
      id: 'e10',
      logo: <SiExpress />,
      level: 'Express',
      count: '75'
    },
    , {
      id: 'e11',
      logo: <SiMysql />,
      level: 'Mysql',
      count: '75'
    },

    , {
      id: 'e12',
      logo: <SiMui />,
      level: 'MUI',
      count: '75'
    },
  ]


  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Skills</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>My Knowledge</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {skills?.map((skill) => (
            <div key={skill.id} className='group  relative min-w-[10rem] max-w-[16rem] 
           bg-gray-900 p-10 rounded-xl hover:bg-cyan-500 box'>
              <div style={{
                background: `conic-gradient(rgb(8,145,170) 100%,#ddd 100%)`
              }} className='w-15 h-14 flex items-center justify-center rounded-full'>
                <div className='text-7xl w-28 h-28 bg-gray-900 rounded-full
               flex items-center justify-center group-hover:text-cyan-600'>
                  {skill.id !== 'e6' ? skill.logo :
                    <img
                      style={{ height: '80px' }}
                      src='https://cdn-icons-png.flaticon.com/128/226/226777.png'
                      className='logo'
                      alt='JavaImage' />
                  }
                </div>
              </div>
              <p className='text-xl mt-3 group-hover:text-cyan-600'>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill