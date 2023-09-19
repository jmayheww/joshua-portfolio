import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Work = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 ... max-w-screen-xl mx-auto">
      <SectionHeader title="Projects" className="mb-4" />
      <a
        href="/archive"
        className="text-xs font-mono text-gray-400 hover:underline hover:text-success mb-4"
      >
        view the archive
      </a>

      <div className="w-full grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <InViewProjectCard
            key={project.title}
            project={project}
            delay={index * 0.1} // stagger the delay based on index
          />
        ))}
        <h3 className="text-xl ... tracking-tight">Crafting Experiences.</h3>
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
      transition={{ duration: 0.5, delay: delay }} // add delay for staggered effect
    >
      <ProjectCard project={project} />
    </motion.div>
  );
};
