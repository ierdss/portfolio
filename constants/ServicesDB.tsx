import { FaGlobeAsia } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiDatabaseFill } from "react-icons/ri";

const iconSize = 50;

export const ServicesData = [
  {
    id: 1,
    icon: <FaGlobeAsia size={iconSize} />,
    title: "Web Development",
    description:
      "Professional looking web pages made with the best practices, clean code structures and layout responsiveness.",
  },
  {
    id: 2,
    icon: <IoStorefront size={iconSize} />,
    title: "Front-End Development",
    description:
      "Prototyping and design for customer sales conversion. Creating familiarity for users throught UI/UX.",
  },
  {
    id: 3,
    icon: <RiDatabaseFill size={iconSize} />,
    title: "Back-End Development",
    description:
      "Support and maintenance with the latest backend technologies through code optimization and unit testing.",
  },
  {
    id: 4,
    icon: <MdOutlineMobileFriendly size={iconSize} />,
    title: "Mobile Development",
    description:
      "Unified and consistent user experience across various devices. Localized platform design using platform modules for Android, iOS, and Web.",
  },
  // {
  //   id: 5,
  //   icon: <FaPhoneVolume size={iconSize} />,
  //   title: "Consulting",
  //   description: "I can suggest solutions for your problems.",
  // },
  // {
  //   id: 6,
  //   icon: <BsMortarboardFill size={iconSize} />,
  //   title: "Mentoring",
  //   description:
  //     "I teach students all around the world programming. I also provide one-on-one mentorship for a price.",
  // },
];
