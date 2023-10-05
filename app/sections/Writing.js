import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { articles } from "../data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 }, // Adjusted y value for a subtle animation
  visible: { opacity: 1, y: 0 },
};

export const Writing = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
      <SectionHeader title="Writing" className="mb-2" />

      <div className="w-full grid grid-cols-1 gap-8 mb-8 sm:mb-10 md:mb-12 ">
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
      <ArticleCard article={article} />
    </motion.div>
  );
};
