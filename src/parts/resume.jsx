import React from 'react';
import TitleBody from '../components/ui/title-part';
import PercentageCircle from '../components/ui/percentage-circle';
import ButtonCV from '../components/button-cv'
import InfoItem from '../components/ui/into-item';
import Card from '../components/ui/card';
import Presentation from '../components/presentation';
import { SkillsComponent } from '../components/skills/skills';

const Resume = () => {
  const today = new Date();
  const birth = new Date('2001-07-28');
  const startJobs = new Date('2021-11-01');
  const Age = today.getFullYear() - birth.getFullYear();
  const Experience = today.getFullYear() - startJobs.getFullYear();
  return (
    <div id='home' className='bg-navy w-screen max-h-max min-h-screen flex flex-col'>
      <TitleBody
        backtext='RESUME'
        firstphrase='ABOUT'
        secondphrase='ME'
      />

      <Presentation />

      <div className='flex flex-col lg:flex-row justify-evenly w-full'>
        <div className='flex flex-col p-4 w-full items-start'>
          <div className='text-white font-bold text-xl mb-4'>PERSONAL INFO</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            <InfoItem label='Name' value='Manuel Rios' />
            <InfoItem label='Age' value={Age} />
            <InfoItem label='Nationality' value='Mexican' />
            <InfoItem label='Freelance' value='Available' />
            <InfoItem label='Address' value='Manzanillo, Colima, Mx' />
            <InfoItem label='Phone' isExternaLink='https://api.whatsapp.com/send?phone=3141249893' value='+52 3141249893' />
            <InfoItem label='Email' value='xmanuelrios@gmail.com' />
            <InfoItem label='Languages' value='Spanish, English' />
            <InfoItem label='Github' isExternaLink='https://github.com/xManuel007' value='github.com/xManuel007' />
            <InfoItem label='Linkedin' isExternaLink='https://www.linkedin.com/in/manuelerm/' value='linkedin.com/in/manuelerm' />
          </div>
          <div className='mt-4'>
            <ButtonCV />
          </div>
        </div>

        <div className='lg:w-1/2 grid grid-cols-2 justify-center lg:justify-between items-center lg:items-start p-4'>
          <Card number={Experience} field={'YEARS OF EXPERIENCE'}></Card>
          <Card number={40} field={'COMPLETED PROJECTS'}></Card>
          <Card number={10} field={'HAPPY CUSTOMERS'}></Card>
        </div>
      </div>

      <div className='flex flex-col p-4 w-full items-center'>
        <div className='text-white font-bold text-xl mb-4'>MY SKILLS</div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-40'>
          <SkillsComponent/>
          {/* <PercentageCircle percent={90} skill={'Git'} />
          <PercentageCircle percent={90} skill={'Github'} />
          <PercentageCircle percent={90} skill={'Bitbucket'} />
          <PercentageCircle percent={70} skill={'JavaScript'} />
          <PercentageCircle percent={60} skill={'TypeScript'} />
          <PercentageCircle percent={80} skill={'React JS'} />
          <PercentageCircle percent={80} skill={'Next JS'} />
          <PercentageCircle percent={80} skill={'Angular'} />
          <PercentageCircle percent={80} skill={'Laravel'} />
          <PercentageCircle percent={80} skill={'AWS'} />
          <PercentageCircle percent={80} skill={'NodeJs'} />
          <PercentageCircle percent={80} skill={'NestJs'} />
          <PercentageCircle percent={80} skill={'Astro'} />
          <PercentageCircle percent={80} skill={'CSS'} />
          <PercentageCircle percent={80} skill={'Tawilwind'} />
          <PercentageCircle percent={60} skill={'Ruby On Rails'} />
          <PercentageCircle percent={60} skill={'Python'} />
          <PercentageCircle percent={80} skill={'DataBases'} /> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
