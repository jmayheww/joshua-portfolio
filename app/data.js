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
      github: "https://github.com/jmayheww/infinite-eats",
      demo: "https://infinite-eats.onrender.com/home",
    },
    image: "/images/infinite-features.JPG",
    description:
      "A dynamic inventory management system focusing on user experience, data security, and efficient transaction processes.",
    technologies: [
      "React.js",
      "Ruby on Rails",
      "Stripe API",
      "Bcrypt",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Integrated Stripe API, enhancing user transactions' safety and commercial viability.",
      "Developed a backend using Ruby on Rails with Bcrypt, ensuring fortified data encryption and user privacy.",
      "Deployed the application on Render with PostgreSQL, achieving online robustness and database efficiency.",
    ],
  },
  {
    title: "Book-It",
    links: {
      github: "https://github.com/jmayheww/book-it-app", // Replace with actual URL
      demo: "Demo_URL_for_BookIt", // Replace with actual URL
    },
    image: "/path_to_book_it_image.jpg", // Replace with actual image path
    description:
      "A comprehensive hotel booking platform tailored to provide users with an efficient and enjoyable booking experience, leveraging the power of React.js and Ruby on Rails.",
    technologies: ["React.js", "Ruby on Rails", "Bcrypt"],
    highlights: [
      "Crafted an intuitive hotel browsing system with React.js, enabling users to swiftly access essential details.",
      "Innovated a dynamic booking feature, allowing users to customize reservations by dates and guests.",
      "Incorporated Bcrypt for authentication, strengthening user data security and account management.",
    ],
  },
  {
    title: "Nomad List",
    links: {
      github: "https://github.com/jmayheww/phase-1-project-NomadListApp", // Replace with actual URL
      demo: "Demo_URL_for_NomadList", // Replace with actual URL
    },
    image: "/path_to_nomad_list_image.jpg", // Replace with actual image path
    description:
      "A dedicated platform designed for digital nomads and travelers to assess and compare global cities based on in-depth quality-of-life metrics.",
    technologies: [
      "Teleport API",
      "Some_other_technology", // Replace with actual technology (if any)
    ],
    highlights: [
      "Utilized Teleport API, delivering detailed city insights for digital nomads and travelers.",
      "Designed a dual-view for city comparisons, facilitating informed decision-making for users.",
      "Curated engaging city profiles in response to the growth of remote work, aiding users in finding optimal destinations.",
    ],
  },
  // ... Add other projects in a similar format
];
