import React, { useState } from 'react';
import TitleBody from '../../components/title';
import projectsData from '../../local-api/projects';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register()

const Works = () => {
  const swiperElRef = useRef(null);



  return (
    <div id='projects' className='bg-navy bg-no-repeat bg-cover max-h-max min-h-screen w-screen flex flex-col relative'>
      <TitleBody
        backtext='WORKS'
        firstphrase='MY'
        secondphrase='PORTFOLIO'
      />
    <div className='h-full'>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        pagination="true"
        autoplay="true"
        delay="2500"
        speed="2000"
        loop="true"
      >
        {projectsData.projects.map((project, index) => (
          <swiper-slide key={index}>
            <div className='p-16 flex flex-col lg:flex-row items-center justify-center h-full'>
              <img src={project.image} alt='project' className='lg:w-1/2 w-full h-full'/>
              <div className='flex flex-col justify-between items-center lg:p-32 lg:w-1/2 text-justify lg:text-xl'>
                <div className='text-white lg:h-1/2'>{project.resume}</div>
                <div>
                  <button className='text-white w-fit rounded bg-blue-500 hover:bg-blue-300 hover:text-black px-4 py-2'>More info</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
    </div>
  );
};

export default Works;
