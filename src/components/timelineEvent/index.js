import React from 'react'
import { LogoMR } from '../../assets/logo'

const TimelineEvent = ({verb, experience, place, additional, settings}) => {
  return (
    <li>
      <a href="/" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
        <img className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src={LogoMR} alt="Jese Leos"/>
        <div className="text-gray-600 dark:text-gray-400">
          <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Manuel Rios</span> {verb} <span className="font-medium text-gray-900 dark:text-white">{experience}</span> at <span className="font-medium text-gray-900 dark:text-white"> {place}</span></div>
          <div className="text-sm font-normal">"{additional}"</div>
          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
            <svg className="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
            </svg>
            {settings}
          </span>
        </div>
      </a>
    </li>
  )
}

export default TimelineEvent
