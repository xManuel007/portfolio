import { FoodPoint, Arrow, UDC, JavaScript, React, Sass, NodeJS, Git, CSS, TypeScript, RoR, Postgresql, Python, InteractivePong, RicardoYMartin, TakeMyDog, Firebase } from "../../assets";
import ProjectContainer from "../projectContainer";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const scrollDelay = 113000; // ms

  const QuantityOfProjects = 5

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      goToNextProject()
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, []);

  const goToPreviousProject = () => {
    setCurrentProject((prevProject) => {
      if (prevProject === 0) {
        return QuantityOfProjects - 1;
      } else {
        return prevProject - 1;
      }
    });
  };

  const goToNextProject = () => {
    setCurrentProject((prevProject) => {
      if (prevProject === (QuantityOfProjects - 1)) {
        return 0;
      } else {
        return prevProject + 1;
      }
    });
  };

  return (
    <div id="projects" className="projects">
      <img src={Arrow} alt="Previous" role="button" onClick={goToPreviousProject} className="projects__button__previous projects__button__arrow"/>
      <div className="projects__container">
        <ProjectContainer
          image={FoodPoint}
          title={"Food Point"}
          resume={`
            Food Point is a restaurant point of sale application.
            It consists of different modules with a user-friendly interface.
            Some of the features it includes are the Services functionality,
            where orders are generated based on the items registered.
            The Kitchen module allows users to view the registered orders and update their status.
            Reports functionality helps to keep track of sales.`}
          isVisible={currentProject === 0}
          repo={'https://github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3'}
          technologies={[RoR, Postgresql, CSS, Git]}
        />
        <ProjectContainer
          image={TakeMyDog}
          title={"Take My Dog"}
          resume={`
            Introducing a remarkable mobile app designed to simplify your search for dog walkers,
            akin to the renowned Uber concept. With this user-friendly platform,
            you can effortlessly find reliable dog walkers for your beloved canine companions.
            The app offers a convenient feature that enables you to add your dogs,
            providing essential details such as weight, personality traits,
            and any special care requirements. For enhanced peace of mind,
            you can even track the real-time position of the dog walker during the journey,
            ensuring the utmost security for your cherished pets.
            Experience a new level of convenience and safety in the world of dog walking with our innovative mobile app.`}
          isVisible={currentProject === 1}
          deviceType={'phone'}
          repo={'https://github.com/BC-MAY-21-RN/proyecto-final-pf-n21-t2'}
          technologies={[JavaScript, React, Firebase, NodeJS, Git ]}
        />
        <ProjectContainer
          image={UDC}
          title={"UDC"}
          resume={`
            I Developed a modern and dynamic user interfaces using React
            JS, while implementing best practices such as test-driven
            development and utilizing tools for managing local and
            remote repositories. for this project I don't have repo because
            its confidential.`}
          isVisible={currentProject === 2}
          technologies={[JavaScript, React, Sass, NodeJS, Git ]}
        />
        <ProjectContainer
          image={RicardoYMartin}
          title={"Rick & Morty"}
          resume={`
            Embrace the elegance of API consumption through a delightful array of functions,
            including enchanting sorting capabilities, captivating search functionalities,
            and an enchanting details screen that will leave you spellbound.`}
          isVisible={currentProject === 3}
          repo={'https://github.com/xManuel007/rick-morty-api'}
          technologies={[TypeScript, JavaScript, React, Git, CSS ]}
        />
        <ProjectContainer
          image={InteractivePong}
          title={"Interative Pong"}
          resume={`
            Presenting an extraordinary web app game,
            It was a school project for the esteemed "Human-Computer Interaction" course.
            Its core functionality lies in the mesmerizing art of
            controlling the game's paddles with the graceful movement of your hands.
            Harnessing the remarkable capabilities of the Mediapipe library,
            this masterpiece detects and responds to the intricate gestures of your hand,
            granting you boundless possibilities.`}
          isVisible={currentProject === 4}
          technologies={[JavaScript, Python, CSS, Git]}
          repo={'https://github.com/xManuel007/interative-pong'}
        />
      </div>
      <img src={Arrow} alt="Next" role="button" onClick={goToNextProject} className="projects__button__next projects__button__arrow"/>
    </div>
  );
};

export default Projects;
