import { FaGithub, FaLinkedin, FaInstagram, FaDev } from "react-icons/fa";

export const sectionLinks = ["about", "work", "writing", "contact"];

// utils/words.js
export const typedAttr = [
  "clean",
  "robust",
  "scalable",
  "responsive",
  "efficient",
  "secure",
  "dynamic",
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jmayheww",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshua-mayhew-dev/",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/joshmayhem_vxx/",
    Icon: FaInstagram,
  },

  {
    name: "Dev.to",
    url: "https://dev.to/jmayheww",
    Icon: FaDev,
  },
];

export const techSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ruby",
  "Ruby on Rails",
  "SQL",
  "Stripe",
];

export const projects = [
  {
    title: "Infinite Eats",
    links: {
      github: "#",
      demo: "#",
    },
    image: "/images/infinite-features.JPG",
    description:
      "A dynamic inventory management system focusing on user experience, data security, and efficient transaction processes.",
    technologies: [
      "Stripe API",
      "Ruby on Rails",
      "Bcrypt",
      "PostgreSQL",
      "Render",
    ],
    highlights: [
      "Integrated Stripe API, enhancing user transactions' safety and commercial viability.",
      "Developed a backend using Ruby on Rails with Bcrypt, ensuring fortified data encryption and user privacy.",
      "Deployed the application on Render with PostgreSQL, achieving online robustness and database efficiency.",
    ],
  },
  // ... Add other projects in a similar format
];
