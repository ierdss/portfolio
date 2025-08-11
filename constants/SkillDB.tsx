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
      <div className="text-html">
        <FaHtml5 size={iconSize} />
      </div>
    ),
    name: "HTML",
  },
  {
    href: "https://www.w3schools.com/css/default.asp",
    icon: (
      <div className="text-css">
        <FaCss3Alt size={iconSize} />
      </div>
    ),
    name: "CSS",
  },
  {
    href: "https://tailwindcss.com/docs/installation",
    icon: (
      <div className="text-tailwind">
        <SiTailwindcss size={iconSize} />
      </div>
    ),
    name: "Tailwind",
  },
  {
    href: "https://www.w3schools.com/js/default.asp",
    icon: (
      <div className="text-javascript">
        <BiLogoJavascript size={iconSize} />
      </div>
    ),
    name: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/docs/",
    icon: (
      <div className="text-typescript">
        <BiLogoTypescript size={iconSize} />
      </div>
    ),
    name: "TypeScript",
  },
  {
    href: "https://react.dev/reference/react",
    icon: (
      <div className="text-react">
        <FaReact size={iconSize} />
      </div>
    ),
    name: "React",
  },
  {
    href: "https://nextjs.org/docs",
    icon: (
      <div className="text-next">
        <SiNextdotjs size={iconSize} />
      </div>
    ),
    name: "Next.js",
  },
  {
    href: "https://vercel.com/docs",
    icon: (
      <div className="text-next">
        <SiVercel size={iconSize} />
      </div>
    ),
    name: "Vercel",
  },
  {
    href: "https://www.markdownguide.org/",
    icon: (
      <div className="text-blackberry">
        <IoLogoMarkdown size={iconSize} />
      </div>
    ),
    name: "Markdown",
  },
  {
    href: "https://git-scm.com/",
    icon: (
      <div className="text-git">
        <FaGitAlt size={iconSize} />
      </div>
    ),
    name: "Git",
  },
  {
    href: "https://github.com/",
    icon: (
      <div className="text-github">
        <FaGithub size={iconSize} />
      </div>
    ),
    name: "GitHub",
  },
  {
    href: "https://www.vim.org/",
    icon: (
      <div className="text-vim">
        <SiVim size={iconSize} />
      </div>
    ),
    name: "Vim",
  },
  {
    href: "",
    icon: (
      <div className="text-react">
        <PiFigmaLogoFill size={iconSize} />
      </div>
    ),
    name: "Figma",
  },
];

// {
//   href: "",
//   icon: <div className="text-react"></div>,
//   name: "",
// },
