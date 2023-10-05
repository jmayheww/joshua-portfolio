import { SectionHeader } from "../components/SectionHeader";

export const Contact = () => {
  const buttonClasses = `
    inline-flex items-center justify-center
    py-3 md:py-4 px-5 md:px-7
    text-sm md:text-lg
    bg-neutral text-white
    border border-primary-500
    rounded-sm shadow-md
    transition-all transform
    hover:bg-primary hover:shadow-xl hover:-translate-y-1
    active:scale-95 focus:outline-none focus:ring focus:ring-primary-200
    font-inter font-bold
  `;

  const paragraphClasses = `
    text-base md:text-lg text-gray-400
    mb-10 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16
    leading-relaxed
  `;

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-4xl mx-auto">
      <SectionHeader title="What's Next?" className="mb-4" />
      <div className="text-center w-full max-w-lg px-2 sm:px-4 md:px-6">
        <p className={paragraphClasses}>
          Open to{" "}
          <span className="text-primary">projects and opportunities</span>. Have
          an idea brewing or a problem that needs solving? Just looking to chat?{" "}
          <span className="text-success">I&rsquo;d love to hear from you!</span>{" "}
          My inbox is always open, and my coffee is always fresh.
        </p>
        <a
          href="mailto:joshsmayhew@gmail.com"
          className={buttonClasses}
          target="_blank"
          rel="noreferrer"
          aria-label="Email Me"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
