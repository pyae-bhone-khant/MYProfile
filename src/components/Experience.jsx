"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 text-white overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] pointer-events-none animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-20 flex justify-center items-center flex-col w-full"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Work History
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-linear-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-blue-500 mb-6">
            Experience
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 to-purple-500/50" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <div className="flex-1 border border-white/5 bg-white/1 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 group-hover:bg-white/2">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <Building2 size={16} />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{experience.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
