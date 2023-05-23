import React from 'react'

const RoadMapCard = ({title, time, resume}) => {
  return (
    <>
      <div className="card">
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className='time'>{time}</p>
          <p>{resume}</p>
        </div>
      </div>
    </>
  )
}

export default RoadMapCard
