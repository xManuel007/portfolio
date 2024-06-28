import React, { useState } from 'react';
import HeaderAction from './header-action';
import { LogoMR } from '../../assets/logo';
import { Menu } from 'lucide-react'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={`backdrop-blur-sm lg:p-4 shadow-md fixed top-0 z-50 w-screen
      duration-500 lg:flex 
      ${menuVisible ? 'h-screen backdrop-brightness-[0.2]' : 'h-16'}`}>
      <div className={`hidden lg:flex items-center justify-between w-full `}>
        <div className='w-1/2 flex flex-row items-center'>
          <img src={LogoMR} alt="Logo Riosoft" className='h-16'/>
          <HeaderAction itemClass='text-white text-2xl lg:text-3xl font-bold items-center flex' text='Manuel Rios' goTo='hero' />
        </div>
        <div className='text-white text-xl justify-evenly gap-2 flex w-1/2'>
          <HeaderAction itemClass='group text-white transition-all duration-300 ease-in-out' spanClass='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' text='Resume' goTo='home' />
          <HeaderAction itemClass='group text-white transition-all duration-300 ease-in-out' spanClass='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' text='Works' goTo='projects' />
          <HeaderAction itemClass='group text-white transition-all duration-300 ease-in-out' spanClass='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' text='Roadmap' goTo='roadmap' />
          <HeaderAction itemClass='group text-white transition-all duration-300 ease-in-out' spanClass='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' text='Contact' goTo='contact' />
        </div>
      </div>

      <div className='md:hidden w-full px-2'>
        <div className='text-white text-2xl flex items-center justify-between w-full'>
          <Menu role='button'  onClick={() => setMenuVisible(!menuVisible)}/>
          <HeaderAction itemClass='text-white text-2xl lg:text-3xl font-bold items-center flex' text={<img src={LogoMR} alt="Logo Riosoft" className='h-16'/>} goTo='hero' />
        </div>
        <div
          className={`fixed md:hidden z-50 w-full
            animate-fade animate-duration-700 h-screen flex items-center justify-center
            ${menuVisible ? '' : 'hidden'}`}>
          <div
            className={`md:block ${menuVisible ? 'translate-x-0' : ''} delay-500 duration-500 flex items-center justify-between h-screen w-screen`}
          >
            <ul className='flex flex-col items-start text-3xl text-white h-screen w-screen flex justify-center items-center gap-12'>
                <HeaderAction itemClass='' text='Resume' goTo='home' />
                <HeaderAction itemClass='' text='Works' goTo='projects' />
                <HeaderAction itemClass='' text='Roadmap' goTo='roadmap' />
                <HeaderAction itemClass='' text='Contact' goTo='contact' />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
