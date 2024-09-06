import { BiCodeAlt, BiLogoTypescript, BiTargetLock } from "react-icons/bi";
import { BsGlobeAsiaAustralia, BsLayersFill } from "react-icons/bs";
import { FaHtml5, FaReact, FaCss3Alt, FaSass } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import { IoColorPaletteSharp, IoLibrary } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const servicesIconSize = 50;
const aboutIconSize = 40;
const techIconSize = 50;
const categoryIconSize = 15;

export const AboutSectionContent = [
  {
    id: 1,
    icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
    title: "Web Development",
    paragraph: "",
  },
  {
    id: 2,
    icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
    title: "React Developer",
    paragraph: "",
  },
  {
    id: 3,
    icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
    title: "",
    paragraph: "",
  },
  {
    id: 4,
    icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
    title: "",
    paragraph: "",
  },
  {
    id: 5,
    icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
    title: "",
    paragraph: "",
  },
];

const TechCategorySmallIcons = {
  markup: <BiTargetLock size={categoryIconSize} />,
  styling: <IoColorPaletteSharp size={categoryIconSize} />,
  programming: <BiCodeAlt size={categoryIconSize} />,
  library: <IoLibrary size={categoryIconSize} />,
  framework: <BsLayersFill size={categoryIconSize} />,
};

const TechCategoryLargeIcons = {
  markup: <BiTargetLock size={techIconSize} />,
  styling: <IoColorPaletteSharp size={techIconSize} />,
  programming: <BiCodeAlt size={techIconSize} />,
  library: <IoLibrary size={techIconSize} />,
  framework: <BsLayersFill size={techIconSize} />,
};

export const TechnologiesSectionContent = [
  {
    id: 1,
    frontTitle: "HTML5",
    frontIcon: <FaHtml5 size={techIconSize} color={`#f06529`} />,
    frontCategoryIcon: TechCategorySmallIcons.markup,
    backIcon: TechCategoryLargeIcons.markup,
    backTitle: "Markup Language",
  },
  {
    id: 2,
    frontTitle: "CSS3",
    frontIcon: <FaCss3Alt size={techIconSize} color={`#2965f1`} />,
    frontCategoryIcon: TechCategorySmallIcons.styling,
    backIcon: TechCategoryLargeIcons.styling,
    backTitle: "Styling Language",
  },
  {
    id: 3,
    frontTitle: "Tailwind",
    frontIcon: <SiTailwindcss size={techIconSize} color={`#67e8f9`} />,
    frontCategoryIcon: TechCategorySmallIcons.styling,
    backIcon: TechCategoryLargeIcons.styling,
    backTitle: "Styling Language",
  },
  {
    id: 4,
    frontTitle: "Sass",
    frontIcon: <FaSass size={techIconSize} color={`#cc6699`} />,
    frontCategoryIcon: TechCategorySmallIcons.styling,
    backIcon: TechCategoryLargeIcons.styling,
    backTitle: "Styling Language",
  },
  {
    id: 5,
    frontTitle: "Javascript",
    frontIcon: <IoLogoJavascript size={techIconSize} color={`#ecd120`} />,
    frontCategoryIcon: TechCategorySmallIcons.programming,
    backIcon: TechCategoryLargeIcons.programming,
    backTitle: "Programming Language",
  },
  {
    id: 6,
    frontTitle: "Typescript",
    frontIcon: <BiLogoTypescript size={techIconSize} color={`#007acc`} />,
    frontCategoryIcon: TechCategorySmallIcons.programming,
    backIcon: TechCategoryLargeIcons.programming,
    backTitle: "Programming Language",
  },
  {
    id: 7,
    frontTitle: "React.js",
    frontIcon: <FaReact size={techIconSize} color={`#61dbfb`} />,
    frontCategoryIcon: TechCategorySmallIcons.library,
    backIcon: TechCategoryLargeIcons.library,
    backTitle: "Library",
  },
  {
    id: 8,
    frontTitle: "Next.js",
    frontIcon: <SiNextdotjs size={techIconSize} color={`#171515`} />,
    frontCategoryIcon: TechCategorySmallIcons.framework,
    backIcon: TechCategoryLargeIcons.framework,
    backTitle: "Framework",
  },
];

export const WorkflowSectionContent = [
  {
    number: "01",
    title: "sales is the goal",
    description:
      "As a developer my goal when making a website is to maximize click rate. For websites gaining the users' attention and directing its flow into a click is crucial. For many sites a good funnel can garner more customers increasing the chance a click translates into a sale.",
  },
  {
    number: "02",
    title: "content comes first",
    description:
      "Before creating a website the client must first provide its contents. This way planning the layout of a website becomes a smoother process saving the client and myself our precious time. The quicker a website is deployed, the quicker we can gain value.",
  },
  {
    number: "03",
    title: "prototying a design",
    description:
      "Prototyping is a form of visual communication between the client and the developer. It is a quick and easy method that allows different ideas to be tested before production saving time and effort. The clients can easily give feedback during this process and if they want changes it can be easily assessed.",
  },
  {
    number: "04",
    title: "finally, building",
    description:
      "When building a project I prioritize writing clean code and the best practices that I know of. However, what code I write may depend on the constraints of the situation. I weight my decisions based on time constraints, efficiency, and code adaptability. I first make sure of the intentions of the client before starting.",
  },
];
