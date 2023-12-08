import React from 'react';
import TitleBody from '../../components/title';
import projectsData from '../../local-api/projects';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';


const Works = () => {
  return (
    <div id='projects' className='bg-navy bg-no-repeat bg-cover max-h-max min-h-screen w-screen flex flex-col relative'>
      <TitleBody
        backtext='WORKS'
        firstphrase='MY'
        secondphrase='PORTFOLIO'
      />
    <div className='h-full'>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper lg:w-72 lg:h-96 w-64 h-96 flex justify-center items-center mt-16"
      >
        {projectsData.projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className='rounded-xl bg-fronttext w-72 h-96 p-8'
          >
            <a href={project.repo} target='_blank' rel='noopener noreferrer'>
              <div className='font-extrabold text-2xl drop-shadow-md mb-8'>
               {project.title}
              </div>
              <div className='flex justify-center'><img src={project.image} alt='project' className='w-auto h-48 drop-shadow-xl'/></div>
              {/* <div className='bg-backtext hover:bg-blue-400 w-fit px-4 py-2 mt-4 rounded-md text-white hover:text-black font-bold duration-300'>More info</div> */}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Works;
