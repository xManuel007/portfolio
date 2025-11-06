import React, { useState } from 'react'
import CVManu from '../assets/personal/cv_Manuel_Eduardo_Ríos_Martínez_fsen.pdf'
import { ChevronDown, Download, Save } from 'lucide-react'

const ButtonCV = () => {
  const [isDownloaded, setDownloaded] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleSave = () => {
    setDownloaded(true)
    const timer = setTimeout(() => {
      setDownloaded(false)
    }, 2500)
    return () => clearTimeout(timer)
  }

  const handleEasterEgg = () => {
    setShowEasterEgg(true)
    setTimeout(() => setShowEasterEgg(false), 2000)
  }

  return (
    <div className="relative border-[0.2px] border-[#30363d] bg-[#21262D] flex items-center rounded-md cursor-pointer h-10 overflow-visible">
      {/* Botón principal */}
      <a href={CVManu} rel="noopener noreferrer" target="_blank">
        <div
          onClick={() => handleSave()}
          className="flex flex-row gap-2 p-2 rounded-l-md hover:bg-[#292e36] font-semibold items-center"
        >
          <div>
            {isDownloaded ? (
              <Save size={17} color="#8d96a0" />
            ) : (
              <Download size={17} color="#8d96a0" />
            )}
          </div>
          <div className="text-[#c9d1d9]">
            {isDownloaded ? 'Got it!' : 'Grab my CV'}
          </div>
        </div>
      </a>

      {/* Chevron + Easter Egg */}
      <div
        onClick={handleEasterEgg}
        className="border-l-[0.2px] border-[#30363d] flex justify-center items-center p-2 rounded-r-md hover:bg-[#292e36] relative"
      >
        <ChevronDown size={17} color="#c9d1d9" />

        {/* Tooltip del easter egg */}
        {showEasterEgg && (
          <div className="absolute bottom-[-1.8rem] right-1/2 translate-x-1/2 bg-[#30363d] text-white text-xs px-3 py-1 rounded-md shadow-md animate-fade w-48">
            Just kidding, no dropdown
          </div>
        )}
      </div>
    </div>
  )
}

export default ButtonCV
