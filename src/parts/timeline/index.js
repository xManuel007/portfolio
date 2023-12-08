import React from 'react'
import TitleBody from '../../components/title'
import TimelineContainer from '../../components/timelineContainer'
import TimelineEvent from '../../components/timelineEvent'

const TimeLine = () => {
  return (
    <div id='roadmap' className='w-screen  bg-navy lg:px-72 p-8'>
      <TitleBody
        backtext='ROADMAP'
        firstphrase={'TIMELINE'}
        secondphrase={'LIFE'}
      />

      <TimelineContainer year={2023}>
        <TimelineEvent
          verb={'finished an'}
          experience={'Engineering'}
          place={'University of Colima'}
          additional={'4 years full of new friendships and unforgettable experiences... I cant belive it T.T '}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'finished a'}
          experience={'Ruby on Rails Developer Position'}
          place={'BrightCoders'}
          additional={'I guess ruby its a combination of laravel and python...'}
          settings={'Public'}
        />
      </TimelineContainer>

      <TimelineContainer year={2022}>
        <TimelineEvent
          verb={'started a'}
          experience={'Ruby on Rails Developer Position'}
          place={'BrightCoders'}
          additional={'Its time to learn another language...'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'finished a'}
          experience={'React JS Developer Position'}
          place={'University of Colima'}
          additional={'I collabarated in the development of the Institutional web portal!!'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'finished a'}
          experience={'React Native Developer Position'}
          place={'BrightCoders'}
          additional={'Just made a final app about Dogs, lol.'}
          settings={'Public'}
        />
        <TimelineEvent
          verb={'started a'}
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
          verb={'started an'}
          experience={'Engineering'}
          place={'University of Colima'}
          settings={'Public'}
          additional={'Internet Technology Engineering'}
        />
        <TimelineEvent
          verb={'finished'}
          experience={'High School'}
          place={'Bachillerato #8'}
          settings={'Public'}
          additional={'Software Analyst Technician'}
        />
      </TimelineContainer>

      <TimelineContainer year={2016}>
        <TimelineEvent
          verb={'started'}
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
