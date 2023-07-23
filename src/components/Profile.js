import React from 'react';
import './Profile.css';


const Profile = () => {

  const social_media = [
    {
      id: 'd1',
      Symbol: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/abhishek-mishra-342494237/'
    },
    {
      id: 'd2',
      Symbol: "logo-github",
      link: 'https://github.com/Abhishek-Mishra-77'
    },
    {
      id: 'd3',
      Symbol: 'logo-whatsapp',
      link: ''
    },
    {
      id: 'd4',
      Symbol: 'logo-instagram',
      link: ''
    }
  ]


  return (
    <section
      id='home'
      className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
      <div className='profile-picture'>
        <div className='flex-1 flex items-center justify-center h-full profile-picture-background'>
        </div>
      </div>
      <div className='flex-1 ml-40 paragraph'>
        <div className='md:text-left text-center '>
          <h1 className='md:text-5xl text-2xl md:leading-noraml leading-10 
        text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl-5xl'>
              Hello!
              <br></br>
            </span>
            My Name is <span>Abhishek Mishra</span>
          </h1>

          <h2 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4
        font-bold text-gray-600'>
            FrontEnd Developer
          </h2>
          <button className='btn-primary mt-8'>Contact Me <ion-icon name="play-outline"></ion-icon></button>
          <div className='mt-8 text-3xl flex  items-center md:justify-start
        justify-center gap-5'>
            {social_media?.map(icon => (
              <div key={icon.id} className='text-gray-500 hover:text-white 
            cursor-pointer hover:text-white '>
                <a href={icon.link}> <ion-icon name={icon.Symbol} ></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;