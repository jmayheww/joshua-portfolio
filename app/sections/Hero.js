import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the appearance will only run once
    threshold: 0.9, // Specifies what percentage of the target element is visible
  });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center h-full bg-base-100 bg-opacity-90 pt-16 ${
        inView ? "opacity-100" : "opacity-10"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="p-6">
          <h1 className="text-2xl">Welcome to my personal website!</h1>
          <h2 className="text-base mt-4 text-primary">
            I&rsquo;m Joshua Mayhew, a software engineer and computer science
            student at the University of Waterloo.
          </h2>
        </div>
      </div>
    </div>
  );
};
