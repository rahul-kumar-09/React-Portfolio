import React from "react";
import { PROJECTS } from "../constants";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Projects = ({ project }) => {
  return (
    <div className="border-b border-neutral-900 pb-4" ref={project}>
      <h1 className="my-20 text-center text-4xl">Projects</h1>

      {PROJECTS.map((projects, index) => (
        <div key={index}>
          <a href={projects.projectLink} target="_blank">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="mb-8 flex flex-wrap lg:justify-center   hover:rounded-lg p-5"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={projects.image}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  alt={projects.title}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="bm-2 font-semibold">{projects.title}</h6>
                <p className="mb-4 text-neutral-400">{projects.description}</p>
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
