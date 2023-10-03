import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 }, // Adjusted y value for a subtle animation
  visible: { opacity: 1, y: 0 },
};

export const Work = () => {
  return (
    <section className="py-12 px-4 max-w-screen-xl mx-auto">
      <SectionHeader title="Work" className="mb-8 text-center" />
      <a
        href="/archive"
        className="text-xs font-mono text-gray-400 hover:underline hover:text-success mb-8 block text-center"
      >
        View the archive
      </a>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <InViewProjectCard
            key={project.title}
            project={project}
            delay={index * 0.1}
          />
        ))}
        <h3 className="text-xl font-semibold tracking-tight text-center">
          Crafting Experiences.
        </h3>
      </div>
    </section>
  );
};

const InViewProjectCard = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delay }}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
};
