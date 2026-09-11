
"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  ArrowUpRight,
  LockIcon,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export function DrawerDialogDemo({
  children,
  project,
}: {
  children: React.ReactNode;
  project: any;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="cursor-pointer">{children}</div>
        </DialogTrigger>

        <DialogContent className="flex max-h-[85vh] flex-col border-none bg-gradient-to-br from-[#070B1A] via-[#0D1230] to-[#1A0B2E] text-white sm:max-w-[900px]">
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="mt-5 w-full px-5">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full rounded-xl border border-blue-300 object-cover"
              />
            </div>

            <div className="px-10">
              <div className="rounded-4xl mt-13 mb-10 h-auto w-full border border-white/10 bg-gradient-to-br from-[#090B1F] via-[#11153A] to-[#1B1035] p-6">
                <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-xl text-transparent">
                  {project.category}
                </p>

                <h1 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h1>

                <p className="mt-2 text-purple-400">
                  with {project.team}
                </p>

                <p className="mt-5 text-xl text-white/75">
                  {project.description}
                </p>

                {/* Pages */}
                <div className="flex flex-wrap gap-4">
                  {project.page &&
                    project.page.map(
                      (page: string, index: number) => (
                        <p
                          key={index}
                          className="mt-4 rounded border border-white/20 bg-white/10 px-4 py-2 text-xl text-white backdrop-blur-sm"
                        >
                          {page}
                        </p>
                      ),
                    )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-4">
                  {project.technologies &&
                    project.technologies.map(
                      (tech: string, index: number) => (
                        <p
                          key={index}
                          className="mt-4 rounded-full border border-purple-400/30 bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-2 py-1 text-sm text-white"
                        >
                          {tech}
                        </p>
                      ),
                    )}
                </div>

                {/* Buttons */}
                <div className="flex w-full flex-wrap items-center justify-center gap-4 text-center sm:gap-8">
                  {/* Github */}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex min-w-[200px] flex-1 items-center justify-center rounded-full border border-white/10 bg-white/10 py-4 text-xl text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Source Code <FaGithub />
                      </span>
                    </a>
                  ) : (
                    <p className="mt-10 flex min-w-[200px] flex-1 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/10 py-4 text-xl text-white opacity-50">
                      <span className="flex items-center justify-center gap-2">
                        Private Repository <LockIcon />
                      </span>
                    </p>
                  )}

                  {/* Demo */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex min-w-[200px] flex-1 items-center justify-center rounded-full border border-purple-400/20 bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-xl text-white transition hover:from-blue-700 hover:to-purple-700"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Demo <ArrowUpRight />
                      </span>
                    </a>
                  ) : (
                    <p className="mt-10 flex min-w-[200px] flex-1 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/10 py-4 text-xl text-white opacity-50">
                      <span className="flex items-center justify-center gap-2">
                        Demo Not Available <X />
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <div className="cursor-pointer">{children}</div>
      </DrawerTrigger>

      <DrawerContent className="max-h-[90vh] border-none bg-gradient-to-br from-[#080B18] via-[#11152F] to-[#1A0D2E] text-white">
        <DrawerHeader>
          <DrawerTitle className="text-white">
            {project.title}
          </DrawerTitle>
        </DrawerHeader>

        <div className="overflow-y-auto p-4">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full rounded-lg object-cover"
          />

          <p className="mt-4 text-sm text-gray-400">
            {project.description}
          </p>

          <p className="mt-2 text-sm font-semibold text-purple-400">
            Tech: {project.technologies?.join(", ")}
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

