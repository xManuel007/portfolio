import React from 'react';
import TitleBody from '../components/ui/title-part';
import PercentageCircle from '../components/ui/percentage-circle';
import ButtonCV from '../components/button-cv'
import InfoItem from '../components/ui/into-item';
import Card from '../components/ui/card';
import Presentation from '../components/presentation';
import { SkillsComponent } from '../components/skills/skills';
import { TechAngular, TechAWS, TechAWSAmplify, TechAWSRoute53, TechAWSTextract, TechBitBucket, TechCss, TechEmailJS, TechFirebase, TechGit, TechI18next, TechJava, TechJavaSpringBoot, TechJS, TechLaravel, TechMongoDB, TechNextJS, TechNodeJS, TechPostgres, TechPython, TechReacJS, TechRoR, TechSass, TechTailwind, TechTypescript } from '../assets/technologies';

const skills = {
  'TechEmailJS': TechEmailJS,
  'TechI18next': TechI18next,
  'TechCss': TechCss,
  'TechFirebase': TechFirebase,
  'TechGit': TechGit,
  'TechJS': TechJS,
  'TechMongoDB': TechMongoDB,
  'TechNextJS': TechNextJS,
  'TechNodeJS': TechNodeJS,
  'TechPostgres': TechPostgres,
  'TechPython': TechPython,
  'TechReacJS': TechReacJS,
  'TechRoR': TechRoR,
  'TechSass': TechSass,
  'TechTailwind': TechTailwind,
  'TechTypescript': TechTypescript,
  'TechLaravel': TechLaravel,
  'TechBitBucket': TechBitBucket,
  'TechAngular': TechAngular,
  'TechAWS': TechAWS,
  'TechAWSAmplify': TechAWSAmplify,
  'TechAWSRoute53': TechAWSRoute53,
  'TechAWSTextract': TechAWSTextract,
  'TechJava': TechJava,
  'TechSpringBoot': TechJavaSpringBoot
}

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

      <div className="flex flex-col items-center w-full p-8">
        <h2 className="text-white font-extrabold text-3xl mb-8 tracking-wide">
          MY SKILLS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
          {Object.entries(skills).map(([key, value]) => (
            <div
              key={key}
              className="group flex items-center justify-center bg-[#0d1117] border-[#30363d] border-[0.2px] rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_#161b22]"
            >
              <img
                src={value}
                alt={key}
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Tooltip */}
              <span className="absolute bottom-[-2.5rem] px-2 py-1 text-sm text-white bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {key.replace('Tech', '')}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Resume;
