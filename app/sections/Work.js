import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { TabButtons } from "../components/TabButtons";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 }, // Adjusted y value for a subtle animation
  visible: { opacity: 1, y: 0 },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 80 }, // Adjusted x value for a subtle animation
  visible: { opacity: 1, x: 0 },
};

export const Work = () => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <section className="flex flex-col items-center">
      <SectionHeader title="Work" className="mb-2" />

      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-1 gap-8">
        {activeTab === "email" &&
          projects.emailProjects.map((project, index) => (
            <InViewProjectCard
              key={project.title}
              project={project}
              delay={index * 0.1}
            />
          ))}
        {activeTab === "fullstack" &&
          projects.fullStackProjects.map((project, index) => (
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
    threshold: 0.2,
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
};
