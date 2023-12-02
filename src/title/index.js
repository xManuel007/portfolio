import React from 'react'

const TitleBody = ({backtext, firstphrase, secondphrase}) => {
  return (
    <div className='p-5'>
      <div className='text-6xl font-extrabold text-backtext z-0'>{backtext}</div>
      <div className='flex text-4xl text-white font-extrabold z-10 absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {firstphrase} <div className='text-fronttext ml-2'>{secondphrase}</div>
      </div>
    </div>
  )
}

export default TitleBody
