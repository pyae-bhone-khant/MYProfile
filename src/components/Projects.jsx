"use client"

import { motion } from "framer-motion";
import { useState } from "react";

import { PROJECTS } from "../constants";

const Projects = () => { 
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-wrap gap-3 rounded-md border-b-2 border-gray-700 py-8 lg:justify-center"
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
                className="mb-6 rounded border border-gray-600"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <a
                  href={project.demo || project.github}
                  className="rounded bg-linear-to-r from-purple-600 to-blue-600 p-2 text-sm font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="project link"
                > 
                 {project.demo ? "View Demo" : "View Code"}
                </a>
              </div>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-purple-600/20 border border-purple-500/30 p-2 text-sm font-medium text-gray-300"
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
