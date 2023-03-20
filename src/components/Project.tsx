import React from "react";
import data from "../data/projects.json";
import ProjectItem from "./ProjectItem";

type ProjectsData = {
  projects: Project[];
};

const projectsData: ProjectsData = data;

const Project = () => {
  return (
    <div>
      {projectsData["projects"].map((project: Project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Project;
