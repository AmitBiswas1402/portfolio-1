"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="m-4">
      <div className="flex">
        <Image
          src="/pic.png"
          className="rounded-full"
          width={140}
          height={140}
          alt="Profile picture"
        />
        <div className="m-4">
          <div className="text-3xl font-bold mb-2">Amit Biswas</div>
          <div className="flex text-slate-400">
            <MapPin /> <span className="ml-2 text-l">Kolkata, India</span>
          </div>

          <div className="mt-4 flex gap-5 flex-wrap text-white">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amitbiswas1402/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400"
            >
              <FaLinkedin size={20} />
              <span className="ml-2">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AmitBiswas1402/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-400"
            >
              <FaGithub size={20} />
              <span className="ml-2">GitHub</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/AmitBiswas1402/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-yellow-400"
            >
              <SiLeetcode size={20} />
              <span className="ml-2">Leetcode</span>
            </a>

            {/* Resume */}
            <a
              href="https://docs.google.com/document/d/1Su8xoLLqCohXuoB6f-e_kI1F0VuYT0vxstArHKtVXtE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-400"
            >
              <PiReadCvLogo size={20} />
              <span className="ml-2">Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Paragraph with margin top */}
      <h3 className="mt-6 m-2 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium ratione perspiciatis quo odit vero, minus exercitationem aut possimus tenetur doloremque sint veritatis aliquid numquam nostrum, dolor magni nam omnis!
      </h3>
    </section>
  );
};

export default Hero;
