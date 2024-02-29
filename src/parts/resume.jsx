import React from 'react';
import TitleBody from '../components/ui/title-part';
import PercentageCircle from '../components/ui/percentage-circle';
import { motion } from "framer-motion";
import ButtonCV from '../components/button-cv';

const InfoItem = ({ label, value, className }) => (
  <motion.div
    initial={{ opacity: 0, x: '-20%' }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1,
      ease: 'easeInOut',
    }}
    className=' flex mb-2 gap-2'>
    <span className='text-lg text-slate-400'>{label}:</span>
    <span className={`${className} text-lg text-slate-200`}>{value}</span>
  </motion.div>
);

const Card = ({ number, field, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-20%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className='w-36 h-36 lg:w-48 border-2 border-fronttext border-dashed rounded-lg p-4 relative m-5'>
      <div className='absolute top-2 left-4'>
        <span className='text-4xl text-fronttext font-bold'>{number}</span>
        <span className='text-xl text-fronttext'>+</span>
      </div>
      <div className='grid grid-cols-2 gap-4 text-justify'>
        <span className='text-4xl text-fronttext font-bold'>__</span>
      </div>
      <div>
        <span className='text-sm text-white text-start flex'>{field}</span>
      </div>
    </motion.div>
  );
};


const Resume = () => {
  return (
    <div id='home' className='bg-navy w-screen max-h-max min-h-screen flex flex-col'>
      <TitleBody
        backtext='RESUME'
        firstphrase='ABOUT'
        secondphrase='ME'
      />

      <div className='flex flex-col lg:flex-row justify-evenly w-full'>
        <div className='flex flex-col p-4 w-full items-start'>
          <div className='text-white font-bold text-xl mb-4'>PERSONAL INFO</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            <InfoItem label='First Name' value='Manuel' />
            <InfoItem label='Last Name' value='Rios' />
            <InfoItem label='Age' value='22 Years' />
            <InfoItem label='Nationality' value='Mexican' />
            <InfoItem label='Freelance' value='Available' />
            <InfoItem label='Address' value='Colima, Mx' />
            <InfoItem className={'hover:text-slate-500 duration-200'} label='Phone' value={<a href='https://api.whatsapp.com/send?phone=3141249893'>+52 3141249893</a>} />
            <InfoItem label='Email' value='maanuu.009@gmail.com' />
            <InfoItem label='Languages' value='Spanish, English' />
            <InfoItem className={'hover:text-slate-500 duration-200'} label='Github' value={<a href='https://github.com/xManuel007'>xManuel007</a>} />
          </div>
          <div className='mt-4'>
            <ButtonCV />
          </div>
        </div>

        <div className='lg:w-1/2 grid grid-cols-2 justify-center lg:justify-between items-center lg:items-start p-4'>
          <Card number={'2'} field={'YEARS OF EXPERIENCE'}></Card>
          <Card number={'5'} field={'COMPLETED PROJECTS'}></Card>
          <Card number={'1'} field={'HAPPY CUSTOMERS'}></Card>
        </div>
      </div>

      <div className='flex flex-col p-4 w-full items-center'>
        <div className='text-white font-bold text-xl mb-4'>MY SKILLS</div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-40'>
          <PercentageCircle percent={90} skill={'Git'} />
          <PercentageCircle percent={70} skill={'JavaScript'} />
          <PercentageCircle percent={40} skill={'TypeScript'} />
          <PercentageCircle percent={80} skill={'React JS'} />
          <PercentageCircle percent={80} skill={'CSS'} />
          <PercentageCircle percent={60} skill={'Ruby On Rails'} />
          <PercentageCircle percent={60} skill={'Python'} />
          <PercentageCircle percent={80} skill={'DataBases'} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
