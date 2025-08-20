"use client";

import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

const Body = () => {
  return (
    <main className="px-6">
      <div className="flex items-center gap-4 my-6">
        <div className="text-lg font-semibold text-white">Work Highlights</div>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            id={proj.id}
            name={proj.name}
            desc={proj.desc}
            website={proj.website}
            github={proj.github}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;
