import { BsMailbox2 } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

export const SocialLinksData = [
  {
    id: 1,
    title: "Gmail",
    icon: <BsMailbox2 className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]" />,
    ariaLabel: "Send me an email!",
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: (
      <RiLinkedinFill className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]" />
    ),
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    icon: (
      <TbBrandGithubFilled className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]" />
    ),
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/AndreiSager",
  },
];
