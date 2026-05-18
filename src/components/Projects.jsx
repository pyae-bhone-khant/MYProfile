"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PROJECTS } from "../constants";

const CATEGORIES = ["all", "platform", "ecommerce"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !cleanSearch ||
        project.title.toLowerCase().includes(cleanSearch) ||
        project.description.toLowerCase().includes(cleanSearch) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(cleanSearch));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredProject = filteredProjects[0];

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-20 flex justify-center items-center flex-col w-full ">
          <div className="flex justify-center  items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Selected Works
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl text-blue-600 font-extrabold tracking-tight bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text mb-6">
            Project Showcase
          </h2>
          {/* <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            A curated collection of full-stack applications, e-commerce platforms, and digital solutions crafted with modern web technologies.
          </p> */}
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 grid gap-10 lg:grid-cols-12 items-center border border-white/10 bg-linear-to-br from-white/3 to-purple-500/2 p-8 rounded-3xl backdrop-blur-xl shadow-2xl shadow-purple-500/10"
          >
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-linear-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
                    Featured Project
                  </span>
                  {featuredProject.status && (
                    <span className="text-xs font-medium px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      {featuredProject.status}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {featuredProject.shortDescription}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mb-8">
                  {featuredProject.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold bg-linear-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-video relative group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-0" />
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover relative z-10 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-transparent z-20" />
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-white/80">
                  {featuredProject.duration}
                </span>
                <span className="text-xs font-medium text-white/80">
                  {featuredProject.role}
                </span>
              </div>
            </div>
          </motion.div>
        )}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-5xl  mt-6 mb-18 text-blue-500 flex text-center justify-center font-bold ">Projects <br /> <span className="text-white"> ({filteredProjects.length})</span></motion.h2>

        {/* Filters Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8 pb-6 border-b border-white/5">
          <div className="flex items-center gap-2 bg-white/[0.03] p-1 rounded-lg border border-white/5 w-full md:w-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all ${selectedCategory === category
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search stack or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 rounded-lg bg-white/[0.03] border border-white/10 pl-9 pr-4 text-sm text-white outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* <h2 className="text-2xl font-bold text-white">Projects {filteredProjects.length}</h2> */}
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="flex flex-col justify-between border border-white/5 bg-white/[0.01] rounded-xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider bg-black/60 px-2 py-0.5 rounded text-gray-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                  <p className="text-xs text-purple-400 mb-3">{project.shortDescription}</p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[11px] bg-white/5 px-2 py-0.5 rounded text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] text-gray-500 self-center pl-1">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-2.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-semibold bg-white/5 hover:bg-white/10 text-white py-2 rounded transition-colors"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-semibold border border-white/5 hover:bg-white/5 text-gray-300 py-2 rounded transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}