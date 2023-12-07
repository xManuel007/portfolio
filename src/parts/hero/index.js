import React from 'react'
import { LogoMR } from '../../assets'

const HeroComponent = () => {
  return (
    <div className='bg-waves-background bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center'>
      <div className='backdrop-blur-md shadow-md w-64 h-64 lg:w-96 lg:h-96 rounded-3xl flex items-center justify-center border-slate-400 border-2 mb-4'>
        <img src={LogoMR} alt='logo' className='w-64 lg:w-96 h-auto'/>
      </div>
      <div className='flex flex-col'>
        <div className='font-bold text-5xl lg:text-9xl text-white shadow-md'>Manuel Rios</div>
        <div className='font-medium text-3xl lg:text-5xl text-white shadow-md'>Web developer</div>
      </div>
    </div>
  )
}

export default HeroComponent
