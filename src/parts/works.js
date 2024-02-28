import React, { useEffect, useState } from 'react';
import TitleBody from '../components/ui/title-part';
import projectsData from '../local-api/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import { Plus, X } from 'lucide-react'


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
            delay: 20500,
            disableOnInteraction: false,
          }}
          className='mySwiper lg:w-72 lg:h-96 w-52 h-80 flex justify-center items-center mt-16'
        >
          {projectsData.projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className='rounded-md bg-fronttext h-full w-full p-8 flex'
            >
              <div
                className='cursor-pointer absolute bottom-2 right-4 text-2xl bg-slate-200 aspect-square p-1 rounded-sm hover:bg-slate-400 duration-200'
              >
                <Plus onClick={() => openModal(project)} className='w-5 h-5' />
              </div>
              <div className='font-extrabold text-xl lg:text-2xl drop-shadow-md h-1/6'>
                {project.title}
              </div>
              <div className='flex justify-center items-center h-5/6 w-full'>
                <div className='flex justify-center items-center h-full w-full'>
                  <img
                    src={project.image}
                    alt='project'
                    className='w-auto h-3/4 drop-shadow-xl'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm'>
          <div className='absolute w-5/6 h-4/6 bg-white p-8 rounded-md flex flex-col lg:flex-row gap-4'>
            <div
              className='cursor-pointer absolute top-4 right-4 text-2xl'
              onClick={closeModal}
            >
              <X className='w-4 h-4 hover:opacity-50 duration-200'/>
            </div>

            <div className='w-full lg:w-1/2 h-1/2 lg:h-full border border-slate-400 rounded-md items-center justify-center flex p-4'>
              <img src={selectedProject.image} alt='project' className='h-full w-auto' />
            </div>

            <div className='flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full text-justify gap-8'>
              <div className='font-extrabold text-2xl'>
                {selectedProject.title}
              </div>
              <div className='flex flex-col gap-4 items-center justify-between lg:min-h-5/6 overflow-hidden overflow-y-auto'>
                <p>{selectedProject.resume}</p>
                <a
                  href={`https://${selectedProject.repo}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='bg-slate-500 rounded-sm p-2 px-5 text-white w-fit'
                >Visit</a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
