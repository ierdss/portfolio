"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

import { SocialIcon } from "react-social-icons";
import { delay, motion, useCycle } from "framer-motion";
import NavbarToggle from "./NavbarToggle";
import { useDimensions } from "@/src/useDimensions";

export default function Navbar() {
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
    <nav id="navbar" className="navbar">
      {/* Measures the scroll progress on the page. */}
      <ProgressBar
        color1="#e2e8f0"
        color2="#B40041"
        height="5px"
        position="fixed"
      />

      <div className="navbar-desktop">
        <Link href="#">
          <h1 className="navbar-logo">ANDREI</h1>
        </Link>
        <ul className="navbar-links navbar-desktop__links">
          {NavLinks.map(({ id, href, text }) => (
            <Link
              key={id}
              href={href}
              data-to-scrollspy-id={id}
              className="navbar-link navbar-desktop__link group"
            >
              {text}
              <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </ul>
        <ul className="navbar-socials">
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
        </ul>
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
              <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
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
  { id: "about", href: "#about", text: "About" },
  { id: "experience", href: "#experience", text: "Experience" },
  { id: "projects", href: "#projects", text: "Projects" },
  // { id: "testimonials", href: "#testimonials", text: "Testimonials" },
  { id: "contact", href: "#contact", text: "Contact" },
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
    url: "https://github.com/Andrei-Sager",
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
