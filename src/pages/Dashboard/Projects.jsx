import React from "react";
import TopArea from "../../component/Dashboard/Projects/TopArea";
import ProjectsList from "../../component/Dashboard/Projects/ProjectsList";

const Projects = () => {
  return (
    <div className="h-screen overflow-y-scroll custom-scrollbar">
      <TopArea />
      <div className="flex-1 border-t border-gray-300 my-4 mx-7"></div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
