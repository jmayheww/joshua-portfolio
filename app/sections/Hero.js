import { useInView } from "react-intersection-observer";
import Typing from "../components/Typing";
import { typedAttr } from "../data";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  return (
    <div className="relative h-[85vh] sm:h-full flex items-center justify-start">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-50"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center lg:justify-start w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto lg:ml-16 xl:ml-32 transition-opacity duration-1000 ${
          inView ? "opacity-100 delay-600" : "opacity-10"
        }`}
      >
        <div
          className={`w-full transition-all duration-1000 ${
            inView
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-8 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 max-w-screen-xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-jetbrains-mono">
              Hey there, I&rsquo;m
            </p>
            <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold font-jetbrains-mono leading-none">
              Joshua <span className="text-success">Mayhew</span>
            </h1>
            <div className="whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-gray-300">
              I craft <Typing wordsList={typedAttr} />
              code that <span className="text-primary"> works.</span>
            </div>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-jetbrains-mono text-gray-400">
              I’m a full-stack developer blending code and coffee in the heart
              of Los Angeles. I craft digital products that uplift users and
              bolster businesses. My values? Clean code, intuitive design, and
              fostering unforgettable digital journeys. Let&rsquo;s{` `}
              <a
                href="mailto:joshsmayhew@gmail.com"
                className="text-success hover:underline"
              >
                connect
              </a>
              {` `}
              where caffeine meets creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="#work"
          className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:shadow-md transition-transform transform hover:-translate-y-1 rounded-md hover:border hover:border-primary-500"
        >
          See my work
        </a>
      </div>
    </div>
  );
};
