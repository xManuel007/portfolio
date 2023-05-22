import React from 'react'
import HeaderAction from '../headerAction'

const Header = () => {
  return (
    <header className='header__container'>
      <HeaderAction itemClass='header__name' text='xManuel007' goTo='home'/>
      <div className='header__nav'>
        <HeaderAction itemClass='header__aboutme' text='About Me' goTo='home'/>
        <HeaderAction itemClass='header__projects' text='Projects' goTo='projects'/>
        <HeaderAction itemClass='header__projects' text='Road Map' goTo='roadmap'/>
        <HeaderAction itemClass='header__contacme' text='Contact' goTo='contact'/>
      </div>
    </header>
  )
}

export default Header
