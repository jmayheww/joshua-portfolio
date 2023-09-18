import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";

export const Work = () => {
  const paragraphClasses = "text-sm sm:text-base font-jetbrains-mono";

  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
      <SectionHeader title="Projects" />

      {/* Project List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Single Project */}
        <div className="relative group">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-70 bg-primary z-10">
            <p className={`text-xl text-white ${paragraphClasses} text-center`}>
              Project Name
            </p>
          </div>
          <div className="relative z-0 overflow-hidden rounded-sm">
            <Image
              src="/images/project1.jpg"
              alt="Project 1"
              width={400}
              height={250}
              layout="responsive"
              className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>

        {/* You can replicate the above single project div for multiple projects */}
      </div>

      {/* More Information */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter tracking-tight text-white mb-4">
          Crafting Experiences.
        </h3>
        <p
          className={`${paragraphClasses} md:text-lg leading-relaxed text-gray-300`}
        >
          Each of my projects encapsulates an ethos of user-centric design and
          clean, efficient coding. Click on any project to learn more about its
          purpose, the challenges faced during its creation, and the tools used
          in its development.
        </p>
      </div>
    </section>
  );
};
