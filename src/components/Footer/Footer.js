import React from 'react'
import { social_media } from '../Common/Common'

const Footer = () => {

  return (
    <div className='bg-gray-200 text-sm p-2 text-center text-white '>
      <div className='mt-16'>
        <h4 className='text-2xl font-semibold mb-4'>Let's Connect</h4>
        <p className='text-gray-400 mb-6'>
          If you're looking for a skilled Software Engineer with a track record of delivering exceptional results, feel free to reach out. I’m always excited to explore new collaborations and opportunities.
        </p>
        <div className='flex justify-center space-x-6'>
          {social_media.map((item, index) => (
            <a key={index} target='_blank' rel='noopener noreferrer' href={item.link} className='text-cyan-600 hover:text-cyan-400'>
              <ion-icon name={item.Symbol} class="text-3xl"></ion-icon> {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer

