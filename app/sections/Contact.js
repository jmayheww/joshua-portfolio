export const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl mb-8">
            I&rsquo;m always open to new opportunities and collaborations. Feel
            free to reach out to me.
          </p>
          <a
            href="mailto:joshsmayhew@gmail.com"
            className="btn btn-primary text-lg py-2 px-6 rounded-md hover:bg-opacity-80"
          >
            Email Me
          </a>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 mt-8">
          <a href="#your-linkedin-link" className="btn btn-primary btn-icon">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="#your-github-link" className="btn btn-primary btn-icon">
            <i className="uil uil-github-alt"></i>
          </a>
          {/* Add more social media icons and links */}
        </div>
      </div>
    </div>
  );
};
