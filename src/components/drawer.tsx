"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowRight, ArrowUpRight, LockIcon, X } from "lucide-react";
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
        {/* 'asChild' tells the Dialog to use your provided element as the trigger */}
        <DialogTrigger>
          <div className="cursor-pointer">{children}</div>
        </DialogTrigger>
        <DialogContent className="flex max-h-[85vh] flex-col border-none bg-gray-900 text-white sm:max-w-[900px]">
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="mt-5 w-full px-5">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full rounded-xl border border-blue-300 object-cover"
              />
            </div>
            <div className="px-10">
              <div className="rounded-4xl mt-13 h-120 mb-10 w-full border border-gray-800 bg-[#010114] p-6">
                <p className="bg-linear-to-r from-blue-600 to-white bg-clip-text text-xl text-transparent">
                  {project.category}
                </p>
                <h1 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h1>
                <p className="mt-2 text-purple-400"> with {project.team}</p>
                <p className="mt-5 text-xl text-white/75">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.page &&
                    project.page.map((page: string, index: number) => (
                      <p
                        key={index}
                        className="mt-8 rounded border border-gray-400 bg-gray-800 px-4 py-2 text-xl text-white"
                      >
                        {page}
                      </p>
                    ))}
                </div>
                <div className="flex gap-4">
                  {project.technologies &&
                    project.technologies.map((tech: string, index: number) => (
                      <p
                        key={index}
                        className="mt-8 rounded-full border border-gray-600 bg-purple-600 px-2 py-1 text-sm text-white"
                      >
                        {tech}
                      </p>
                    ))}
                </div>
                <div className="flex w-full items-center justify-center gap-8 text-center">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex w-1/2 items-center justify-center rounded-full border border-gray-800 bg-gray-800 py-4 text-xl text-white transition hover:bg-gray-700"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Source Code <FaGithub />
                      </span>
                    </a>
                  ) : (
                    <p className="mt-10 flex w-1/2 cursor-not-allowed items-center justify-center rounded-full border border-gray-800 bg-gray-800 py-4 text-xl text-white opacity-50">
                      <span className="flex items-center justify-center gap-2">
                        Private Repository <LockIcon />
                      </span>
                    </p>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 w-1/2 rounded-full border border-gray-800 bg-purple-600 py-4 text-xl text-white transition hover:bg-purple-700"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {" "}
                        view Demo <ArrowUpRight />
                      </span>
                    </a>
                  ) : (
                    <p className="mt-10 flex w-1/2 cursor-not-allowed items-center justify-center rounded-full border border-gray-800 bg-gray-800 py-4 text-xl text-white opacity-50">
                      <span className="flex items-center justify-center gap-2">
                        {" "}
                        demo not available <X />
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
      {/* Wrapped in a div to ensure a single React element is passed to 'Slot' */}
      <DrawerTrigger>
        <div className="cursor-pointer">{children}</div>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh] border-none bg-[#1a1a1a] text-white">
        <DrawerHeader>
          <DrawerTitle>{project.title}</DrawerTitle>
        </DrawerHeader>

        <div className="overflow-y-auto p-4">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full rounded-lg object-cover"
          />
          <p className="mt-4 text-sm text-gray-400">{project.description}</p>
          <p className="mt-2 text-sm font-semibold text-purple-400">
            Tech: {project.technologies?.join(", ")}
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
