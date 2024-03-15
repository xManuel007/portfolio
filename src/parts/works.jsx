import React, { useEffect, useState } from 'react';
import TitleBody from '../components/ui/title-part';
import projectsData from '../local-api/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import { Plus } from 'lucide-react'
import Modal from '../components/ui/modal';



const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) { // 27 is the keyCode for "Esc" key
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      id='projects' className='bg-navy bg-no-repeat bg-cover max-h-max min-h-screen w-screen flex flex-col'>
      <TitleBody backtext='WORKS' firstphrase='MY' secondphrase='PORTFOLIO' />
      <div className='h-full w-full'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className='mySwiper lg:w-96 lg:h-96 w-52 h-80 flex justify-center items-center mt-16'
        >
          {projectsData.projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className='rounded-md bg-fronttext h-full w-full p-8 flex'
              onClick={() => openModal(project)}
            >
              <div
                className='cursor-pointer absolute bottom-2 right-4 text-2xl aspect-square p-1 hover:opacity-60 duration-200'
              >
                <Plus onClick={() => openModal(project)} className='w-6 h-6' />
              </div>
              <div className='font-extrabold text-xl lg:text-2xl drop-shadow-md h-1/6'>
                {project.title}
              </div>
              <div className='flex justify-center items-center h-5/6 w-full'>
                <div className='flex justify-center items-center h-full w-full'>
                  <img
                    src={project.image[0]}
                    alt='project'
                    className='w-auto h-3/4 drop-shadow-xl'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (<Modal project={selectedProject} closeModal={closeModal} />)}
    </div>
  );
};

export default Works;
