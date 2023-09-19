import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const paragraphClasses = "text-sm sm:text-base font-jetbrains-mono";

export const ProjectCard = ({ project }) => (
  <div className="transition-transform transform hover:-translate-y-2 hover:shadow-xl rounded-md p-4 bg-opacity-60 backdrop-blur-md hover:bg-opacity-70 hover:bg-gray-800">
    <div
      className="relative rounded-md overflow-hidden mb-4"
      style={{ width: "100%", height: "200px", position: "relative" }}
    >
      <div className="absolute inset-0 bg-black opacity-10 z-20"></div>
      <Image
        src={project.image}
        alt={project.title}
        layout="responsive"
        width={200}
        height={100}
        objectFit="cover"
        className="z-10"
      />
    </div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold mb-3 text-gray-300">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-success"
        >
          {project.title}
        </a>
      </h3>
      <div className="flex space-x-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
    <p className={`${paragraphClasses} text-base mb-6`}>
      {project.description}
    </p>
    <ul className="flex flex-wrap gap-4">
      {project.technologies.map((tech) => (
        <li
          key={tech}
          className="text-xs font-mono bg-gray-800 hover:bg-gray-700 text-white py-0.5 px-2 rounded-sm"
        >
          {tech}
        </li>
      ))}
    </ul>
  </div>
);
