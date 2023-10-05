import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => (
  <div className="card bg-neutral rounded-sm shadow-md transition-transform duration-200 p-4 md:p-6 mx-auto lg:max-w-3xl">
    {/* The 'mx-auto' centers the card, and 'lg:max-w-3xl' limits its width on larger screens. Adjust '3xl' to your preference. */}
    {/* --- Image Section --- */}
    <figure className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-4 xl:aspect-h-3 rounded-sm overflow-hidden mb-4">
      {/* Desktop Mockup */}
      {project.desktopMockup && (
        <div className="mockup-desktop w-full h-full">
          <img
            src={project.desktopMockup}
            alt={project.title}
            className="object-fit object-center w-full h-full rounded-sm"
            loading="lazy"
          />
        </div>
      )}
      {/* Mobile Mockup - Overlay */}
      {project.mobileMockup && (
        <div className="mobile-mockup absolute bottom-[-2px] right-[-1px] w-1/5 md:w-1/6 lg:w-1/8 xl:w-1/10 2xl:w-1/12 z-20 rounded-md shadow-xl border-4 border-gray-800">
          <img
            src={project.mobileMockup}
            alt={`${project.title} - Mobile View`}
            className="object-fit object-center w-full h-full rounded-sm"
            loading="lazy"
          />
        </div>
      )}
    </figure>

    {/* --- Content Section --- */}
    <article className="flex flex-col justify-between space-y-4">
      {/* Content Details */}
      <div>
        <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-neutral font-mono font-bold p-2 rounded-sm">
          {project.title}
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>{" "}
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-gray-800 hover:bg-primary text-white py-0.5 px-2 rounded-sm transition-transform duration-200 "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Project Links */}
      <div className="flex justify-end space-x-4">
        {/* Added 'justify-end' to move the buttons to the right */}
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
