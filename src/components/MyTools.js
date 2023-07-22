import React from 'react'

const MyTools = () => {
    const Tools = [
        {
            id: 'b1',
            level: 'VS Code',
            link: 'M17 16.47V7.39l-6 4.54M2.22 9.19a.858.858 0 0 1-.02-1.15l1.2-1.11c.2-.18.69-.26 1.05 0l3.42 2.61l7.93-7.25c.32-.32.87-.45 1.5-.12l4 1.91c.36.21.7.54.7 1.15v13.5c0 .4-.29.83-.6 1l-4.4 2.1c-.32.13-.92.01-1.13-.2l-8.02-7.3l-3.4 2.6c-.38.26-.85.19-1.05 0l-1.2-1.1c-.32-.33-.28-.87.05-1.2l3-2.7'
        },
        {
            id: 'b2',
            level: 'Postman',
            link: 'M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125l-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645l.512.512zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083a.077.077 0 0 1 .022-.046h.002l.946-.946l1.222 1.222l-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839l4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522zm-.1-1.544a.143.143 0 0 0-.053.157a.416.416 0 0 1-.053.45a.14.14 0 0 0 .023.197a.141.141 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.691.691 0 0 0 .087-.751a.138.138 0 0 0-.194-.033z'
        },
        {
            id: 'b3',
            level: 'Githup',
            logo: 'logo-github'
        },
        {
            id: 'b4',
            level: 'Githup',
            logo: 'git-merge-outline'
        },


    ]

    // <a href={icon.link}> <ion-icon name={icon.Symbol} ></ion-icon></a>


    return (
        <section id='tools' className='py-40 bg-gray-800 relative'>
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
                                    {Tool.logo ? <ion-icon name={Tool.logo}></ion-icon> :
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="55"
                                            height="55"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d={Tool.link} />
                                        </svg>}
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