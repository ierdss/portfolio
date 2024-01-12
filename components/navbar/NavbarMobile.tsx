import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, useCycle } from "framer-motion";

import Link from "next/link";

interface NavbarMobileLinkProps {
  href: string;
  text: string;
}

interface NavbarMobileLinksProps {
  links: NavbarMobileLinkProps[];
}

export default function NavbarMobile({ links }: NavbarMobileLinksProps) {
  const sizeIcon = 30;
  const [isOpen, toggleIsOpen] = useCycle(false, true);

  return (
    <motion.div
      className={isOpen ? "" : ""}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <div onClick={() => useCycle()} className="navbar-mobile__toggle ">
        <GiHamburgerMenu size={sizeIcon} />
      </div>
      <div onClick={() => useCycle()} className="navbar__mobile-top">
        <h1 className="navbar__logo bg-clip">ANDREI</h1>
        <RxCross2 size={sizeIcon} />
      </div>
      <ul id="navbar-links" className="navbar-mobile__links">
        {links.map(({ href, text }, index) => (
          <li key={index}>
            <Link
              onClick={() => useCycle()}
              href={href}
              className="navbar-mobile__link"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// Framer Motion Variants
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
