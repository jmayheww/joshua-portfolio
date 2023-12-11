import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTechExpanded, setIsTechExpanded] = useState(false);

  const isLargeScreen = () => window.innerWidth >= 1024; // Responsive check (consider using a more React-friendly approach)

  return (
    <div className="card bg-neutral rounded-lg shadow-md transition-transform duration-200 p-4 md:p-6 mx-auto lg:max-w-3xl">
      {/* Image Section */}
      <figure
        className={`relative w-full ${
          project.isEmailProject
            ? "aspect-w-1 aspect-h-1 mb-[-1em]"
            : "aspect-w-16 aspect-h-9 mb-4"
        } md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-4 xl:aspect-h-3 rounded-lg overflow-hidden`}
      >
        {!imageLoaded && (
          <div
            className="animate-pulse bg-gray-200"
            style={{ height: project.isEmailProject ? "300px" : "300px" }}
          ></div>
        )}
        <img
          src={project.canvaMockup || project.desktopMockup}
          alt={project.title}
          className={`object-cover w-full h-full rounded-lg transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </figure>

      {/* Content Section */}
      <article className="flex flex-col space-y-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-neutral font-mono p-2 rounded-lg">
          {project.title}
        </h2>

        {/* Description and See More Button */}
        <div>
          <p
            className={`text-gray-300 ${
              isDescriptionExpanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>
          {(project.description.length > 100 ||
            project.description.split(" ").length > 20) && (
            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-primary hover:text-primary-dark text-sm mt-2"
            >
              {isDescriptionExpanded ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {/* Technologies and More Button */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies
            .slice(
              0,
              isTechExpanded || !isLargeScreen()
                ? project.technologies.length
                : 3
            )
            .map((tech, index) => (
              <span
                key={index}
                className="text-xs font-mono bg-gray-800 hover:bg-primary text-white py-0.5 px-2 rounded-sm transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          {!isTechExpanded &&
            isLargeScreen() &&
            project.technologies.length > 3 && (
              <button
                onClick={() => setIsTechExpanded(true)}
                className="text-primary hover:text-primary-dark text-sm lg:inline-block hidden"
              >
                +{project.technologies.length - 3} More
              </button>
            )}
          {isTechExpanded && isLargeScreen() && (
            <button
              onClick={() => setIsTechExpanded(false)}
              className="text-primary hover:text-primary-dark text-sm lg:inline-block hidden"
            >
              See Less
            </button>
          )}
        </div>

        {/* Project Links */}
        <div className="flex justify-end space-x-4 mt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="bg-gray-800 hover:bg-primary p-2 rounded-md transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              className="bg-gray-800 hover:bg-primary p-2 rounded-md transition-colors duration-200"
            >
              <FaExternalLinkAlt className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
};
