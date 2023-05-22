import { FoodPoint } from "../../assets/mockups";
import ProjectContainer from "../projectContainer";

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <button className="projects__button projects__button--left">Anterior</button>
      <div className="projects__container-wrapper">
        <ProjectContainer
          image={FoodPoint}
          title={"Food Point"}
          resume={"Explain"}
        />
        <ProjectContainer
          image={FoodPoint}
          title={"Food Point"}
          resume={"Explain"}
        />
        <ProjectContainer
          image={FoodPoint}
          title={"Food Point"}
          resume={"Explain"}
        />
      </div>
      <button className="projects__button projects__button--right">Siguiente</button>
    </div>
  );
};

export default Projects;
