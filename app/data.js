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
    description: `Infinite Eats is a dynamic inventory management system that champions user experience. Notably, it integrates the Stripe API for enhanced transaction safety, relies on Ruby on Rails with Bcrypt for fortified data security, and is deployed on Render with PostgreSQL for database efficiency.`,
    technologies: [
      "React.js",
      "Ruby on Rails",
      "Stripe API",
      "Bcrypt",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Murder Mystery",
    links: {
      github: "https://github.com/jamesMAwalker/murder-mystery",
      demo: "https://murder-mystery-ielts.vercel.app/",
    },
    image: "/Image_URL", // Replace with actual image URL
    description:
      "A captivating web-based murder mystery game developed as a paid contract project for a local educator. This interactive application challenges players to solve a complex murder case by gathering clues, interacting with in-game characters, and using deductive reasoning. It was designed to enhance the educator's IELTS curriculum, offering students an engaging and educational experience. Developed using TypeScript and Next.js, it features a sleek user interface with seamless user authentication powered by Clerk and a secure database managed by Convex.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Clerk (User Authentication)",
      "Convex (Database)",
      "Tailwind CSS",
    ],
  },

  {
    title: "Book-It",
    links: {
      github: "https://github.com/jmayheww/book-it-app", // Replace with actual URL
      demo: "Demo_URL_for_BookIt", // Replace with actual URL
    },
    image: "/path_to_book_it_image.jpg", // Replace with actual image path
    description: `Book-It offers a comprehensive hotel booking experience tailored for efficiency. Users can intuitively browse hotels, customize reservations, and trust in Bcrypt's authentication for robust data security.`,
    technologies: ["React.js", "Ruby on Rails", "Bcrypt"],
  },
  {
    title: "Nomad List",
    links: {
      github: "https://github.com/jmayheww/phase-1-project-NomadListApp", // Replace with actual URL
      demo: "Demo_URL_for_NomadList", // Replace with actual URL
    },
    image: "/path_to_nomad_list_image.jpg", // Replace with actual image path
    description: `Nomad List serves as a go-to platform for digital nomads, offering city insights via the Teleport API. Users can compare cities with dual-views and find optimal destinations, especially with the rise of remote work.`,
    technologies: [
      "Teleport API",
      "Some_other_technology", // Replace with actual technology (if any)
    ],
  },
];

export const articles = [
  {
    title:
      "Swiping with Stripe: Simple and Secure Online Payment Handling Powered By Stripe",
    description:
      "This piece showcases the secure integration of Stripe's API into my app, Infinite Eats, for efficient user data management and payment processing. It emphasizes the importance of robust security and adaptability in the rapidly evolving digital space, enhancing both data protection and user experience.",
  },
  {
    title:
      "Securing the Rails: User Authentication and Bcrypt in Ruby on Rails",
    description:
      "In this piece, I provide an in-depth examination of secure user authentication using bcrypt within the Ruby on Rails framework. I detail password hashing and the implementation of secure sign-up, login, and logout flows. The importance of effective error handling is also covered. This project allows me to solidify my knowledge of Ruby on Rails, focusing on the critical aspect of user data security.",
  },
  {
    title:
      "Put this in your {app} and {control} it, or how Sinatra serenades our data",
    description:
      "In Phase 3 of my journey at Flatiron School, I authored an article, 'Put this in your {app} and {control} it, or how Sinatra serenades our data', focused on the principles of MVC through the lens of Ruby. Using a shopping cart illustration, I clarified the key roles and interactions within MVC - Model, View, and Controller. This served to strengthen my own understanding while enabling me to break down complex topics for others, thus highlighting my skills as both a programmer and a communicator.",
  },
  {
    title: "I do declare(ative), React.js is good, clean fun!",
    description:
      "In Phase 2 at Flatiron School, I deepened my understanding of React.js and documented my journey in a tutorial titled 'I do declare(ative), React.js is good, clean fun!'. I broke down the shift from imperative to declarative programming with React, providing clear examples. My ability to distill complex concepts into digestible content underscores my grasp of React.js, reinforcing my goal of simplifying tech knowledge for others.",
  },
  {
    title: "go fetch()",
    description:
      "As part of my Phase 1 JavaScript project at Flatiron School, I wrote a tutorial called 'go fetch()', aimed at beginners in web development. The article details the Fetch API, specifically GET requests, with examples from my own project. This work exemplifies my ability to translate complex concepts into accessible content, contributing to the learning culture in software development.",
  },
];
