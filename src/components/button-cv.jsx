import React from 'react'
import CVManu from '../assets/personal/CV-05032024.pdf'

const ButtonCV = () => {
  return (
    <a href={CVManu} rel="noopener noreferrer" target="_blank">
      <button
      className="overflow-hidden relative w-46 p-4 flex text-center items-center h-12 bg-black text-white border-none rounded-md text-lg font-bold cursor-pointer z-10 group"
      >
        Resume
        <span
          className="absolute w-48 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
          className="absolute w-48 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
          className="absolute w-48 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
          >Open it!</span>
      </button>
    </a>
  )
}

export default ButtonCV
