export const ArticleCard = ({ article }) => {
  const cardClasses = `
        m-4
        max-w-3xl
        mx-auto
        rounded-sm
        shadow-lg
        overflow-hidden
        hover:shadow-xl hover:scale-105
        transition-shadow duration-300
        bg-neutral
        text-white
        transform transition-transform duration-200  // Add transition for the transform property
      `;

  const headerClasses = `
        p-4
        bg-gradient-to-r
        from-primary
        to-neutral
        font-jetbrains-mono
        font-bold
      `;

  const contentClasses = `
        p-4
        font-jetbrains-mono
        text-gray-300
      `;

  const linkClasses = `
        text-success
        hover:underline
        transition-colors
        duration-300
      `;

  return (
    <div className={cardClasses}>
      <div className={headerClasses}>
        <h3 className="text-xl">{article.title}</h3>
      </div>
      <div className={contentClasses}>
        <p className="mb-4">{article.description}</p>
        <a href={article.link} className={linkClasses}>
          Read More
        </a>
      </div>
    </div>
  );
};
