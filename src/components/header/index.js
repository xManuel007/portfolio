import React, { useState } from 'react';
import HeaderAction from '../headerAction';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className='header__container'>
      <HeaderAction itemClass='header__name' text='xManuel007' goTo='home' />
      <div className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <HeaderAction itemClass='header__nav__action' text='About Me' goTo='home' />
        <HeaderAction itemClass='header__nav__action' text='Projects' goTo='projects' />
        <HeaderAction itemClass='header__nav__action' text='Road Map' goTo='roadmap' />
        <HeaderAction itemClass='header__nav__action' text='Contact' goTo='contact' />
      </div>
      <div className='header__menu-icon' onClick={toggleMenu}>
        <div className={`header__menu-icon__bar ${isMenuOpen ? 'header__menu-icon__bar--open' : ''}`}></div>
        <div className={`header__menu-icon__bar ${isMenuOpen ? 'header__menu-icon__bar--open' : ''}`}></div>
        <div className={`header__menu-icon__bar ${isMenuOpen ? 'header__menu-icon__bar--open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
