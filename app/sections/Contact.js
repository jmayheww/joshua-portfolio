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

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-12 md:mt-16 md:mb-16">
      <div className="text-center w-full max-w-lg px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          What&rsquo;s Next?
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
          Open to{" "}
          <span className="text-primary">projects and opportunities</span>. Have
          an idea brewing or a problem that needs solving? Just looking to chat?{" "}
          <span className="text-success">I&rsquo;d love to hear from you!</span>{" "}
          My inbox is always open, and my coffee is always fresh.
        </p>
        <a
          href="mailto:joshsmayhew@gmail.com"
          className={buttonClasses}
          aria-label="Email Me"
        >
          Say Hello
          {/* Optional: Add an SVG icon here if you'd like */}
        </a>
      </div>
    </div>
  );
};
