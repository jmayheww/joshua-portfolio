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
    image:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696322541/welcome_infinite_mfsazb.jpg",
    mobileMockup:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696322541/welcome_infinite_mfsazb.jpg",
    desktopMockup:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696319322/infinite-features_ms6lqd.jpg",
    description: `Infinite Eats - A dynamic inventory management system built with React.js and Ruby on Rails. Empowering users with informed purchase decisions, streamlining stock control, safeguarding user data and privacy with robust user authentication, and facilitating secure transactions through Stripe API integration.`,
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
      "Experience the thrill of Murder Mystery: a captivating web app crafted for live-streamed events. Participants engage in interactive decision-making, collaborate in teams, and receive real-time evidence updates. This project, undertaken as a freelance contract for an education industry client, has been implemented as part of an established IELTS curriculum, delivering immersive and educational experiences to over 200 students.",
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
    description: `Book-It offers a comprehensive hotel booking experience tailored for efficiency. Users can intuitively browse hotels, customize reservations, and trust in Bcrypt's authentication for robust data security. `,
    technologies: ["React.js", "Ruby on Rails", "Bcrypt", "PostgreSQL"],
  },
  {
    title: "Nomad List",
    links: {
      github: "https://github.com/jmayheww/phase-1-project-NomadListApp", // Replace with actual URL
      demo: "Demo_URL_for_NomadList", // Replace with actual URL
    },
    image: "/path_to_nomad_list_image.jpg", // Replace with actual image path
    description:
      "Nomad List is a practical and powerful guide for digital nomads. Utilizing the Teleport API, Nomad List provides users with itemized quality of life metrics that enable more comprehensive and informed decisions about where to live, work, and travel. Nomad List is an essential tool for any nomad in the remote work era.",
    technologies: ["Teleport API", "JavaScript", "HTML", "CSS"],
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
