import React from "react";
import Image from "next/image";
import data from "../data/projects.json";

type ProjectsData = {
  projects: Project[];
};

const projectsData: ProjectsData = data;

const Project = () => {
  return (
    <div className="mx-10 lg:mx-8">
      {projectsData["projects"].map((project: Project) => (
        <>
          <div className="my-8 flex items-center justify-between">
            <h1 className="font-bold text-white">Project 1</h1>
            <div className="mr-20 h-0 w-1/3 border border-secondary lg:mr-60 lg:w-1/2"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="z-10 mt-8 w-full lg:mt-0 lg:w-1/2">
              <Image
                className="relative z-10"
                src={project.image}
                alt="Project 1"
                width={400}
                height={200}
              />
              <div className="relative flex">
                <Image
                  className="absolute -left-11 -top-48 z-0"
                  src="/util/greenboxes.png"
                  alt="Project 1"
                  width={196}
                  height={250}
                />
                <button className="border-g-300 ml-56 mt-3 h-12 rounded-sm border p-2 px-4 text-green-300 hover:bg-green-300 hover:text-black">
                  View Code
                </button>
              </div>
            </div>

            <div className="mt-8 w-full  lg:mt-0 lg:w-1/2">
              <h1 className="text-2xl font-bold text-white lg:text-4xl">
                {project.title}
              </h1>
              <p className="text-lg text-white lg:text-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Project;
