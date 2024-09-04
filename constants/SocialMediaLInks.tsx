import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Mailbox } from "solar-icon-set/messagesconversation";

export const SocialMediaLinks = [
  {
    id: 1,
    title: "Gmail",
    icon: <Mailbox size={48} iconStyle="Bold" />,
    ariaLabel: "Send me an email!",
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <RiLinkedinFill className="h-[48px] w-[48px]" />,
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    icon: <TbBrandGithubFilled className="h-[48px] w-[48px]" />,
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/AndreiSager",
  },
];
