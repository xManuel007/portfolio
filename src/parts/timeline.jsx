import React from 'react'
import TitleBody from '../components/ui/title-part'
import TimelineContainer from '../components/timeline'
import TimelineEvent from '../components/timeline/timeline-event'

const TimeLine = () => {
  return (
    <div id='roadmap' className='w-screen bg-navy lg:px-72 p-8'>
      <TitleBody
        backtext='ROADMAP'
        firstphrase={'TIMELINE'}
        secondphrase={'LIFE'}
      />

      <TimelineContainer year={2024}>
        <TimelineEvent
          verb={'Started a'}
          experience={'FullStack Developer Position'}
          place={'Logistica Multimodal Especializada'}
          additional={'Worked as a fullstack developer utilizing technologies such as Angular and Laravel.'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Started a'}
          experience={'FrontEnd Project'}
          place={'Velocity'}
          additional={'Created a landing page for the Velocity brand by Glicorsa.'}
          settings={'Public'}
        />
      <TimelineEvent
        verb={'Finished a'}
        experience={'FullStack Web Project'}
        place={'Glicorsa'}
        additional={'Developed a website for a major company, glicorsa.com.'}
        settings={'Public'}
      />
      </TimelineContainer>
      <TimelineContainer year={2023}>
        <TimelineEvent
          verb={'Started working as a'}
          experience={'FullStack Developer'}
          place={'Glicorsa'}
          additional={'Just started as a freelancer, beginning a new project.'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Finished an'}
          experience={'Engineering Degree'}
          place={'University of Colima'}
          additional={'Four years full of new friendships and unforgettable experiences... I can’t believe it T.T'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'Ruby on Rails Developer Position'}
          place={'BrightCoders'}
          additional={'I think Ruby is a combination of Laravel and Python...'}
          settings={'Public'}
        />
      </TimelineContainer>


      <TimelineContainer year={2022}>
        <TimelineEvent
          verb={'Started a'}
          experience={'Ruby on Rails Developer Position'}
          place={'BrightCoders'}
          additional={'It’s time to learn another language...'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'React JS Developer Position'}
          place={'University of Colima'}
          additional={'I collaborated in the development of the institutional web portal!'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'React Native Developer Position'}
          place={'BrightCoders'}
          additional={'Developed a final app about dogs, lol.'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Started a'}
          experience={'React JS Developer Position'}
          place={'University of Colima'}
          additional={'As part of my social service.'}
          settings={'Public'}
        />
      </TimelineContainer>


      <TimelineContainer year={2021}>
        <TimelineEvent
          verb={'started a'}
          experience={'React Native Developer Position'}
          place={'BrightCoders'}
          additional={'Amazing to got this new experience!!'}
          settings={'Public'}
        />
      </TimelineContainer>

      <TimelineContainer year={2019}>
        <TimelineEvent
          verb={'Started an'}
          experience={'Engineering Degree'}
          place={'University of Colima'}
          additional={'Internet Technology Engineering'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'Finished'}
          experience={'High School'}
          place={'Bachillerato #8'}
          additional={'Software Analyst Technician'}
          settings={'Public'}
        />
      </TimelineContainer>

      <TimelineContainer year={2016}>
        <TimelineEvent
          verb={'Started'}
          experience={'High School'}
          place={'Bachillerato #8'}
          additional={'Software Analyst Technician'}
          settings={'Public'}
        />
      </TimelineContainer>


    </div>
  )
}

export default TimeLine
