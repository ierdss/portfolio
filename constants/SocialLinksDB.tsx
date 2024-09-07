import { BsMailbox2 } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

const size = 48;

export const SocialLinksData = [
  {
    id: 1,
    title: "Gmail",
    icon: <BsMailbox2 size={size} />,
    ariaLabel: "Send me an email!",
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <RiLinkedinFill size={size} />,
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    icon: <TbBrandGithubFilled size={size} />,
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/AndreiSager",
  },
];
