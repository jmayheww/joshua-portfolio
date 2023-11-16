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

export const typedAttr2 = [
  "engaging", // Highlighting the ability to create captivating content.
  "personalized", // Emphasizing the customization aspect of email campaigns.
  "targeted", // Reflecting the focus on specific audience segments.
  "responsive", // Maintaining the importance of mobile-friendly designs.
  "data-driven", // Showcasing the use of analytics and data for decision-making.
  "automated", // Stressing on the automation capabilities in email marketing.
  "optimized", // Focusing on the efficiency and effectiveness of campaigns.
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

export const salesForceDevSkills = [
  "Email Design", // Focusing on the creation of visually appealing email templates.
  "SFMC", // General proficiency with Salesforce Marketing Cloud as a platform.
  "Journey Builder", // Specialization in building customer journeys within SFMC.
  "Data Integration", // Skill in integrating and managing data, pertinent to SFMC's data handling capabilities.
  "Responsive Layouts", // Expertise in designing emails that work across various devices.
  "Personalization", // Creating personalized content within emails.
  "Automation", // Setting up automated email workflows.
  "APIs", // Utilizing APIs for extended functionality in SFMC.
  "Analytics", // Analyzing and interpreting campaign data.
  "Agile Methods", // Working with Agile methodologies, beneficial for project management.
];

export const projects = [
  {
    title: "Murder Mystery",
    links: {
      github: "https://github.com/jamesMAwalker/murder-mystery",
      demo: "https://murder-mystery-ielts.vercel.app/",
    },
    canvaMockup:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1699000580/7_iepciy.png",

    description:
      "Experience the thrill of Murder Mystery: a captivating web app crafted for live-streamed events with mobile in mind. Participants engage in interactive decision-making, collaborate in teams, and receive real-time evidence updates. This project, undertaken as a freelance contract for an education industry client, has been implemented as part of an established IELTS curriculum, delivering immersive and educational experiences to over 200 students.",
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
    title: "Infinite Eats",
    links: {
      github: "https://github.com/jmayheww/infinite-eats",
      demo: "https://infinite-eats.onrender.com/home",
    },
    canvaMockup:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1699000591/8_fdho3o.png",

    description: `A dynamic inventory management system built with React.js and Ruby on Rails. Empowering users with informed purchase decisions, streamlining stock control, safeguarding user data and privacy with robust user authentication, and facilitating secure transactions through Stripe API integration.`,
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
    title: "Nomad List",
    links: {
      github: "https://github.com/jmayheww/phase-1-project-NomadListApp",
      demo: "https://github.com/jmayheww/phase-1-project-NomadListApp",
    },
    mobileMockup: "",
    desktopMockup:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696407724/nomad-amster_i1bwy8.jpg",
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
    link: "https://dev.to/jmayheww/swiping-with-stripe-simple-and-secure-online-payment-handling-powered-by-stripe-34ll",
    image:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696497485/7d8eaneivzxe95rgkdcx_wrpgkg.gif",
  },
  {
    title:
      "Securing the Rails: User Authentication and Bcrypt in Ruby on Rails",
    description:
      "In this piece, I provide an in-depth examination of secure user authentication using bcrypt within the Ruby on Rails framework. I detail password hashing and the implementation of secure sign-up, login, and logout flows. The importance of effective error handling is also covered. This project allows me to solidify my knowledge of Ruby on Rails, focusing on the critical aspect of user data security.",
    link: "https://dev.to/jmayheww/securing-the-rails-user-authentication-and-bcrypt-in-ruby-on-rails-21d7",
    image:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696497501/v510hqyyesosb4bnn1ni_tbenpa.jpg",
  },
  {
    title:
      "Put this in your {app} and {control} it, or how Sinatra serenades our data",
    description:
      "In Phase 3 of my journey at Flatiron School, I authored an article, 'Put this in your {app} and {control} it, or how Sinatra serenades our data', focused on the principles of MVC through the lens of Ruby. Using a shopping cart illustration, I clarified the key roles and interactions within MVC - Model, View, and Controller. This served to strengthen my own understanding while enabling me to break down complex topics for others, thus highlighting my skills as both a programmer and a communicator.",
    link: "https://dev.to/jmayheww/put-this-in-your-app-and-control-it-or-how-sinatra-serenades-our-data-54h8",
    image:
      "https://res.cloudinary.com/daq5feofb/image/upload/v1696497464/g4j51krgifyxbt1o2ha7_nzulet.png",
  },
];
