import React from 'react'




const Skill = () => {

  const skills = [
    {
      id: 'e1',
      logo: 'logo-html5',
      level: 'HTML',
      count: '86'
    },
    {
      id: 'e2',
      logo: 'logo-css3',
      level: 'CSS',
      count: '90'
    },
    {
      id: 'e3',
      logo: 'logo-nodejs',
      level: 'Javascript',
      count: '75'
    },
    {
      id: 'e4',
      logo: 'logo-react',
      level: 'React',
      count: '77'
    },
    {
      id: 'e5',
      logo: 'logo-electron',
      level: 'Redux',
      count: '55'
    },
    {
      id: 'e6',
      logo: 'logo-firebase',
      level: 'Firebase',
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
                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full
               flex items-center justify-center group-hover:text-cyan-600'>
                  <ion-icon name={skill.logo} className='logo'></ion-icon>
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