import { useInView } from "react-intersection-observer";
import Typing from "../components/Typing";
import { typedAttr } from "../data";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  return (
    <div className="relative h-[85vh] sm:h-full flex items-center justify-center sm:justify-start">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-50"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center w-full pl-4 sm:pl-12 md:pl-24 lg:pl-40 p-4 md:p-8 lg:justify-start transition-opacity duration-1000 ${
          inView ? "opacity-100 delay-600" : "opacity-10"
        }`}
      >
        <div
          className={`w-full lg:w-4/5 xl:w-3/4 transition-all duration-1000 ${
            inView
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-8 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-jetbrains-mono">
              Hey there, I&rsquo;m
            </p>
            <h1 className="whitespace-nowrap text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-extrabold font-jetbrains-mono leading-none">
              Joshua <span className="text-success">Mayhew</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-snug text-gray-300">
              I craft <Typing wordsList={typedAttr} />
              code that <span className="text-primary"> works.</span>
            </div>
            <p className="text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-jetbrains-mono text-gray-400">
              I&rsquo;m a fully-caffeinated full-stack developer based in Los
              Angeles.
            </p>
            <a
              href="mailto:your_email@example.com"
              className="text-primary hover:underline text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            >
              Got an idea? Let&rsquo;s collaborate.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
