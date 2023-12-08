import React from 'react'
import {
  Github,
  Instagram,
  Linkedin,
  Whatsapp } from '../../assets'

const Footer = () => {
  return (
    <div id='contact' className='h-64 lg:h-32 w-full flex items-center justify-center bg-navy'>
      <div className='flex w-3/4 justify-evenly'>
        <a href='https://github.com/xManuel007' rel="noopener noreferrer" target="_blank">
          <img src={Github} alt='Github' className='hover:animate-pulse duration-500'/>
        </a>
        <a href='https://www.linkedin.com/in/manuelerm/' rel="noopener noreferrer" target="_blank">
          <img src={Linkedin} alt='linkedin' className='hover:animate-pulse duration-500'/>
        </a>
        <a href='https://api.whatsapp.com/send?phone=3141249893' rel="noopener noreferrer" target="_blank">
          <img src={Whatsapp} alt='Whatsapp' className='hover:animate-pulse duration-500'/>
        </a>
        <a href='https://www.instagram.com/justrios_/' rel="noopener noreferrer" target="_blank">
          <img src={Instagram} alt='Instagram' className='hover:animate-pulse duration-500'/>
        </a>
        {/* <a href='https://www.youtube.com/channel/UCsYEvVhtRECJpV_7lUpdnTQ' rel="noopener noreferrer" target="_blank">
          <img src={Youtube} alt='Youtube' className='footer__social_media'/>
        </a> */}
      </div>
    </div>
  )
}

export default Footer
