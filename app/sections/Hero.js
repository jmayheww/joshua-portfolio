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
            <p className="text-base text-primary font-mono text-normal font-normal">
              Hi, my name is
            </p>
            <h1 className="text-5xl font-extrabold leading-tight mt-0 mb-2 uppercase font-exo2">
              Joshua Mayhew.
            </h1>
            <h2 className="text-4xl leading-[5.1rem] mt-0 mb-2 uppercase font-exo2">
              I&rsquo;m a software engineer and computer science student at the
              University of Waterloo.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
