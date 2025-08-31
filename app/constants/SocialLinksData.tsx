import { BsMailbox2 } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

const size = 20;

export const SocialLinksData = [
  {
    id: uuidv4(),
    title: "Gmail",
    icon: <BsMailbox2 size={size} />,
    ariaLabel: "Send me an email!",
    url: "mailto:andreisager@proton.me",
  },
  // {
  //   id: 2,
  //   title: "LinkedIn",
  //   icon: <RiLinkedinFill size={size} className="h-6 w-6 md:h-12 md:w-12" />,
  //   ariaLabel: "Take a look at my work profile on LinkedIn.",
  //   url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  // },
  {
    id: uuidv4(),
    title: "Github",
    icon: <TbBrandGithubFilled size={size} />,
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/ierdss",
  },
];
