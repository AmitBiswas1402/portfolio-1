"use client";

import { FaGlobeAsia } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  id: string;
  name: string;
  desc: string;
  website: string;
  github: string;
}

const ProjectCard = ({ name, desc, website, github }: ProjectCardProps) => {
  return (
    <article className="bg-[#1f1f1f] border border-[#333] rounded-xl p-6 mb-1 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[16px] font-semibold text-white">{name}</h3>
        <div className="flex gap-3">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-gray-800 hover:underline rounded-full px-3 py-1 transition"
          >
            <FaGlobeAsia className="text-base" />
            <span>Live</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-gray-800 hover:underline rounded-full px-3 py-1 transition"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{desc}</p>
    </article>
  );
};

export default ProjectCard;
