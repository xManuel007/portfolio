import React from 'react'
import {
  Github,
  Instagram,
  Linkedin,
  Whatsapp } from '../../assets'

const Footer = () => {
  return (
    <div id='contact' className='footer'>
      <div className='footer__container'>
        <a href='https://github.com/xManuel007' rel="noopener noreferrer" target="_blank">
          <img src={Github} alt='Github' className='footer__social_media'/>
        </a>
        <a href='https://www.linkedin.com/in/manuelerm/' rel="noopener noreferrer" target="_blank">
          <img src={Linkedin} alt='linkedin' className='footer__social_media'/>
        </a>
        <a href='https://api.whatsapp.com/send?phone=3141249893' rel="noopener noreferrer" target="_blank">
          <img src={Whatsapp} alt='Whatsapp' className='footer__social_media'/>
        </a>
        <a href='https://www.instagram.com/justrios_/' rel="noopener noreferrer" target="_blank">
          <img src={Instagram} alt='Instagram' className='footer__social_media'/>
        </a>
        {/* <a href='https://www.youtube.com/channel/UCsYEvVhtRECJpV_7lUpdnTQ' rel="noopener noreferrer" target="_blank">
          <img src={Youtube} alt='Youtube' className='footer__social_media'/>
        </a> */}
      </div>
    </div>
  )
}

export default Footer
