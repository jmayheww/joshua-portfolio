import { FaArrowRight } from "react-icons/fa";

export const ArticleCard = ({ article }) => {
  return (
    <div className="m-4 max-w-3xl mx-auto rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-neutral text-white">
      {/* Image */}
      {article.image && (
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover h-full w-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Title with Gradient */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-neutral p-2 rounded-sm inline-block">
          {article.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-gray-300">{article.description}</p>

        {/* Read More Link */}
        <a
          href={article.link}
          className="flex items-center text-success hover:text-white transition-colors duration-300"
        >
          View Article
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};
