import React from "react";
import Image from "next/image";
import data from "../data/projects.json";
import Link from "next/link";

type ProjectsData = {
  projects: Project[];
};

const projectsData: ProjectsData = data;

const Project = () => {
  return (
    <div>
      {projectsData["projects"].map((project: Project) => (
        <div
          key={project.title}
          className="mt-16 rounded-xl border border-secondary border-opacity-25 bg-black-light px-16 py-16 transition duration-300 ease-in-out hover:border-opacity-60 hover:bg-opacity-30"
        >
          <div className="my-8 flex items-center justify-between">
            <h1 className="w-full font-bold text-white">{project.title}</h1>
            <div className="mx-4 h-0 w-full border border-secondary lg:mr-20"></div>
            {project.link && project.link != "" && (
              <Link href={project.link}>
                <button className="border-g-300 h-16 w-40 rounded-sm border p-2 px-4 text-green-300 hover:bg-green-300 hover:text-black lg:h-12 lg:w-96">
                  View Project
                </button>
              </Link>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="z-10 mt-8 ml-8 w-full lg:mt-0 lg:w-1/2">
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
                {project.code && project.code != "" && (
                  <Link href={project.code}>
                    <button className="border-g-300 ml-56 mt-3 h-12 rounded-sm border p-2 px-2 text-green-300 hover:bg-green-300 hover:text-black lg:px-4">
                      View Code
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="relative mt-20 w-full lg:mt-0 lg:w-1/2">
              <h1 className="text-2xl font-bold text-white lg:text-4xl">
                {project.subTitle || ""}
              </h1>
              <p className="text-lg text-white lg:text-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
