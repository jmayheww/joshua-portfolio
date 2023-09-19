import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { articles } from "../data";

export const Writing = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 max-w-screen-xl mx-auto">
      <SectionHeader title="Writing" className="mb-4" />
      <a
        href="/archive"
        className="text-xs font-mono text-gray-400 hover:underline hover:text-success mb-4"
      >
        view the archive
      </a>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
};
