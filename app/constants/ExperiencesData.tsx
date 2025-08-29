import { FaReact } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export const ExperiencesTabs = [
  { id: uuidv4(), label: "Work", title: "Work Experience" },
  { id: uuidv4(), label: "Education", title: "Education" },
  { id: uuidv4(), label: "Upskill", title: "Upskill Certificates" },
];
export const ExperiencesDataWork = [
  {
    id: uuidv4(),
    icon: <FaReact className="scale-150" />,
    iconStyle: { background: "#1E293B", color: "#61DAFB" },
    title: "Frontend Wordpress Developer",
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
        text: "Built and delivered custom web solutions for small businesses, optimizing their online presence.",
      },
      {
        id: uuidv4(),
        text: "Worked on multiple freelance projects while managing academic responsibilities effectively.",
      },
      // { id: uuidv4(), text: "Enhanced client websites with responsive designs and modern UI/UX practices." },
      // { id: uuidv4(), text: "Developed interactive components using React to streamline user experiences." },
      // { id: uuidv4(), text: "Collaborated with clients to gather requirements and deliver tailored solutions under tight deadlines." },
      // { id: uuidv4(), text: "Gained proficiency in time management and prioritization through balancing academic and work commitments." },
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
    ],
    bullets: [
      {
        id: uuidv4(),
        text: "Acquired comprehensive  expertise of Java and web development through online courses on Udemy.",
      },
      {
        id: uuidv4(),
        text: "Designed and implemented dynamic user interfaces using HTML, CSS, and JavaScript, ensuring responsive and user-friendly designs.",
      },
      {
        id: uuidv4(),
        text: "Enhanced database management skills by implementing relational database models for java and web applications.",
      },
      {
        id: uuidv4(),
        text: "Integrated data structures with frontend components.",
      },
      {
        id: uuidv4(),
        text: "Managed and logged work hours using Jibble, demonstrating effective time management and remote work discipline.",
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
    ],
    bullets: [
      {
        id: uuidv4(),
        text: "Acquired comprehensive  expertise of Java and web development through online courses on Udemy.",
      },
      {
        id: uuidv4(),
        text: "Designed and implemented dynamic user interfaces using HTML, CSS, and JavaScript, ensuring responsive and user-friendly designs.",
      },
      {
        id: uuidv4(),
        text: "Enhanced database management skills by implementing relational database models for java and web applications.",
      },
      {
        id: uuidv4(),
        text: "Integrated data structures with frontend components.",
      },
      {
        id: uuidv4(),
        text: "Managed and logged work hours using Jibble, demonstrating effective time management and remote work discipline.",
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
    date: "April 2025",
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
