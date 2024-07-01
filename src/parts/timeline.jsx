import React from 'react'
import TitleBody from '../components/ui/title-part'
import TimelineContainer from '../components/timeline'
import TimelineEvent from '../components/timeline/timeline-event'
import { LMELogo } from '../assets/projectsImages/lme'
import { velocityLogo } from '../assets/projectsImages/velocity'
import { GlicorsaLogo } from '../assets/projectsImages/glicorsa'
import { UDCLogo } from '../assets/projectsImages/udc'

const TimeLine = () => {
  return (
    <div id='roadmap' className='w-screen p-4 sm:p-8 md:p-16 lg:p-32 xl:p-64'>
      <TitleBody
        backtext='ROADMAP'
        firstphrase={'TIMELINE'}
        secondphrase={'LIFE'}
      />

      <TimelineContainer year={2024}>
        <TimelineEvent
          verb={'Started a'}
          experience={'FullStack Dev Position'}
          place={'Logistica Multimodal Especializada'}
          additional={'Worked as a fullstack developer utilizing technologies such as Angular and Laravel.'}
          settings={'Public'}
          time={2 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'PHP', 'TypeScript', 'SCSS']}
          stars='1.2k'
          imageCompany={LMELogo}
        />
        <TimelineEvent
          verb={'Started a'}
          experience={'FrontEnd Project'}
          place={'Velocity'}
          additional={'Created a landing page for the Velocity brand by Glicorsa.'}
          settings={'Public'}
          time={2 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'TypeScript', 'SCSS']}
          stars='2k'
          bgColorCompany={false}
          imageCompany={velocityLogo}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'FullStack Web Project'}
          place={'Glicorsa'}
          additional={'Developed a website for a major company, glicorsa.com.'}
          settings={'Public'}
          time={6 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'TypeScript', 'SCSS']}
          stars='200'
          bgColorCompany={false}
          imageCompany={GlicorsaLogo}
        />
      </TimelineContainer>
      <TimelineContainer year={2023}>
        <TimelineEvent
          verb={'Started working as a'}
          experience={'FullStack Dev'}
          place={'Glicorsa'}
          additional={'Just started as a freelancer, beginning a new project.'}
          settings={'Public'}
          time={10 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'TypeScript', 'SCSS']}
          stars='1.5k'
          bgColorCompany={false}
          imageCompany={GlicorsaLogo}
        />
        <TimelineEvent
          verb={'Finished an'}
          experience={'Engineering Degree'}
          place={'University of Colima'}
          additional={'Four years full of new friendships and unforgettable experiences... I can’t believe it T.T'}
          settings={'Public'}
          time={12 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'TypeScript', 'JavaScript', 'PHP', 'CSS', 'Python']}
          stars='5.2k'
          imageCompany={UDCLogo}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'Ruby on Rails Dev Position'}
          place={'BrightCoders'}
          additional={'I think Ruby is a combination of Laravel and Python...'}
          settings={'Public'}
          time={13 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'Ruby', 'JavaScript', 'SCSS']}
          stars='2.2k'
          imageCompany={'https://media-exp1.licdn.com/dms/image/C560BAQF3zUuvKyf2NA/company-logo_200_200/0/1656948222145?e=2147483647&v=beta&t=a6mgHbjDPoNgqo-2j9y_r2oD98XQWI-2phjxWXRxYS8'}
        />
      </TimelineContainer>


      <TimelineContainer year={2022}>
        <TimelineEvent
          verb={'Started a'}
          experience={'Ruby on Rails Dev Position'}
          place={'BrightCoders'}
          additional={'It’s time to learn another language...'}
          settings={'Public'}
          time={16 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'Ruby', 'JavaScript', 'SCSS']}
          stars='10'
          imageCompany={'https://media-exp1.licdn.com/dms/image/C560BAQF3zUuvKyf2NA/company-logo_200_200/0/1656948222145?e=2147483647&v=beta&t=a6mgHbjDPoNgqo-2j9y_r2oD98XQWI-2phjxWXRxYS8'}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'ReactJS Dev Position'}
          place={'University of Colima'}
          additional={'I collaborated in the development of the institutional web portal!'}
          settings={'Public'}
          time={20 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'JavaScript', 'PHP', 'CSS']}
          stars='1.2k'
          imageCompany={UDCLogo}
        />
        <TimelineEvent
          verb={'Finished a'}
          experience={'React Native Dev Position'}
          place={'BrightCoders'}
          additional={'Developed a final app about dogs, lol.'}
          settings={'Public'}
          time={24 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'JavaScript']}
          stars='3.2k'
          imageCompany={'https://media-exp1.licdn.com/dms/image/C560BAQF3zUuvKyf2NA/company-logo_200_200/0/1656948222145?e=2147483647&v=beta&t=a6mgHbjDPoNgqo-2j9y_r2oD98XQWI-2phjxWXRxYS8'}
        />
        <TimelineEvent
          verb={'Started a'}
          experience={'ReactJS Dev Position'}
          place={'University of Colima'}
          additional={'As part of my social service.'}
          settings={'Public'}
          time={28 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'JavaScript', 'PHP', 'CSS']}
          stars='1k'
          imageCompany={UDCLogo}
        />
      </TimelineContainer>


      <TimelineContainer year={2021}>
        <TimelineEvent
          verb={'started a'}
          experience={'React Native Dev Position'}
          place={'BrightCoders'}
          additional={'Amazing to got this new experience!!'}
          settings={'Public'}
          time={32 * 4 * 7 * 24 * 60 * 60 * 1000}
          languages={['HTML', 'JavaScript']}
          stars='10.2k'
          imageCompany={'https://media-exp1.licdn.com/dms/image/C560BAQF3zUuvKyf2NA/company-logo_200_200/0/1656948222145?e=2147483647&v=beta&t=a6mgHbjDPoNgqo-2j9y_r2oD98XQWI-2phjxWXRxYS8'}
        />
      </TimelineContainer>

      <TimelineContainer year={2019}>
        <TimelineEvent
          verb={'Started an'}
          experience={'Engineering Degree'}
          place={'University of Colima'}
          additional={'Internet Technology Engineering'}
          settings={'Public'}
          time={4 * 12 * 4 * 7 * 24 * 60 * 60 * 1000}
          stars='7k'
          languages={['HTML', 'TypeScript', 'JavaScript', 'PHP', 'CSS', 'Java', 'C++', 'Python']}
          imageCompany={UDCLogo}
        />
        <TimelineEvent
          verb={'Finished'}
          experience={'High School'}
          place={'Bachillerato #8'}
          additional={'Software Analyst Technician'}
          settings={'Public'}
          time={5 * 12 * 4 * 7 * 24 * 60 * 60 * 1000}
          stars='1.2k'
          languages={['HTML', 'JavaScript', 'CSS', 'Java', 'C++']}
          imageCompany={UDCLogo}
        />
      </TimelineContainer>

      <TimelineContainer year={2016}>
        <TimelineEvent
          verb={'Started'}
          experience={'High School'}
          place={'Bachillerato #8'}
          additional={'Software Analyst Technician'}
          settings={'Public'}
          time={8 * 12 * 4 * 7 * 24 * 60 * 60 * 1000}
          stars='777'
          languages={['HTML', 'JavaScript', 'CSS', 'Java', 'C++']}
          imageCompany={UDCLogo}
        />
      </TimelineContainer>


    </div>
  )
}

export default TimeLine
