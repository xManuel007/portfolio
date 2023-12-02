import React from 'react'
import { MySelf } from '../../assets'
import CVManu from '../../assets/personal/CVManuelRios.pdf'
import TypeWriterEffect from 'react-typewriter-effect';

const AboutMe = () => {
  return (
    <div id='home' className='h-screen flex flex-col lg:flex-row items-center justify-evenly'>
      <div className='flex flex-col justify-around w-full p-5 h-80 lg:w-1/2'>
        <div>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '4em',
            }}
            startDelay={100}
            cursorColor="#3F3D56"
            multiText={[ "Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo",
              "Hej världen", "Kamusta mundo", "Merhaba dünya", "Hallo wereld", "Привет, мир", "你好，世界",
              "여보세요 세상", "مرحبا بالعالم", "हैलो वर्ल्ड", "Γειά σου κόσμε", "Hei maailma", "שלום עולם",
              "Halló heimur", "Sveika, pasaule", "Hello there...", "General Kenobi", "Hello World" ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={30}
        />
        <p className='text-justify text2xl'>
          I'm a Internet Technologies Engineer, passionate in Web development, Data Analist, and Mobile Dev.
          I'm excited to bring my skills and creativity to a team that values innovation and collaboration
        </p>
        </div>
        <a href={CVManu} rel="noopener noreferrer" target="_blank">
        <button
          className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          My CV
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
          ></span>
          <span
            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >Open it!</span>
        </button>

        </a>
      </div>
      <div><img src={MySelf} alt='myself' className='h-56 rounded-md shadow-sm hover:animate-wiggle lg:h-96 w-auto'/></div>
    </div>
  )
}

export default AboutMe
