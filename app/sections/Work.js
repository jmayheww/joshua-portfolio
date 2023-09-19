import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data";

const paragraphClasses = "text-sm sm:text-base font-jetbrains-mono";

export const Work = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-4xl mx-auto">
      <SectionHeader title="Projects" className="mb-4" />

      <a
        href="/archive"
        className="text-xs font-mono text-gray-400 hover:underline hover:text-success"
      >
        view the archive
      </a>

      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-inter tracking-tight mb-4">
          Crafting Experiences.
        </h3>
      </div>
    </section>
  );
};
