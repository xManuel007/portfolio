import SearchBar from "./search-bar";
import WorkCard from "./work-card";
import WorkPagination from "./work-pagination";
import projectsData from "../../local-api/projects";

const WorksContainer = () => {
  return (
    <div className="min-h-screen">
      <SearchBar />
      <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
        {projectsData.projects.map((project, index) => (
          <WorkCard
            key={index}
            logo={project.image[0]}
            title={project.title}
            languages={project.languages}
            Description={project.resume}
          />
        ))}
      </div>
      <WorkPagination />
    </div>
  );
}

export default WorksContainer;
