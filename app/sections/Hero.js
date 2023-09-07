import { useInView } from "react-intersection-observer";
import Typing from "../components/Typing";
import { typedAttr } from "../data";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  const containerClasses = `
  flex justify-center items-center
  h-full
  overflow-hidden
  transition-all duration-1000
  transform ${
    inView ? "translateX(0) opacity-100 " : "translateX(100%) opacity-50"
  }
  ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-16
`;

  const contentClasses = `
  flex flex-col justify-center space-y-4
  w-10/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-5/8 2xl:w-5/8
  max-w-4xl  // This ensures your content doesn't stretch too wide on larger screens
`;

  const paragraphClasses = `
  mt-4
  text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl
  font-jetbrains-mono text-gray-400
`;

  const buttonContainerClasses = `
  mt-8
  transition-transform duration-300 transform
`;

  return (
    <div className={containerClasses} ref={ref}>
      <div className={contentClasses}>
        <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-white font-jetbrains-mono">
          Hey there, I&rsquo;m
        </p>
        <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold font-jetbrains-mono leading-none">
          Joshua <span className="text-success">Mayhew</span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug text-gray-300">
          I craft <Typing wordsList={typedAttr} />
          code that <span className="text-primary">works.</span>
        </div>

        <p className={paragraphClasses}>
          I’m a full-stack developer blending code and coffee in the heart of
          Los Angeles. I craft digital products that uplift users and bolster
          businesses. Let&rsquo;s{" "}
          <a
            href="mailto:joshsmayhew@gmail.com"
            className="text-success hover:underline"
          >
            connect
          </a>{" "}
          where caffeine meets creativity.
        </p>

        <div className={buttonContainerClasses}>
          <a
            href="#work"
            className="btn bg-primary-100 hover:bg-primary-400 text-white btn-xs sm:btn-md md:btn-md lg:btn-lg hover:shadow-md transition-transform transform hover:-translate-y-1 rounded-md border border-primary-500"
          >
            See my work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse">
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
