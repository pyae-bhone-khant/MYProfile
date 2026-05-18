"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <section className="py-20 border-t border-white/5  text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 text-center  flex justify-center lg:text-left">

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="text-3xl text-blue-500 sm:text-4xl font-extrabold tracking-tight">
            Connect  Me
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Side: Pitch & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 border border-white/5 bg-white/[0.01] p-6 sm:p-10 rounded-2xl flex flex-col justify-between gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white/80 leading-tight max-w-lg">
                Looking for a full-stack developer who can bridge the gap between frontend interfaces and backend infrastructure?
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                I thrive on building scalable web apps, e-commerce architectures, and digital workflows. If you have an internship, junior opening, or a project in mind, let’s talk.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-400 text-black hover:bg-gray-200 text-sm font-semibold transition-colors w-full sm:w-fit"
            >
              <span>Start a conversation</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Right Side: Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/10">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Location
                </span>
                <span className="text-sm font-medium text-gray-200 mt-0.5">
                  {CONTACT.address}
                </span>
              </div>
            </div>

            {/* Phone */}
            {CONTACT.phoneNo && (
              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/10">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-gray-200 mt-0.5 tracking-wide">
                    {CONTACT.phoneNo}
                  </span>
                </div>
              </div>
            )}

            {/* Email Contact Card */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-purple-500/30 hover:bg-white/[0.02] transition-all group"
            >
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/10 group-hover:scale-105 transition-transform">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Email
                </span>
                <span className="text-sm font-medium text-gray-200 mt-0.5 group-hover:text-purple-300 transition-colors break-all">
                  {CONTACT.email}
                </span>
              </div>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}