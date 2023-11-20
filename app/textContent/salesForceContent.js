// salesforceContent.js - Contains content for Salesforce-focused About section.

export const salesforceContent = {
  taglineMobile: {
    text: (
      <>
        Crafting <strong>responsive</strong>, <strong>high-impact</strong> email
        campaigns in Salesforce Marketing Cloud.
        <span className="block text-primary font-bold mt-2 text-xl">
          It&rsquo;s what I do.
        </span>
      </>
    ),
    className:
      "text-lg sm:text-xl text-white mx-auto max-w-xs text-center block md:hidden max-w-xs",
  },
  taglineDesktop: [
    {
      text: "Responsive. High-Impact. Effective.",
      className: "text-xl sm:text-2xl md:text-3xl text-white",
    },
    {
      text: "Salesforce Marketing Cloud Email Development.",
      className: "text-xl sm:text-2xl md:text-3xl text-primary",
    },
  ],
  aboutSections: [
    {
      title: "Design Meets Data in Email",
      content:
        "Transforming designs into dynamic, interactive HTML emails with a keen eye for detail and client objectives. Specialized in responsive, cross-client emails, I harness SFMC's dynamic features to create visually striking and functionally sound campaigns.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
    {
      title: "Data-Driven, User-Centric Approach",
      content:
        "Expertly crafting emails with HTML, CSS, and SFMC, ensuring seamless performance across all devices and clients. Utilizing SFMC's Journey Builder and Email Studio, I blend technical skill with marketing insights to optimize campaign reach and effectiveness.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
  ],
  skillsTagline: [
    {
      text: "SFMC Toolkit.",
      className:
        "text-lg sm:text-xl md:text-2xl font-inter tracking-tight text-primary mb-4 mt-2",
    },
  ],
};
