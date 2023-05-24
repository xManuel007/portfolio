import React from 'react';
import { laptopMockup } from '../../assets';

const WhatDeviceIsFor = ({deviceType, image}) => {
  if (deviceType === 'phone') {
    return (
      <div className='mockup__phone__container'>
        <img src={image} alt={image} className='mockup__phone'/>
      </div>
    )
  } else {
    return (
      <div className='mockup__laptop'>
        <img src={laptopMockup} alt='laptop' className='mockup__laptop__background' />
        <div className='mockup__laptop__content'>
          <img src={image} alt={image} className='mockup__laptop__image' />
        </div>
      </div>
    )
  }
}


const MockUp = ({image, deviceType}) => {
  return (
    <>
      <WhatDeviceIsFor deviceType={deviceType} image={image}/>
    </>
  );
};

export default MockUp;
