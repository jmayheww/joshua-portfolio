// About.js
import { useState, useEffect } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { salesforceContent } from "../textContent/salesForceContent";
import { techSkills } from "../data";
import { SkillsList } from "../components/SkillsList";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="flex flex-col items-center py-16 px-8 sm:px-6 md:px-8 lg:px-8 space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-4xl mx-auto">
      <SectionHeader title="About" />

      <div className="flex flex-col md:flex-row w-full items-start md:space-x-10">
        <Portrait isMobile={isMobile} />
        <Tagline content={salesforceContent} isMobile={isMobile} />
      </div>

      {salesforceContent.aboutSections.map((section, index) => (
        <AboutSection key={index} section={section} />
      ))}

      <SkillHeader skillsLabel={salesforceContent.skillsTagline} />

      <SkillsList
        skillsLabel={salesforceContent.skillsTagline}
        techSkills={techSkills}
      />
    </section>
  );
};

// Portrait.js
import Image from "next/image";

export const Portrait = ({ isMobile }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true); // Turn off the overlay when touched
  };

  const handleTouchEnd = (e) => {
    // Check if the touch ended outside the portrait
    if (!document.getElementById("portrait").contains(e.target)) {
      setIsTouched(false); // Reapply the overlay
    }
  };

  useEffect(() => {
    if (isMobile) {
      // Add event listener to the document to handle touch end
      document.addEventListener("touchend", handleTouchEnd, false);
    }

    // Cleanup the event listener
    return () => {
      if (isMobile) {
        document.removeEventListener("touchend", handleTouchEnd, false);
      }
    };
  }, [isMobile]);

  const overlayClasses = isTouched
    ? "opacity-0"
    : "hover:opacity-0 opacity-100";

  return (
    <div className="relative w-2/3 sm:w-1/2 md:w-1/3 mx-auto md:mx-0 mb-8 md:mb-0">
      <div className="absolute -bottom-3 -right-4 w-full h-full border-4 border-success rounded-sm z-0"></div>
      <div className="relative w-full z-10 overflow-hidden rounded-sm">
        <div
          id="portrait"
          className="relative overflow-hidden rounded-sm transition-transform duration-300"
          onTouchStart={isMobile ? handleTouchStart : null}
        >
          <Image
            src="/images/headshot.jpg"
            alt="Software Engineer Headshot"
            width={240}
            height={240}
            layout="responsive"
          />
          <div
            className={`absolute top-0 left-0 w-full h-full bg-success mix-blend-multiply transition-opacity duration-300 ${overlayClasses}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Tagline.js
export const Tagline = ({ content }) => {
  return (
    <div className="flex flex-col space-y-4 w-full md:w-2/3 text-left md:pl-10">
      {/* Mobile Tagline */}
      <p className="text-lg sm:text-xl text-white text-sm sm:text-base font-jetbrains-mono mx-auto max-w-xs text-center block md:hidden">
        {content.taglineMobile.text}
      </p>

      {/* Desktop Tagline */}
      <div className="hidden md:block">
        {content.taglineDesktop.map((item, index) => (
          <p key={index} className={item.className}>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

// AboutSection.js
export const AboutSection = ({ section }) => {
  return (
    <div>
      <h3 className={section.titleClass}>{section.title}</h3>
      <p className={section.contentClass}>{section.content}</p>
    </div>
  );
};

export const SkillHeader = ({ skillsLabel }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg sm:text-xl md:text-2xl font-inter tracking-tight text-primary mb-4 mt-2">
        {skillsLabel[0].text}
      </h3>
    </div>
  );
};
