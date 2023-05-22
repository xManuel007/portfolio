import { FoodPoint } from "../../assets/mockups"
import ProjectContainer from "../projectContainer"

const Projects = () => {
  return (
    <div id='projects' className='projects'>
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
  )
}

export default Projects
