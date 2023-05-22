import { FoodPoint, Arrow, UDC } from "../../assets";
import ProjectContainer from "../projectContainer";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const scrollDelay = 1110000; // 3 segundos

  const QuantityOfProjects = 4

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
      <img src={Arrow} alt="Previous" role="button" onClick={goToPreviousProject} className="projects__button__previous"/>
      <div className="projects__container">
        <ProjectContainer
          image={FoodPoint}
          title={"Food Point"}
          resume={"Project"}
          isVisible={currentProject === 0}
        />
        <ProjectContainer
          image={UDC}
          title={"UDC"}
          resume={"Explain"}
          isVisible={currentProject === 1}
        />
        <ProjectContainer
          image={FoodPoint}
          title={"Rick & Morty"}
          resume={"Explain"}
          isVisible={currentProject === 2}
        />
        <ProjectContainer
          image={FoodPoint}
          title={"Interative Pong"}
          resume={"Explain"}
          isVisible={currentProject === 3}
        />
      </div>
      <img src={Arrow} alt="Next" role="button" onClick={goToNextProject}/>
    </div>
  );
};

export default Projects;
