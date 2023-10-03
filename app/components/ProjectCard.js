import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => (
  <a
    href={project.links.demo}
    target="_blank"
    rel="noreferrer"
    className="card flex flex-col md:flex-row bg-neutral rounded-sm shadow-md transform transition-transform duration-200 space-y-4 md:space-y-0 md:space-x-4 p-4 hover:scale-105"
  >
    {/* Image Section */}
    <figure className="flex-none w-full md:w-1/2 overflow-hidden rounded-sm h-auto relative">
      <div className="mockup-phone absolute right-1 top-1/2 transform -translate-y-1/2 h-full w-auto aspect-[9/16] z-10 bg-black shadow-lg rounded-md border-2 border-gray-700 flex flex-col justify-center items-center">
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img
              src={project.mobileMockup}
              alt={project.title}
              className="absolute inset-0 object-fill w-full h-full z-10"
            ></img>
          </div>
        </div>
      </div>
      <div className="mockup-desktop border-black bg-primary absolute inset-0 h-full w-auto aspect-[20/9] shadow-lg">
        <div className="flex justify-center items-center h-full">
          <img
            src={project.desktopMockup}
            alt={project.title}
            className="absolute inset-0 object-cover w-full h-full"
          ></img>
        </div>
      </div>
    </figure>

    {/* Content Section */}
    <div className="flex flex-col justify-between flex-grow space-y-4 md:space-y-2">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-neutral font-mono font-bold p-2 rounded-lg">
          {project.title}
        </h2>
        <p className="text-sm md:text-base mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs md:text-sm font-mono bg-gray-800 hover:bg-primary text-white py-0.5 px-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success transition-colors p-2 rounded-lg"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success transition-colors p-2 rounded-lg"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </a>
);
