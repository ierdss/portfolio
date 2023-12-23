import { BsLinkedin, BsGithub, BsMailbox2 } from "react-icons/bs";

const mediaIconSize = 30;

export const NavLinks = [
  { href: "#services", key: "Services", text: "Services" },
  { href: "#about", key: "About", text: "About" },
  { href: "#experience", key: "Experience", text: "Experience" },
  { href: "#projects", key: "Projects", text: "Projects" },
  // { href: "#testimonials", key: "Testimonials", text: "Testimonials" },
];

export const SocialMediaLinks = [
  {
    id: 1,
    title: "Gmail",
    ariaLabel: "Send me an email!",
    icon: <BsMailbox2 size={mediaIconSize} className="hover:text-gmail" />,
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    icon: <BsLinkedin size={mediaIconSize} className="hover:text-linkedin" />,
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    ariaLabel: "Check out my projects from my GitHub repository!",
    icon: <BsGithub size={mediaIconSize} className="hover:text-github" />,
    url: "https://github.com/Andrei-Sager",
  },
];
