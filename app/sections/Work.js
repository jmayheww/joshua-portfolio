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
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-2 sm:space-y-4 md:space-y-8 lg:space-y-12 max-w-4xl mx-auto">
      <SectionHeader title="Work" className="mb-2" />

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <InViewProjectCard
            key={project.title}
            project={project}
            delay={index * 0.1}
          />
        ))}
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
