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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projects[
          activeTab === "email" ? "emailProjects" : "fullStackProjects"
        ].map((project, index) => (
          <InViewProjectCard
            key={project.title}
            project={project}
            delay={index * 0.1}
            isOdd={index % 2 !== 0}
          />
        ))}
        {/* {projects[activeTab === "email" ? "emailProjects" : "fullStackProjects"]
          .length %
          2 !==
          0 && (
          <div className="bg-gray-200 p-4 rounded-md text-center">See More</div>
        )} */}
      </div>
    </section>
  );
};

const InViewProjectCard = ({ project, delay, isOdd }) => {
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
