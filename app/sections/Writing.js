import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { articles } from "../data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 }, // Adjusted y value for a subtle animation
  visible: { opacity: 1, y: 0 },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 80 }, // Adjusted x value for a subtle animation
  visible: { opacity: 1, x: 0 },
};

export const Writing = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 ">
      <SectionHeader title="Writing" className="mb-2" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-10 md:mb-12 ">
        {articles.map((article, index) => (
          <InViewArticleCard
            key={article.title}
            article={article}
            delay={index * 0.1}
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <a
          href="https://dev.to/jmayheww"
          className="text-sm sm:text-gray-400 font-mono text-gray-400 hover:underline py-2 px-4"
          target="_blank"
          rel="noreferrer"
          aria-label="View the archive of my articles on Dev.to"
        >
          VIEW THE ARCHIVE
        </a>
      </div>
    </section>
  );
};

const InViewArticleCard = ({ article, delay }) => {
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
      <ArticleCard article={article} />
    </motion.div>
  );
};
