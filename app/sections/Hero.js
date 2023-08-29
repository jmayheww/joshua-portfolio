import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  return (
    <div className="relative h-full">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-90"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center h-full pt-16 relative transition-opacity duration-1000 ${
          inView ? "opacity-100 delay-600" : "opacity-10"
        }`}
      >
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 ${
            inView
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-8 opacity-0"
          }`}
        >
          <div className="p-6">
            <h1 className="text-2xl">Welcome to my personal website!</h1>
            <h2 className="text-base mt-4 text-primary">
              I&rsquo;m Joshua Mayhew, a software engineer and computer science
              student at the University of Waterloo.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
