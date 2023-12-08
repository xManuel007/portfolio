import React, { useState } from 'react';
import HeaderAction from '../headerAction';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={`backdrop-blur-sm p-4 shadow-md fixed top-0 z-50 w-screen
      duration-500 lg:flex
      ${menuVisible ? 'h-48' : 'h-16'}`}>
      <div className={`hidden lg:flex items-center justify-between w-full `}>
        <div className='w-1/2'>
          <HeaderAction itemClass='text-white text-2xl lg:text-3xl font-bold items-center flex' text='Manuel Rios' goTo='home' />
        </div>
        <div className='text-white text-xl justify-evenly flex w-1/2'>
          <HeaderAction itemClass='hover:underline' text='Resume' goTo='home' />
          <HeaderAction itemClass='hover:underline' text='Works' goTo='projects' />
          <HeaderAction itemClass='hover:underline' text='Roadmap' goTo='roadmap' />
          <HeaderAction itemClass='hover:underline' text='Contact' goTo='contact' />
        </div>
      </div>

      <div className='md:hidden w-fit'>
        <div role='button' className='rotate-90 text-white text-2xl' onClick={() => setMenuVisible(!menuVisible)}>
          III
        </div>
        <div
          className={`fixed md:hidden z-50 w-full
            animate-fade animate-duration-700
            ${menuVisible ? '' : 'hidden'}`}>
          <div
            className={`md:block ${menuVisible ? 'translate-x-0' : ''} delay-500 duration-500 flex items-center justify-between`}
          >
            <ul className='flex flex-row items-start text-xl text-white  w-3/4 h-32 justify-between'>
              <div className='flex flex-col h-full justify-evenly'>
                <HeaderAction itemClass='' text='Resume' goTo='home' />
                <HeaderAction itemClass='' text='Works' goTo='projects' />
              </div>
              <div className='flex flex-col h-full justify-evenly'>
                <HeaderAction itemClass='' text='Roadmap' goTo='roadmap' />
                <HeaderAction itemClass='' text='Contact' goTo='contact' />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
