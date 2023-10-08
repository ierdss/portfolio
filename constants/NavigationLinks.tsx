//Footer Section Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
    title: "LinkedIn",
    icon: <BsLinkedin size={mediaIconSize} className="hover:text-linkedin" />,
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 2,
    title: "Github",
    icon: <BsGithub size={mediaIconSize} className="hover:text-github" />,
    url: "https://github.com/LordBrim",
  },
];
