import React from 'react';
import { X } from 'lucide-react';
import Gallery from '../gallery';
import { motion } from 'framer-motion'

const Modal = ({ project, closeModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{
        ease: 'easeInOut',
        type: 'spring',
        duration: 0.5
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm '>
      <motion.div layout className='absolute w-5/6 h-4/6 bg-fronttext p-8 rounded-md flex flex-col xl:flex-row gap-4 overflow-hidden overflow-y-auto'>
        <div
          className='cursor-pointer absolute top-4 right-4 text-2xl'
          onClick={closeModal}
        >
          <X className='w-4 h-4 hover:opacity-50 duration-200' />
        </div>

        <div className='w-full xl:w-1/2 min-h-1/2 xl:h-full rounded-md items-center justify-center flex p-2 pb-4'>
          <Gallery images={project.image} />
        </div>

        <div className='flex flex-col w-full xl:w-1/2 h-1/2 xl:h-full text-justify gap-8'>
          <div className='font-extrabold text-2xl'>
            {project.title}
          </div>
          <div className='flex flex-col gap-4 items-center justify-between lg:minh-5/6 p-2'>
            <p>{project.resume}</p>
            <div className='flex flex-row gap-4 bg-white p-1 rounded-md overflow-hidden overflow-x-auto'>
              {project.technologies.map((tech) => (
                <img src={tech} alt={tech} key={tech} className='w-10 h-10' />
              ))}
            </div>
            <a
              href={`https://${project.repo}`}
              rel="noopener noreferrer"
              target="_blank"
              className='bg-slate-500 rounded-sm p-2 px-5 text-white w-fit'
            >Visit</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
