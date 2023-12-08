import React, { useState } from 'react';
import TitleBody from '../../components/title';
import projectsData from '../../local-api/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='projects' className='bg-navy bg-no-repeat bg-cover max-h-max min-h-screen w-screen flex flex-col relative'>
      <TitleBody backtext='WORKS' firstphrase='MY' secondphrase='PORTFOLIO' />
      <div className='h-full'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className='mySwiper lg:w-72 lg:h-96 w-64 h-96 flex justify-center items-center mt-16'
        >
          {projectsData.projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className='rounded-xl bg-fronttext w-72 h-96 p-8'
              onClick={() => openModal(project)}
            >
              <div className='font-extrabold text-2xl drop-shadow-md mb-8'>
                {project.title}
              </div>
              <div className='flex justify-center'>
                <img
                  src={project.image}
                  alt='project'
                  className='w-auto h-48 drop-shadow-xl'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className='fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 backdrop-blur-sm'>
          <div className='absolute w-80 h-96 bg-white p-8 rounded-lg'>
            <div
              className='cursor-pointer absolute top-4 right-4 text-xl'
              onClick={closeModal}
            >
              &times;
            </div>
            <div className='font-extrabold text-2xl mb-4'>
              {selectedProject.title}
            </div>
            <p>{selectedProject.description}</p>
            {/* Add more information as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
