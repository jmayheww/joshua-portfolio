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
        "Expert in transforming design mockups into dynamic, interactive email content, ensuring every pixel aligns with the client's vision and campaign objectives. I specialize in developing responsive, cross-client HTML emails, backed by a robust understanding of SFMC. My strength lies in integrating SFMC's dynamic capabilities with the technical demands of email design, ensuring campaigns are not only visually appealing but also functionally effective.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
    {
      title: "Data-Driven, User-Centric Approach",
      content:
        "Through a comprehensive grasp of HTML, CSS, and SFMC, I create emails that perform seamlessly across devices and email clients. I am adept at leveraging SFMC's tools like Journey Builder and Email Studio to optimize campaign reach and impact, embodying a unique blend of technical acumen and strategic marketing insight. ",
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
