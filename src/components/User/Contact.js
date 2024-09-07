import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_jvphkxf', 'template_5dn0ct6', form.current, '3TvETU3bOiknAbwhr')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message.');
        }
      )
  }

  const contact_Details = {
    contact_info: [
      {
        _id: 'a3',
        logo: <FaEnvelope />,
        text: 'abhishekmishra992016@gmail.com'
      },
      {
        _id: 'a4',
        logo: <FaPhone />,
        text: '+91 8577887978'
      },
      {
        _id: 'a5',
        logo: <FaLocationArrow />,
        text: 'Bhadohi, Uttar Pradesh'
      },
    ],
    Info: {
      title: "CONTACT ME",
      description: "Get In Touch"
    }
  }

  const social_media = [
    {
      _id: 'a6',
      Symbol: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/abhishek-mishra-342494237/',
    },
    {
      _id: 'a7',
      Symbol: <FaGithub />,
      link: 'https://github.com/Abhishek-Mishra-77'
    },
    {
      _id: 'a8',
      Symbol: <FaWhatsapp />,
      link: 'https://wa.me/919999999999' // Replace with your WhatsApp link
    },
    {
      _id: 'a9',
      Symbol: <FaInstagram />,
      link: 'https://www.instagram.com/yourprofile' // Replace with your Instagram link
    }
  ]

  return (
    <section id='contact' className='py-10 bg-white'>
      <div className='text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
        <p className='text-gray-600 text-lg uppercase tracking-wider'>{contact_Details?.Info?.title}</p>
        <h3 className='text-4xl font-bold text-gray-800 mt-4'>{contact_Details?.Info?.description}</h3>

        <div className='mt-12 mx-auto max-w-6xl bg-gray-200 p-8 sm:p-12 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row justify-around items-start'>
            <div className='w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0'>
              <h4 className='text-2xl font-semibold text-gray-500 mb-4'>Contact Information</h4>
              <div className='space-y-4'>
                {contact_Details?.contact_info.map(info => (
                  <div key={info._id} className='flex items-center space-x-3 overflow-x-auto cursor-pointer'>
                    <div className='text-2xl text-gray-500'>{info.logo}</div>
                    <p className='text-lg text-gray-500 break-all'>{info.text}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className='w-full md:w-1/2'>
              <h4 className='text-2xl font-semibold text-gray-500 mb-4'>Send a Message</h4>
              <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Your Name'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='email'
                  name='user_email'
                  placeholder='Your Email'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='tel'
                  name='user_phone'
                  placeholder='Your Phone Number'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  pattern='[0-9]{10}'
                  maxLength='10'
                />

                <textarea
                  name='message'
                  placeholder='Your Message'
                  required
                  rows='4'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='btn-primary flex w-full justify-center items-center mt-8 px-6 py-2 sm:px-8 sm:py-3 gap-4 bg-black text-white shadow-lg hover:bg-white hover:text-black border border-black transition-colors duration-300'>
                  <h1 className='text-sm sm:text-xl font-semibold'>Send Message</h1>
                </button>
              </form>
              {status && <p className='mt-4 text-center text-lg'>{status}</p>}
            </div>
          </div>

          <div className='flex justify-center mt-12 space-x-6'>
            {social_media.map(social => (
              <a key={social._id} href={social.link} target="_blank" rel="noopener noreferrer" className='text-2xl text-gray-600 hover:text-blue-600'>
                {social.Symbol}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
