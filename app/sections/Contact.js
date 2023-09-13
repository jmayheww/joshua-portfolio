export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12">
      <div className="text-center max-w-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Get In Touch
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          I&rsquo;m always open to new opportunities and collaborations. Feel
          free to reach out to me.
        </p>
        <a
          href="mailto:joshsmayhew@gmail.com"
          className="inline-block bg-primary text-white font-medium text-lg py-3 px-8 rounded-sm transition duration-300 hover:bg-opacity-80 mb-8 shadow-md"
          aria-label="Email Me"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};
