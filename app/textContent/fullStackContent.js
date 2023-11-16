// This file contains the text content along with styling classes for the About section.

export const fullStackContent = {
  taglineMobile: {
    text: (
      <>
        Code that&rsquo;s <strong>clean</strong>, designs that{" "}
        <strong>impact</strong>, experience that <strong>lasts.</strong>
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
      text: "Code that's clean.",
      className: "text-xl sm:text-2xl md:text-3xl text-white",
    },
    {
      text: "Designs that impact.",
      className: "text-xl sm:text-2xl md:text-3xl text-white",
    },
    {
      text: "Experience that lasts.",
      className: "text-xl sm:text-2xl md:text-3xl text-white",
    },
    {
      text: "It's what I do.",
      className: "text-xl sm:text-2xl md:text-3xl text-primary",
    },
  ],
  aboutSections: [
    {
      title: "Paralegal to Programmer",
      content:
        "Navigating the world of legal documentation refined my analytical edge. Today, I harness that rigor and precision in software development, ensuring every line of code is not just functional, but purposeful.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
    {
      title: "Coding with Intention",
      content:
        "I channel a cohesive vision - a synergized brew of innovation, drive, and caffeinated creativity - in every project I undertake. My aim? To craft digital experiences that captivate and serve both users and businesses.",
      titleClass:
        "text-lg sm:text-2xl md:text-2xl font-inter tracking-tight text-white mb-2 mt-2",
      contentClass:
        "text-sm sm:text-base font-jetbrains-mono md:text-lg leading-relaxed text-gray-300",
    },
  ],
};
