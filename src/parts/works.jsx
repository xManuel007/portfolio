import React, { useEffect, useState } from 'react';
import TitleBody from '../components/ui/title-part';
import projectsData from '../local-api/projects';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Modal from '../components/ui/modal';
import { AnimatePresence } from 'framer-motion';
import SearchBar from '../components/works/search-bar';
import WorkCard from '../components/works/work-card';
import WorkPagination from '../components/works/work-pagination';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchProject, setSearchProject] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleChange = (e) => {
    setSearchProject(e.target.value)
    setCurrentPage(1);
  }

  const filteredData = projectsData.projects.filter((item) =>
    item.title.toLowerCase().includes(searchProject.toLowerCase())
  );


  const totalPages = Math.ceil(filteredData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredData.slice(startIndex, startIndex + projectsPerPage);


  useEffect(() => {
    const handleKeyDown = (event) => { if (event.keyCode === 27) closeModal() }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    };
  }, []);

  const openModal = (project) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; }
  const closeModal = () => { setSelectedProject(null); document.body.style.overflow = ''; }

  return (
    <div id='projects' className='bg-navy bg-no-repeat bg-cover min-h-screen w-screen flex flex-col items-center justify-center'>
      <TitleBody backtext='WORKS' firstphrase='MY' secondphrase='PORTFOLIO' />
      <div>
        <SearchBar searchProject={searchProject} handleChange={handleChange} />
        <div className="flex flex-wrap justify-center items-center mt-8 gap-8 min-h-[40vh]">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <WorkCard
                key={index}
                logo={project.image[0]}
                title={project.title}
                languages={project.languages}
                Description={project.resume}
                openModal={() => openModal(project)}
              />
            ))
          ) : (
            <p className="text-gray-400 text-2xl font-semibold">No projects found.</p>
          )}
        </div>
        <WorkPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
      <AnimatePresence>
        {selectedProject && <Modal project={selectedProject} closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Works;
