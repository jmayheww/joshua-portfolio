import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => (
  <div className="card w-96 glass bg-neutral rounded-md shadow-xl transform transition-transform duration-200 ">
    <figure className="relative overflow-hidden rounded-t-lg">
      <Image
        src={project.image}
        alt={project.title}
        layout="responsive"
        width={400}
        height={200}
        objectFit="cover"
      />
    </figure>
    <div className="card-body p-4">
      <h2 className="card-title text-lg font-semibold mb-2">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-primary transition-colors"
        >
          {project.title}
        </a>
      </h2>
      <p className="text-sm mb-2">{project.description}</p>

      {/* Displaying Tech Skills */}
      <div className="mt-2 flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono bg-gray-800 hover:bg-primary text-white py-0.5 px-2 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="card-actions flex justify-end">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-success mr-4 transition-colors"
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
