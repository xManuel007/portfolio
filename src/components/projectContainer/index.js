import React from 'react'
import MockUp from '../MockUp'


const HasRepo = (repo) => {
  if(!repo) {
    return null
  }else {
    return (
    <a href={repo}>
      <button className='projects__container__button'>More info</button>
    </a>
    )
  }
}

const ProjectContainer = ({title, resume, deviceType, image, isVisible, repo, technologies }) => {
  return (
    <div className={`projects__container ${isVisible ? "visible" : "hidden"}`}>
      <MockUp image={image} deviceType={deviceType}/>
      <div>
        <div className='projects__container__title'>{title}</div>
        <div className='projects__container__info'>
          <div className='projects__container__resume'>{resume}</div>
          {HasRepo(repo)}
          <div className='projects__container__technologies'>
            {technologies.map((techno) => {
              return (
                <img src={techno} alt={techno} key={`${techno}-${title}`} className='projects__container__technologie'/>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
