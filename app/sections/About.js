import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { salesforceContent } from "../textContent/salesForceContent";
import { SkillsList } from "../components/SkillsList";

export const About = () => {
  const paragraphClasses = "text-sm sm:text-base font-jetbrains-mono";

  return (
    <section className="flex flex-col items-center py-16 px-8 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
      <SectionHeader title="About" />

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
            className={`text-lg sm:text-xl text-white ${paragraphClasses} mx-auto max-w-xs text-center block md:hidden max-w-xs`}
          >
            {salesforceContent.taglineMobile.text}
          </p>

          {/* Desktop Tagline */}
          <div className="hidden md:block">
            {salesforceContent.taglineDesktop.map((item, index) => (
              <p key={index} className={item.className}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* More About Text */}
      {salesforceContent.aboutSections.map((section, index) => (
        <div key={index}>
          <h3 className={section.titleClass}>{section.title}</h3>
          <p className={section.contentClass}>{section.content}</p>
        </div>
      ))}

      <div className="w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-inter tracking-tight text-primary mb-4 mt-2">
          {salesforceContent.skillsTagline[0].text}
        </h3>
        <SkillsList />
      </div>
    </section>
  );
};
