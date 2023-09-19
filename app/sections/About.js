import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { SkillsList } from "../components/SkillsList";

export const About = () => {
  const paragraphClasses = "text-sm sm:text-base font-jetbrains-mono";

  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="flex flex-col md:flex-row w-full items-start md:space-x-10">
        {/* Portrait */}
        <div className="relative w-2/3 sm:w-1/2 md:w-1/3 mx-auto md:mx-0 mb-8 md:mb-0">
          <div className="absolute -bottom-3 -right-4 w-full h-full border-4 border-success rounded-sm z-0"></div>
          <div className="relative w-full z-10 overflow-hidden rounded-sm">
            <Image
              src="/images/headshot.jpg"
              alt="Software Engineer Headshot"
              width={240}
              height={240}
              layout="responsive"
              className="transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-success mix-blend-multiply hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-col space-y-4 w-full md:w-2/3 text-left md:pl-10">
          {/* Mobile Tagline */}
          <p
            className={`text-xl sm:text-2xl md:text-3xl text-white ${paragraphClasses} block md:hidden max-w-xs`}
          >
            Code that&rsquo;s <strong>clean</strong>, designs that{" "}
            <strong>impact</strong>, experience that <strong>lasts.</strong>{" "}
            <span className="text-primary font-bold">
              It&rsquo;s what I do.
            </span>
          </p>

          {/* Desktop Tagline */}
          <div className="hidden md:block">
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-white ${paragraphClasses}`}
            >
              Code that&rsquo;s clean.
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-white ${paragraphClasses}`}
            >
              Designs that impact.
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-white ${paragraphClasses}`}
            >
              Experience that lasts.
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-primary ${paragraphClasses}`}
            >
              It&rsquo;s what I do.
            </p>
          </div>
        </div>
      </div>

      {/* More About Text */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter tracking-tight text-white mb-4">
          Paralegal to Programmer
        </h3>
        <p
          className={`${paragraphClasses} md:text-lg leading-relaxed text-gray-300`}
        >
          Navigating the world of legal documentation refined my analytical
          edge. Today, I harness that rigor and precision in software
          development, ensuring every line of code is not just functional, but
          purposeful.
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-inter tracking-tight text-primary mb-4">
          Coding with Intention.
        </h3>
        <p
          className={`${paragraphClasses} md:text-lg leading-relaxed text-gray-400`}
        >
          I channel a cohesive vision - a synergized brew of innovation, drive,
          and caffeinated creativity - in every project I undertake. My aim? To
          craft digital experiences that captivate and serve both users and
          businesses.
        </p>
      </div>

      <div className="w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-inter tracking-tight text-primary mb-4">
          Fully Stacked Toolkit.
        </h3>
        <SkillsList />
      </div>
    </section>
  );
};
