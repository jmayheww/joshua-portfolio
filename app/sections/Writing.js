import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { articles } from "../data";

export const Writing = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-2 sm:space-y-4 md:space-y-8 lg:space-y-12 max-w-4xl mx-auto">
      <SectionHeader title="Writing" className="mb-2" />

      <div className="w-full grid grid-cols-1 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
};
