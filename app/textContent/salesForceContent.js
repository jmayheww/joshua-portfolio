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
      title: "Blending Development and Marketing",
      content:
        "Bridging a solid full-stack development background with Salesforce Marketing Cloud expertise. Specializing in HTML Email Development and leveraging SFMC tools to create personalized, impactful campaigns.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
    {
      title: "Data-Driven, User-Centric Approach",
      content:
        "Employing a data-driven and user-centric approach in email marketing. Constantly exploring new technologies and strategies to stay at the forefront of industry trends.",
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
