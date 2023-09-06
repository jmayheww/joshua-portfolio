import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Typing from "../components/Typing";
import { typedAttr } from "../data";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  return (
    <div className="relative h-full">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-50"></div>

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
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg text-white font-jetbrains-mono">
              Hey there, I'm
            </p>
            <h1 className="text-5xl font-extrabold font-jetbrains-mono leading-tight">
              <span className="text-accent">Joshua </span>
              <span className="text-accent">Mayhew.</span>
            </h1>
            <div className="text-4xl leading-snug text-gray-300">
              Brewing <Typing wordsList={typedAttr} /> web apps with the gusto
              of that first glorious sip of morning coffee.
            </div>
            <p className="text-lg font-jetbrains-mono text-gray-400 mt-4">
              A full-stack developer infusing caffeine's energy into every line
              of code. Committed to creating exceptional, user-centric digital
              experiences. Let's blend your vision with my code.
            </p>
            <a
              href="mailto:your_email@example.com"
              className="text-accent hover:underline mt-4"
            >
              Got a project in mind? Let's brew it together.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
