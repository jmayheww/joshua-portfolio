import { useInView } from "react-intersection-observer";
import Typing from "../components/Typing";
import { salesForceHeroContent } from "../textContent/sfmcHeroContent";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  const containerClasses = `
  flex justify-center items-center
  h-screen
  overflow-hidden
  transition-all duration-1000
  transform ${
    inView ? "translateX(0) opacity-100 " : "translateX(100%) opacity-50"
  }
  ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-16
`;

  const contentClasses = `
  flex flex-col justify-start space-y-6 sm:space-y-10
  w-10/12 sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-5/8 2xl:w-5/8
  max-w-4xl
`;

  const paragraphClasses = `
  mt-2
  text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl
  font-jetbrains-mono text-gray-400
`;

  const buttonContainerClasses = `
  mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-18
  flex justify-start
`;

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
    <div className={containerClasses} ref={ref}>
      <div className={contentClasses}>
        <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-white font-jetbrains-mono">
          {salesForceHeroContent.greeting}
        </p>
        <h1 className="whitespace-nowrap fold-portrait:whitespace-normal fold-landscape:whitespace-nowrap text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold font-jetbrains-mono leading-none">
          <span className="text-white">{salesForceHeroContent.first_name}</span>
          <span className="text-success">
            {" "}
            {salesForceHeroContent.last_name}
          </span>
        </h1>

        <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug text-gray-300">
          {salesForceHeroContent.craftingText}
          {` `}
          <Typing wordsList={salesForceHeroContent.typingAttributes} />
          <br />
          <span className="text-primary">
            {salesForceHeroContent.craftingHighlight}
          </span>
        </div>

        <p className={paragraphClasses}>
          {salesForceHeroContent.description}{" "}
          <a
            href={salesForceHeroContent.emailLink}
            target="_blank"
            rel="noreferrer"
            className="text-success hover:underline"
          >
            {salesForceHeroContent.emailLinkText}
          </a>{" "}
          {salesForceHeroContent.descriptionEnd}
        </p>

        <div className={`${buttonContainerClasses}`}>
          <a href="#work" className={buttonClasses} aria-label="View my work">
            {salesForceHeroContent.callToAction}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 md:w-6 h-4 md:h-6 ml-2 transition-transform transform hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse">
          <a href="#about" aria-label="Scroll to about section">
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
