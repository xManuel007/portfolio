import React from 'react';
import { laptopMockup } from '../../assets/mockups';

const Laptop = ({ image }) => {
  return (
    <div className='mockup__laptop'>
      <img src={laptopMockup} alt='laptop' className='mockup__laptop__background' />
      <div className='mockup__laptop__content'>
        <img src={image} alt={image} className='mockup__laptop__image' />
      </div>
    </div>
  );
};

export default Laptop;
