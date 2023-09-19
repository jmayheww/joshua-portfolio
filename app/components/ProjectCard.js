import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => (
  <div className="card flex flex-col md:flex-row bg-neutral rounded-sm shadow-md transform transition-transform duration-200 space-y-4 md:space-y-0 md:space-x-4 p-4 hover:scale-105">
    {/* Image Section */}
    <figure className="flex-none w-full md:w-1/3 overflow-hidden rounded-sm mb-4 md:mb-0">
      <Image
        src={project.image}
        alt={project.title}
        layout="responsive"
        width={400}
        height={250}
        objectFit="cover"
      />
    </figure>

    {/* Content Section */}
    <div className="flex flex-col justify-between flex-grow space-y-4">
      <div>
        <h2 className="card-title text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-neutral font-jetbrains-mono font-bold p-2 rounded-sm">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-success transition-colors"
          >
            {project.title}
          </a>
        </h2>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-gray-800 hover:bg-primary text-white py-0.5 px-2 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="card-actions flex justify-end space-x-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success transition-colors"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);
