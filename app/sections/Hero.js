import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  return (
    <div className="relative h-full font-fira-mono">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-90"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center h-full pt-20 lg:pt-32 relative transition-opacity duration-1000 ${
          inView ? "opacity-100 delay-600" : "opacity-10"
        }`}
      >
        <div
          className={`w-full lg:w-2/3 transition-all duration-1000 ${
            inView
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-8 opacity-0"
          }`}
        >
          <div className="p-6 lg:p-12">
            <p className="text-lg text-primary mb-2">Hi, my name is</p>
            <h1 className="text-6xl font-extrabold leading-tight mt-0 mb-4 uppercase">
              Joshua Mayhew.
            </h1>
            <h2 className="text-5xl leading-snug mt-0 mb-4 uppercase">
              I&rsquo;m a software engineer and computer science student at the
              University of Waterloo.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
