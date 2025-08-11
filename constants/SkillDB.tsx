import { IconContext } from "react-icons";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoMarkdown } from "react-icons/io5";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiVim } from "react-icons/si";

const iconSize = 40;

export const SkillData = [
  {
    href: "https://www.w3schools.com/html/default.asp",
    icon: (
      <IconContext.Provider value={{ color: "#f06529" }}>
        <FaHtml5 size={iconSize} />
      </IconContext.Provider>
    ),
    name: "HTML",
  },
  {
    href: "https://www.w3schools.com/css/default.asp",
    icon: (
      <IconContext.Provider value={{ color: "#2965f1" }}>
        <FaCss3Alt size={iconSize} />
      </IconContext.Provider>
    ),
    name: "CSS",
  },
  {
    href: "https://tailwindcss.com/docs/installation",
    icon: (
      <IconContext.Provider value={{ color: "#67e8f9" }}>
        <SiTailwindcss size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Tailwind",
  },
  {
    href: "https://www.w3schools.com/js/default.asp",
    icon: (
      <IconContext.Provider value={{ color: "#ecd120" }}>
        <BiLogoJavascript size={iconSize} />
      </IconContext.Provider>
    ),
    name: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/docs/",
    icon: (
      <IconContext.Provider value={{ color: "#007acc" }}>
        <BiLogoTypescript size={iconSize} />
      </IconContext.Provider>
    ),
    name: "TypeScript",
  },
  {
    href: "https://react.dev/reference/react",
    icon: (
      <IconContext.Provider value={{ color: "#61dbfb" }}>
        <FaReact size={iconSize} />
      </IconContext.Provider>
    ),
    name: "React",
  },
  {
    href: "https://nextjs.org/docs",
    icon: (
      <IconContext.Provider value={{ className: "text-text" }}>
        <SiNextdotjs size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Next.js",
  },
  {
    href: "https://vercel.com/docs",
    icon: (
      <IconContext.Provider value={{ className: "text-text" }}>
        <SiVercel size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Vercel",
  },
  {
    href: "https://www.markdownguide.org/",
    icon: (
      <IconContext.Provider value={{ className: "text-text" }}>
        <IoLogoMarkdown size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Markdown",
  },
  {
    href: "https://git-scm.com/",
    icon: (
      <IconContext.Provider value={{ color: "#f1502f" }}>
        <FaGitAlt size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Git",
  },
  {
    href: "https://github.com/",
    icon: (
      <IconContext.Provider value={{ className: "text-text" }}>
        <FaGithub size={iconSize} />
      </IconContext.Provider>
    ),
    name: "GitHub",
  },
  {
    href: "https://www.vim.org/",
    icon: (
      <IconContext.Provider value={{ color: "#008000" }}>
        <SiVim size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Vim",
  },
  {
    href: "",
    icon: (
      <IconContext.Provider value={{ color: "#a259ff" }}>
        <PiFigmaLogoFill size={iconSize} />
      </IconContext.Provider>
    ),
    name: "Figma",
  },
];

// {
//   href: "",
//   icon: <div className="text-react"></div>,
//   name: "",
// },
