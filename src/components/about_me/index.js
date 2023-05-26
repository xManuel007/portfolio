import React from 'react'
import { MySelf } from '../../assets'
import CVManu from '../../assets/personal/CVManuelRios.pdf'
import TypeWriterEffect from 'react-typewriter-effect';

const AboutMe = () => {
  return (
    <div id='home' className='aboutme__container'>
      <div className='aboutme__resume'>
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
        <p className='aboutme__info'>
          I'm a Internet Technologies Engineer, passionate in Web development, Data Analist, and Mobile Dev.
          I'm excited to bring my skills and creativity to a team that values innovation and collaboration
        </p>
        </div>
        <a href={CVManu} rel="noopener noreferrer" target="_blank">
          <div class="button-borders">
            <button class="primary-button"> My CV
            </button>
          </div>
        </a>
      </div>
      <div><img src={MySelf} alt='myself' className='aboutme__image'/></div>
    </div>
  )
}

export default AboutMe
