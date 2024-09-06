import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-sm p-4 text-center text-white'>
      {/* Contact Section */}
      {/* Contact Section */}
      <div className='mt-16'>
        <h4 className='text-2xl font-semibold mb-4'>Let's Connect</h4>
        <p className='text-gray-400 mb-6'>
          If you're looking for a skilled Software Engineer with a track record of delivering exceptional results, feel free to reach out. I’m always excited to explore new collaborations and opportunities.
        </p>
        <div className='flex justify-center space-x-6'>
          <a href="mailto:abhishekmishra992016@gmail.com" className='text-cyan-600 hover:text-cyan-400'>
            <ion-icon name="mail-outline" class="text-3xl"></ion-icon> Email
          </a>
          <a href="https://www.linkedin.com/in/abhishekmishra77/" target="_blank" rel="noopener noreferrer" className='text-cyan-600 hover:text-cyan-400'>
            <ion-icon name="logo-linkedin" class="text-3xl"></ion-icon> LinkedIn
          </a>
          <a href="https://github.com/Abhishek-Mishra-77" target="_blank" rel="noopener noreferrer" className='text-cyan-600 hover:text-cyan-400'>
            <ion-icon name="logo-github" class="text-3xl"></ion-icon> GitHub
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer

