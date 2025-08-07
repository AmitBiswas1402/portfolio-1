"use client";

import ProjectCard from "./ProjectCard";

const Body = () => {
  return (
    <div className="px-6">
      <div className="flex items-center gap-4 my-6">
        <div className="text-lg font-semibold text-white">Work Highlights</div>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          id="1"
          name="Converso - AI LMS SaaS"
          desc="A SaaS app of a Learning Management System with the creation of companion courses, including voice interaction."
          website="https://ai-voice-converso.vercel.app/"
          github="https://github.com/AmitBiswas1402/ai-voice-2"
        />
        <ProjectCard 
          id="2"
          name="Other Project"
          desc="Some additional project to showcase. Clean UI and well organized description like in the inspiration."
          website="https://example.com"
          github="https://github.com/example/repo"
        />
        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Body;
