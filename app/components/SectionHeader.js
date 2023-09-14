export const SectionHeader = ({ title }) => (
  <div className="mb-8 text-gray-300 text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-jetbrains-mono leading-relaxed">
      {title}
    </h2>
    <div className="w-1/3 h-0.5 bg-primary mx-auto mt-2"></div>
  </div>
);
