import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDev,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  FaJs,
  FaNode,
  FaReact,
  FaGem,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

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
  {
    category: "Front-End Development",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Styled-components",
    ],
    icon: <FaCode />,
  },
  {
    category: "Back-End Development",
    items: ["Node.js", "Ruby", "Ruby on Rails"],
    icon: <FaGem />,
  },
  {
    category: "Database",
    items: ["SQL (MySQL, PostgreSQL, SQLite)"],
    icon: <FaDatabase />,
  },
];
