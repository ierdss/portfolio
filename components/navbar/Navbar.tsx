"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";

import { SocialIcon } from "react-social-icons";
import { useScroll, useSpring, motion, useCycle } from "framer-motion";
import NavbarToggle from "./NavbarToggle";
import { useDimensions } from "@/src/useDimensions";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
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
  }, []);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav
      id="navbar"
      className="fixed left-0 top-0 !z-40 flex w-full items-center justify-center bg-transparent pb-1 pt-2 md:px-[50px] md:pb-0 md:pt-[5px]"
    >
      {/* Measures the scroll progress on the page. */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-[5px] origin-top-left bg-secondary-red"
        style={{ scaleX }}
      />

      <div className="flex w-screen items-center justify-between gap-10 md:gap-16 lg:max-w-[1980px]">
        <Link href="#" className="group  w-full max-w-[350px]">
          <h1 className="navbar-logo relative" onClick={() => toggleOpen()}>
            ANDREI
            <span className="ease absolute -bottom-1 left-0 h-0 w-full border-t-4 border-secondary-red transition-all duration-500" />
          </h1>
        </Link>
        <div className="flex flex-row items-center justify-center gap-[50px]">
          <ul className="hidden flex-row gap-5 lg:flex">
            {NavLinks.map(({ id, href, text }) => (
              <Link
                key={id}
                href={href}
                data-to-scrollspy-id={id}
                className="group relative my-3 block px-4 py-3 text-sm font-bold capitalize text-gray target:text-secondary-red hover:text-secondary-red"
              >
                {text}
                <span className="ease absolute -bottom-3 left-[50%] h-0 w-0 -translate-x-1/2 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex max-w-[350px] flex-row items-center justify-center gap-5">
          <BsFillMoonStarsFill className="h-[30px] w-[30px] text-gray" />
          <Link
            href="#footer"
            data-to-scrollspy-id={6}
            className="block w-full min-w-[210px] select-none items-center justify-center rounded-[10px] bg-gray p-[16px] text-center font-bold text-blackberry hover:brightness-110 md:w-[300px]"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <motion.div
        className="navbar-mobile"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <div className="relative h-[20px] w-[20px]">
          <motion.div
            className="navbar-mobile__background"
            variants={sidebar}
          />
          <NavbarToggle
            toggle={() => toggleOpen()}
            customClass="navbar-mobile__toggle"
          />
        </div>
      </motion.div>

      <motion.div
        className={
          isOpen ? "navbar-mobile__body--open" : "navbar-mobile__body--closed"
        }
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.ul variants={links} className="navbar-mobile__links">
          <motion.a href="#" className="w-fit" variants={link}>
            <h1 className="navbar-logo">ANDREI</h1>
          </motion.a>
          {NavLinks.map(({ id, href, text }) => (
            <motion.a
              variants={link}
              key={id}
              whileTap={{ scale: 0.95 }}
              href={href}
              data-to-scrollspy-id={id}
              onClick={() => toggleOpen()}
              className="navbar-link navbar-mobile__link group"
            >
              {text}
              <span className="ease absolute bottom-0 left-[50%] h-0 w-0 -translate-x-1/2 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.ul className="navbar-mobile__socials" variants={link}>
            {SocialMediaLinks.map(({ id, ariaLabel, url }) => (
              <SocialIcon
                key={id}
                url={url}
                target="_blank"
                label={ariaLabel}
                style={{ height: 35, width: 35 }}
                className="text-secondary-red hover:text-accent-pink"
              />
            ))}
          </motion.ul>
        </motion.ul>
      </motion.div>
    </nav>
  );
}

// URLs
const NavLinks = [
  { id: "1", href: "#services", text: "Services" },
  { id: "2", href: "#about", text: "About" },
  { id: "3", href: "#skill&experience", text: "Skills & Experience" },
  { id: "4", href: "#projects", text: "Projects" },
  { id: "5", href: "#testimonials", text: "Testimonials" },
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
