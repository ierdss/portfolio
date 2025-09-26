import { FaReact } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export const ExperiencesTabs = [
  { id: uuidv4(), label: "Work", title: "Work Experience" },
  { id: uuidv4(), label: "Education", title: "Formal Education" },
  { id: uuidv4(), label: "Upskill", title: "Upskill Certificates" },
];
export const ExperiencesDataWork = [
  {
    id: uuidv4(),
    icon: <FaReact className="scale-150" />,
    iconStyle: { background: "#1E293B", color: "#61DAFB" },
    title: "Frontend Developer",
    company: "Freelance",
    date: "July 2025 - Present",
    tags: [
      { id: uuidv4(), text: "React" },
      { id: uuidv4(), text: "JavaScript" },
      { id: uuidv4(), text: "CSS" },
      { id: uuidv4(), text: "HTML" },
    ],
    bullets: [
      {
        id: uuidv4(),
        text: "Built and delivered custom web solutions for small businesses and online clients, optimizing their online presence.",
      },
      {
        id: uuidv4(),
        text: "Worked on multiple freelance projects while maintaining strict deadlines.",
      },
    ],
  },
  {
    id: uuidv4(),
    icon: <FaReact className="scale-150" />,
    iconStyle: { background: "#1E293B", color: "#61DAFB" },
    title: "Fullstack Web Developer Intern",
    company: "Accenture",
    date: "February 2023 - May 2025",
    tags: [
      { id: uuidv4(), text: "React" },
      { id: uuidv4(), text: "JavaScript" },
      { id: uuidv4(), text: "CSS" },
      { id: uuidv4(), text: "HTML" },
      { id: uuidv4(), text: "Express.js" },
      { id: uuidv4(), text: "RESTful APIs" },
      { id: uuidv4(), text: "MySQL/SQL" },
      { id: uuidv4(), text: "Agile/Scrum" },
    ],
    bullets: [
      {
        id: uuidv4(),
        text: "Built and optimized dynamic user interfaces with React, HTML, CSS, and JavaScript, ensuring responsive, accessible, and cross-browser designs.",
      },
      {
        id: uuidv4(),
        text: "Assisted in developing RESTful APIs and backend logic in Express.js, enabling smooth communication between frontend and backend systems.",
      },
      {
        id: uuidv4(),
        text: "Designed and maintained relational database models (MySQL/SQL) to support enterprise applications, focusing on data consistency and performance.",
      },
      {
        id: uuidv4(),
        text: "Integrated frontend components with backend services, streamlining data flow and improving system efficiency.",
      },
      {
        id: uuidv4(),
        text: "Collaborated in an Agile/Scrum environment, participating in sprint planning, daily stand-ups, and code reviews.",
      },
      {
        id: uuidv4(),
        text: "Managed and logged work hours using Jibble, demonstrating effective time management and work discipline.",
      },
    ],
  },
  {
    id: uuidv4(),
    icon: <FaReact className="scale-150" />,
    iconStyle: { background: "#1E293B", color: "#61DAFB" },
    title: "Working Student",
    company: "Freelance",
    date: "January 2023 - January 2025",
    tags: [
      { id: uuidv4(), text: "HTML" },
      { id: uuidv4(), text: "CSS" },
      { id: uuidv4(), text: "JavaScript" },
      { id: uuidv4(), text: "React" },
      { id: uuidv4(), text: "PostgreSQL" },
    ],
    bullets: [
      {
        id: uuidv4(),
        text: "Collaborated with small businesses and local clients to build and maintain websites tailored to their branding and customer needs.",
      },
      {
        id: uuidv4(),
        text: "Designed and implemented responsive, mobile-friendly user interfaces using HTML, CSS, JavaScript, and React, improving client site usability and accessibility.",
      },
      {
        id: uuidv4(),
        text: "Developed interactive features such as contact forms, booking systems, and dashboards to enhance customer engagement.",
      },
      {
        id: uuidv4(),
        text: "Improved performance of web applications by optimizing front-end code, reducing load times by up to 30%.",
      },
      {
        id: uuidv4(),
        text: "Integrated PostgreSQL databases with web applications, managing relational data models and ensuring secure data handling.",
      },
      {
        id: uuidv4(),
        text: "Demonstrated effective time management by tracking and delivering projects on schedule, while managing academic responsibilities effectively.",
      },
    ],
  },
];

export const ExperiencesDataEducation = [
  {
    id: uuidv4(),
    degree: "Bachelor of Computer Science",
    institution: "STI College Sta. Mesa",
    graduationDate: "July 2025",
    description: "Sta. Mesa, Manila, Metro Manila",
  },
];

export const ExperiencesDataUpskill = [
  {
    id: uuidv4(),
    title: "The Ultimate React Course 2025 React, Next.js, Redux & More",
    platform: "Udemy",
    date: "May 2025",
    tags: [
      { id: uuidv4(), text: "React.js" },
      { id: uuidv4(), text: "Components" },
      { id: uuidv4(), text: "Props" },
      { id: uuidv4(), text: "Keys" },
      { id: uuidv4(), text: "State Mangement" },
      { id: uuidv4(), text: "Server Side and Client Side Rendering" },
      { id: uuidv4(), text: "Hooks" },
      { id: uuidv4(), text: "Routing" },
      { id: uuidv4(), text: "Context API" },
      { id: uuidv4(), text: "Advanced State Mangement" },
      { id: uuidv4(), text: "Redux" },
      { id: uuidv4(), text: "SupaBase" },
      { id: uuidv4(), text: "Middleware" },
      { id: uuidv4(), text: "JavaScript" },
      { id: uuidv4(), text: "EJS" },
      { id: uuidv4(), text: "JQuery" },
      { id: uuidv4(), text: "Express.js" },
      { id: uuidv4(), text: "Node.js" },
      { id: uuidv4(), text: "React" },
      { id: uuidv4(), text: "PostgreSQL" },
    ],
  },
  {
    id: uuidv4(),
    title: "The Complete Full-Stack Web Development Bootcamp",
    platform: "Udemy",
    date: "April 2025",
    tags: [
      { id: uuidv4(), text: "HTML5" },
      { id: uuidv4(), text: "CSS3" },
      { id: uuidv4(), text: "Bootstrap" },
      { id: uuidv4(), text: "Web Design" },
      { id: uuidv4(), text: "Document Object Model (DOM)" },
      { id: uuidv4(), text: "JavaScript ES6" },
      { id: uuidv4(), text: "React.js" },
      { id: uuidv4(), text: "Unix/Linux Terminal" },
      { id: uuidv4(), text: "Git" },
      { id: uuidv4(), text: "GitHub" },
      { id: uuidv4(), text: "Version Control" },
      { id: uuidv4(), text: "Express.js" },
      { id: uuidv4(), text: "Node.js" },
      { id: uuidv4(), text: "Application Program Interfaces (API)" },
      { id: uuidv4(), text: "EJS" },
      { id: uuidv4(), text: "JQuery" },
      { id: uuidv4(), text: "Database Fundamental" },
      { id: uuidv4(), text: "SQL" },
      { id: uuidv4(), text: "PostgreSQL" },
      { id: uuidv4(), text: "Deployment" },
      { id: uuidv4(), text: "RESTful APIs" },
      { id: uuidv4(), text: "Authentication & Security" },
      { id: uuidv4(), text: "Web3 Basics" },
      { id: uuidv4(), text: "Blockchain" },
      { id: uuidv4(), text: "Crypto" },
      { id: uuidv4(), text: "NFT & Marketplace" },
      { id: uuidv4(), text: "Markdown" },
    ],
  },
  {
    id: uuidv4(),
    title: "Tech Writers Master Class",
    platform: "Udemy",
    date: "April 2025",
    tags: [
      { id: uuidv4(), text: "Technical Writing" },
      { id: uuidv4(), text: "Technical Documentation" },
      { id: uuidv4(), text: "Markdown" },
    ],
  },
  {
    id: uuidv4(),
    title: "Git Complete The definitive, step-by-step guide to Git",
    platform: "Udemy",
    date: "March 2025",
    tags: [
      { id: uuidv4(), text: "Git" },
      { id: uuidv4(), text: "GitHub" },
      { id: uuidv4(), text: "GitHub Desktop" },
      { id: uuidv4(), text: "Version Control" },
    ],
  },
  {
    id: uuidv4(),
    title: "Learn Visual Studio Code",
    platform: "Udemy",
    date: "March 2025",
    tags: [{ id: uuidv4(), text: "Visual Studio Code" }],
  },
];
