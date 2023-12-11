import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { TabButtons } from "../components/TabButtons";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const ProjectList = ({ projectType, projects }) => {
  const filteredProjects =
    projectType === "email"
      ? projects.emailProjects
      : projects.fullStackProjects;

  return (
    <>
      {filteredProjects.map((project, index) => (
        <InViewProjectCard
          key={project.title}
          project={project}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};

const InViewProjectCard = React.memo(({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInFromRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay: delay }}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
});

InViewProjectCard.displayName = "InViewProjectCard";

export const Work = () => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <section className="flex flex-col items-center ...">
      <SectionHeader title="Work" className="mb-2" />
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectList projectType={activeTab} projects={projects} />
      </div>
    </section>
  );
};
