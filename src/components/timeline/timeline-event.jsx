import React from 'react';
import { LogoMR } from '../../assets/logo';

const TimelineEvent = ({ verb, experience, place, additional, settings }) => {
  return (
    <li className="mb-4">
      <div className="flex items-center sm:block p-3 hover:bg-gray-100 duration-500 dark:hover:bg-gray-700">
        <img
          className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
          src={LogoMR}
          alt="Jese Leos"
        />
        <div className="text-gray-600 dark:text-gray-400">
          <div className="text-base font-normal">
            <span className="font-medium text-gray-900 dark:text-white">
              Manuel Rios
            </span>{' '}
            {verb}{' '}
            <span className="font-medium text-gray-900 dark:text-white">
              {experience}
            </span>{' '}
            at{' '}
            <span className="font-medium text-gray-900 dark:text-white">
              {place}
            </span>
          </div>
          <div className="text-sm font-normal">"{additional}"</div>
          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
            <svg
              className="w-2.5 h-2.5 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* SVG path data */}
            </svg>
            {settings}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TimelineEvent;
