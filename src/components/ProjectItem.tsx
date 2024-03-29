import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { projectVariants } from "../utils/motionVariants";

const ProjectItem = ({ project }: { project: Project }) => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0px -10% 0px",
    threshold: 0.8, // half of item height
  });

  return (
    <motion.div
      key={project.title}
      className="mt-16 rounded-xl border border-secondary border-opacity-25 bg-black-light px-4 py-4 text-center transition duration-300 ease-in-out hover:border-opacity-60 hover:bg-opacity-30 lg:px-16 lg:py-16 lg:text-left"
      ref={ref}
      initial="initial"
      animate={inView ? "inView" : "notInView"}
      whileHover="hover"
      variants={projectVariants}
      transition={{ duration: 0.1 }}
    >
      <div className="my-8 flex flex-wrap items-center justify-center lg:flex-nowrap lg:justify-between">
        <h1 className="w-full font-bold text-white">{project.title}</h1>
        <div className="lg: mx-4 my-2 h-0 w-full border border-secondary lg:my-0 lg:mr-20 lg:block"></div>
        {project.link && project.link != "" && (
          <Link className="hidden lg:block" href={project.link}>
            <button className="border-g-300 my-2 h-16 w-full rounded-sm border p-2 px-4 text-green-300 hover:bg-green-300 hover:text-black lg:h-12 lg:w-96">
              View Project
            </button>
          </Link>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="z-10 mt-8 ml-0 w-full lg:ml-8 lg:mt-0 lg:w-1/2">
          <Image
            className="relative z-10 mx-auto"
            src={project.image}
            alt="Project 1"
            width={400}
            height={200}
          />
          <div className="relative flex">
            <Image
              className="absolute -left-11 -top-48 z-0 hidden lg:block"
              src="/util/greenboxes.png"
              alt="Project 1"
              width={196}
              height={250}
            />
            {project.code && project.code != "" && (
              <Link className="hidden lg:block" href={project.code}>
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
          <p className="text-md px-4 text-white lg:text-lg">
            {project.description}
          </p>
        </div>

        {project.link && project.link != "" && (
          <Link className="block lg:hidden" href={project.link}>
            <button className="border-g-300 my-2 h-16 w-full rounded-sm border p-2 px-4 text-green-300 hover:bg-green-300 hover:text-black lg:h-12 lg:w-96">
              View Project
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectItem;
