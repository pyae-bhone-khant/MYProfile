import { motion } from "framer-motion";

import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-wrap gap-3 rounded-md border-b-2 border-stone-700 py-8 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <a
                  href={project.demo}
                  className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="project link"
                >
                  View Now
                </a>
              </div>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
