import React from 'react'
import RoadMapCard from '../roadmapCard'

const RoadMap = () => {
  return (
    <div id='roadmap' className='roadmap'>
        <div className="outer">
          <RoadMapCard title={'Ruby On Rails Developer'} time={'2022-2023'}
            resume={`Develop modern and dynamic user interfaces using React
            JS, while implementing best practices such as test-driven
            development and utilizing tools for managing local and
            remote repositories. In addition to honing your skills in
            software development, you will gain experience in essential
            teamwork and communication skills using agile
            methodologies
            `}/>
          <RoadMapCard title={'React Js Developer'} time={'2022-2022'}
            resume={`Develop modern and dynamic user interfaces using React
            JS, while implementing best practices such as test-driven
            development and utilizing tools for managing local and
            remote repositories. In addition to honing your skills in
            software development, you will gain experience in essential
            teamwork and communication skills using agile
            methodologies
            `}/>
          <RoadMapCard title={'React Native Developer'} time={'2021-2022'}
            resume={`Develop native applications with technologies such as
            JavaScript and React Native, while implementing good
            practices, test-based development, tools for managing local
            and remote repositories. In addition to developing
            fundamental skills in software development such as
            teamwork and effective communication using an agile
            methodology.
            `}/>
          <RoadMapCard title={'Internet Technologies Engineering'} time={'2019-2023'}
            resume={`I Graduated As A Internet Technologies Engineer in Universidad De Colima`}/>
          <RoadMapCard title={'Bachillerato Tecnico #8'} time={'2016-2019'}
            resume={'I Graduated As A Programmer Analyst Technician At The High School of Universidad De Colima.'}/>
        </div>
    </div>
  )
}

export default RoadMap
