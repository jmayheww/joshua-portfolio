import { FaArrowRight } from "react-icons/fa";

export const ArticleCard = ({ article }) => {
  return (
    <div className="card bg-neutral rounded-sm shadow-md  p-4 md:p-6 mx-auto lg:max-w-3xl">
      {/* Image */}
      {article.image && (
        <div className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-4 xl:aspect-h-3 rounded-t-sm overflow-hidden mb-4">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Title with Gradient */}
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-neutral font-mono font-bold p-2 rounded-sm">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 font-inter text-gray-300 leading-relaxed">
          {article.description}
        </p>

        {/* Read More Link */}
        <a
          href={article.link}
          className="flex items-center text-success font-mono hover:underline transition-colors duration-200"
          target="_blank"
          rel="noreferrer"
        >
          View Article
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};
