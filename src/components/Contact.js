import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_jvphkxf', 'template_5dn0ct6', form.current, '3TvETU3bOiknAbwhr')
      .then((result) => {
        console.log(result.text);
        console.log('Success')
      },
        (error) => {
          console.log(error.text);
        }
      )
  }


  const contact_info = [
    {
      id: 'a3',
      logo: 'mail-outline',
      text: 'abhishekmishra992016@gmail.com'
    },
    {
      id: 'a4',
      logo: 'call',
      text: '+91 8577887978'
    },
    {
      id: 'a5',
      logo: 'location',
      text: 'Bhadohi , Uttar Pradesh'
    },
  ]

  const social_media = [
    {
      id: 'a6',
      Symbol: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/abhishek-mishra-342494237/',

    },
    {
      id: 'a7',
      Symbol: "logo-github",
      link: 'https://github.com/Abhishek-Mishra-77'
    },
    {
      id: 'a8',
      Symbol: 'logo-whatsapp',
      link: ''
    },
    {
      id: 'a9',
      Symbol: 'logo-instagram',
      link: ''
    }
  ]


  return (
    <section id="contact" className="py-10 px-3 text-white bg-gradient-to-b from-gray-800 to-gray-700">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
       gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto make-res box1"
        >
          <form onSubmit={sendEmail} ref={form} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name" />
            <input
              type="Email"
              placeholder="Your Email Address"
              name='user_email' />
            <textarea
              placeholder="Your Message"
              rows={11} name='message'></textarea>
            <button
              type='submit'
              className="btn-primary w-fit ml-3"
              value='Send'>Send Message</button>

          </form>
          <div className="flex flex-col  gap-7 ">
            <h3 className="text-4xl font-semibold">
              Contact <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400  text-lg">Fill up the form below to contact</p>
            {contact_info.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-row  
                text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[5rem] min-h-[5rem] text-4xl  flex items-center justify-center text-white box ">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}

            <div className='mt-2 ml-5 text-4xl flex  items-center md:justify-start
                  justify-center gap-7'>
              {social_media?.map(icon => (
                <div key={icon.id} className='text-gray-500  
                    cursor-pointer hover:text-white box2'>
                  <a href={icon.link}> <ion-icon name={icon.Symbol} ></ion-icon></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Contact