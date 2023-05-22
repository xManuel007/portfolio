import React from 'react'
import Laptop from '../Laptop'

const ProjectContainer = ({title, resume, image, isVisible }) => {
  return (
    <div className={`projects__container ${isVisible ? "visible" : "hidden"}`}>
      <Laptop image={image}/>
      <div>
        <div className='projects__container__title'>{title}</div>
        <div className='projects__container__resume'>{resume}</div>
      </div>
    </div>
  )
}

export default ProjectContainer
