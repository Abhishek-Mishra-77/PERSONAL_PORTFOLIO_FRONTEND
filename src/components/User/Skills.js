import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import * as IOIcons from 'react-icons/io5';
import * as RIIcons from 'react-icons/ri';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";

import axios from 'axios';

const skillDetails = {
  skills: [
    {
      _id: 'e1',
      logo: <FaHtml5 />,
      level: 'HTML',
      count: '86',
    },
    {
      _id: 'e2',
      logo: <FaCss3Alt />,
      level: 'CSS',
      count: '90',
    },
    {
      _id: 'e3',
      logo: <IoLogoJavascript />,
      level: 'JAVASCRIPT',
      count: '75',
    },
    {
      _id: 'e4',
      logo: <FaReact />,
      level: 'REACT',
      count: '77',
    },
    {
      _id: 'e5',
      logo: <TbBrandRedux />,
      level: 'REDUX',
      count: '55',
    },
    {
      _id: 'e6',
      logo: <IoLogoFirebase />,
      level: 'FIREBASE',
      count: '75',
    },
    {
      _id: 'e7',
      logo: <FaNodeJs />,
      level: 'NODEJS',
      count: '75',
    },
    {
      _id: 'e8',
      logo: <SiExpress />,
      level: 'EXPRESS',
      count: '75',
    },
    {
      _id: 'e9',
      logo: <SiMongodb />,
      level: 'MONGODB',
      count: '75',
    },
    {
      _id: 'e10',
      logo: <TbBrandNextjs />,
      level: 'NEXTJS',
      count: '75',
    },
    {
      _id: 'e11',
      logo: <SiTailwindcss />,
      level: 'TAILWIND',
      count: '75',
    },
    {
      _id: 'e12',
      logo: <TbBrandMysql />,
      level: 'MYSQL',
      count: '75',
    },
    {
      _id: 'e13',
      logo: <FaAws />,
      level: 'AWS',
      count: '75',
    },
    {
      _id: 'e14',
      logo: <TbBrandReactNative />,
      level: 'REACTNATIVE',
      count: '75',
    },
    {
      _id: 'e15',
      logo: <FaBootstrap />,
      level: 'BOOTSTRAP',
      count: '75',
    }
  ]
};


const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/skill/getall`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSkills(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkills();
  }, []);

  const getIconComponent = (iconName) => {
    const allIcons = {
      ...FaIcons,
      ...IoIcons,
      ...SiIcons,
      ...TbIcons,
      ...IOIcons,
      ...RIIcons
    };
    return allIcons[iconName] || FaIcons.FaQuestionCircle;
  };

  return (
    <section id='skills' className='py-10 bg-white relative'>
      <div className='mt-8 text-gray-100 text-center py-16 px-4 sm:px-6 lg:px-8'>
        <p className='text-gray-500'>TECHNOLOGIES</p>
        <h3 className='text-4xl font-bold text-gray-800 mt-4'>Professional Skills</h3>
        <div className='flex items-center justify-center mt-12 gap-6 flex-wrap'>
          {skillDetails?.skills?.map((skill) => {
            // const LogoComponent = getIconComponent(skill.logo);
            return (
              <div
                key={skill._id}
                className='bg-gray-200 h-48 w-64 sm:w-72 rounded-xl cursor-pointer shadow-lg transition-transform transform hover:scale-105'
              >
                <div className='group relative min-w-[8rem] max-w-[12rem] p-4 sm:p-6 rounded-xl bg-gray-300 hover:bg-gray-400 transition-colors'>
                  <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 group-hover:text-cyan-600'>
                    {/* <LogoComponent /> */}
                    {skill.logo}
                  </h1>
                  <p className='text-base sm:text-lg mt-3 text-gray-700 group-hover:text-cyan-700'>
                    {skill.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
