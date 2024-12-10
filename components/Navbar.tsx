"use client";

import { SocialLinksData } from "@/constants";
import { useDimensions } from "@/src/useDimensions";
import { motion, useCycle, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import NavbarToggle from "./NavbarToggle";

export default function Navbar() {
  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    // On scroll function
    const onScroll = () => {
      const navbar = document.getElementById("navbar")!;
      const distance = 50;
      if (document.documentElement.scrollTop > distance) {
        navbar.classList.add("navbar--scrolled");
      } else {
        navbar.classList.remove("navbar--scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    const buttons = document.querySelectorAll<HTMLDivElement>(".btn");
    buttons.forEach((btn) => {
      const bg = btn.querySelector<HTMLDivElement>(".bg");
      if (bg) {
        const handleOrigin = (e: MouseEvent): void => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          bg.style.left = `${x}px`;
        };
        btn.addEventListener("mousemove", handleOrigin);
        btn.addEventListener("mouseleave", handleOrigin);
        return () => {
          btn.removeEventListener("mousemove", handleOrigin);
          btn.removeEventListener("mouseleave", handleOrigin);
        };
      }
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // Mobile Navbar
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <nav
      id="navbar"
      className="fixed left-0 top-0 !z-50 flex w-full items-center justify-center bg-transparent px-2 py-1 md:px-12 md:pb-0 md:pt-1"
    >
      {/* Measures the scroll progress on the page. */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 origin-top-left bg-primary"
        style={{ scaleX }}
      />

      <div className="flex w-full items-center justify-between gap-10 md:gap-16 lg:max-w-center">
        <Link href="#" className="group w-fit max-w-[350px] md:w-full">
          <h3 className="relative w-fit text-primary ">
            ANDREI
            <span className="border-secondary-red absolute bottom-1 left-0 h-0 w-full border-t-4 transition-all duration-500 ease-in-out md:bottom-2" />
          </h3>
        </Link>
        <div className="flex flex-row items-center justify-center gap-12">
          <ul className="hidden flex-row gap-5 lg:flex">
            {NavLinks.map(({ id, href, text }) => (
              <Link
                key={id}
                href={href}
                data-to-scrollspy-id={id}
                className="btn group relative my-3 block cursor-pointer overflow-hidden rounded-[40px] bg-transparent px-4 py-3 text-sm font-bold capitalize text-text target:text-primary"
              >
                <span className="label">{text}</span>
                <span className="bg" />
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex max-w-[350px] flex-row items-center justify-center gap-12">
          <ThemePicker />
          <Link
            href="#footer"
            data-to-scrollspy-id={6}
            className="hidden w-full select-none flex-row items-center justify-center gap-[0.6em] rounded-[10px] bg-text p-[1.2em] px-4 text-center text-xs font-bold text-background-1 hover:brightness-110 md:flex md:w-[300px] md:min-w-[210px] md:p-[0.9em] md:text-base"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <motion.div
        className="relative bottom-0 right-0 top-0 lg:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <div className="relative h-5 w-5">
          <motion.div
            className="absolute -right-12 -top-6 bottom-0 h-[110vh] w-[100vh] bg-background-1 md:w-[300px] "
            variants={sidebar}
          />
          <NavbarToggle
            toggle={() => toggleOpen()}
            customClass="absolute inset-0 z-20 cursor-pointer border-none bg-transparent outline-none text-text"
          />
        </div>
      </motion.div>

      <motion.div
        className={
          isOpen
            ? "absolute bottom-0 right-0 top-0 flex w-full flex-col gap-5 px-4 pb-1 pt-2 md:w-[300px] md:px-8 md:pb-0 md:pt-1 lg:!hidden"
            : "absolute -right-[500px] bottom-0 top-0 flex w-full flex-col gap-5 px-4 pb-1 pt-2 transition-all delay-1000 md:w-[300px] md:px-8 md:pb-0 md:pt-1 lg:!hidden"
        }
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.ul
          variants={links}
          className="my-12 flex w-full flex-col gap-6 text-center text-text lg:hidden"
        >
          {NavLinks.map(({ id, href, text }) => (
            <motion.a
              variants={link}
              key={id}
              whileTap={{ scale: 0.95 }}
              href={href}
              data-to-scrollspy-id={id}
              onClick={() => toggleOpen()}
              className="group py-4 text-text"
            >
              {text}
            </motion.a>
          ))}
          <motion.ul
            className="order-2 mt-12 flex w-full flex-row items-center justify-center gap-8 md:order-1 md:w-full md:gap-2 lg:flex lg:justify-start"
            variants={link}
          >
            {SocialLinksData.map(({ id, icon, ariaLabel, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                aria-label={ariaLabel}
                className="flex items-center justify-center text-text"
              >
                {icon}
              </a>
            ))}
          </motion.ul>
        </motion.ul>
      </motion.div>
    </nav>
  );
}

function ThemePicker() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mr-4 text-text md:mr-0">
      {theme === "light" ? (
        <FaSun
          onClick={() => setTheme("dark")}
          className="h-6 w-6 md:h-8 md:w-8"
        />
      ) : (
        <BsFillMoonStarsFill
          onClick={() => setTheme("light")}
          className="h-6 w-6 md:h-8 md:w-8"
        />
      )}
    </div>
  );
}

// URLs
const NavLinks = [
  { id: "1", href: "#services", text: "Services" },
  { id: "2", href: "#about", text: "About" },
  { id: "3", href: "#experience", text: "Experience" },
  { id: "4", href: "#skills", text: "Skills" },
  { id: "5", href: "#projects", text: "Projects" },
  { id: "6", href: "#testimonials", text: "Testimonials" },
];

const SocialMediaLinks = [
  {
    id: 1,
    title: "Gmail",
    ariaLabel: "Send me an email!",
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/AndreiSager",
  },
];

// Animations
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 800px -400px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 1000px -400px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      restDelta: 0.7,
      damping: 40,
    },
  },
};

const links = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const link = {
  open: {
    y: 0,
    z: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    z: -10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
