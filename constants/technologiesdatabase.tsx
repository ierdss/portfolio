import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const size = 40;

export const Technologies = [
  {
    icon: <FaHtml5 size={size} color={`#f06529`} />,
    name: "HTML5",
    link: "https://www.w3schools.com/html/default.asp",
  },
  {
    icon: <FaCss3Alt size={size} color={`#2965f1`} />,
    name: "CSS3",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    icon: <SiTailwindcss size={size} color={`#67e8f9`} />,
    name: "Tailwind",
    link: "https://tailwindcss.com/docs/installation",
  },
  {
    icon: <FaSass size={size} color={`#cc6699`} />,
    name: "Sass",
    link: "https://sass-lang.com/documentation/",
  },
  {
    icon: <IoLogoJavascript size={size} color={`#ecd120`} />,
    name: "Javascript",
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    icon: <BiLogoTypescript size={size} color={`#007acc`} />,
    name: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    icon: <FaReact size={size} color={`#61dbfb`} />,
    name: "React",
    link: "https://react.dev/reference/react",
  },
  {
    icon: <SiNextdotjs size={size} color={`#171515`} />,
    name: "Next",
    link: "https://nextjs.org/docs",
  },
  {
    icon: null,
    name: "",
    link: "",
  },
  {
    icon: null,
    name: "",
    link: "",
  },
  {
    icon: null,
    name: "",
    link: "",
  },
  {
    icon: null,
    name: "",
    link: "",
  },
  {
    icon: null,
    name: "",
    link: "",
  },
];
