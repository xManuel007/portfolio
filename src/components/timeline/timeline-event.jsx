import React from 'react';
import { MySelft } from '../../assets';
import { Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import StarButton from '../ui/star-button';
import { formatDuration } from '../../utils/time';

const TimelineEvent = ({
  verb,
  experience,
  place,
  additional,
  settings,
  time = (60 * 1000),
  stars = "3.5k",
  languages = [],
  bgColorCompany = true,
  imageCompany
}) => {

  const GetColor = (language) => useLanguage(language);

  return (
    <div className="flex flex-col p-5 duration-500 bg-[#0d1117] border-[#30363d] border-[0.2px] rounded-md mb-4">
      <div className='flex flex-row py-2'>
        <img
          className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
          src={MySelft}
          alt="Jese Leos"
        />
        <div className="text-xs xl:text-base font-normal flex flex-col">
          <div className='flex flex-row gap-2'>
            <div className='flex flex-col gap-1 whitespace-nowrap'>
              <span className="font-medium text-white ">
                Manuel Rios
              </span>
              <div className='font-light text-gray-400'>
                {formatDuration(time) + " ago"}
              </div>
            </div>
            <span className="font-light text-gray-300">
              {verb}{' '}{experience}
            </span>{' '}
          </div>

        </div>
      </div>

      <div className="text-gray-400 bg-[#161b22] p-6">
        <div className='flex items-center flex-row justify-between gap-2'>
          <div className='flex flex-row items-center gap-2'>
            <div className={`h-6 w-6 ${bgColorCompany ? 'bg-white' : 'bg-black'} rounded-full`}>
              <img src={imageCompany} alt='Company' className='h-full w-full' />
            </div>
            <span className="font-medium text-white text-xl">
              {place}
            </span>
          </div>
          <StarButton />
        </div>
        <div className="text-lg text-white font-normal">
          {additional}
        </div>
        <div className='flex flex-row gap-8 items-center pt-4'>
          <div className='flex flex-row gap-2 items-center flex-wrap'>
            {languages.map((language, index) => (
              <div className='flex flex-row gap-1 items-center' key={index}>
                <div className={`h-3 w-3 ${GetColor(language)} rounded-full`} />
                <div>{language}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-row items-center gap-1'>
            <Star size={17} /> <span className='font-medium'>{stars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
