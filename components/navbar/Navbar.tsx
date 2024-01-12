"use client";

import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

import NavbarMobile from "./NavbarMobile";
import { SocialIcon } from "react-social-icons";

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

  return (
    <div id="navbar" className="navbar">
      {/* Measures the scroll progress on the page. */}
      <ProgressBar
        color1="#e2e8f0"
        color2="#B40041"
        height="5px"
        position="fixed"
      />

      <nav className="navbar-desktop">
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
      </nav>

      <nav className="navbar-mobile">
        <Link href="#">
          <h1 className="navbar-logo">ANDREI</h1>
        </Link>
        <ul className="navbar-links navbar-mobile_-links">
          {NavLinks.map(({ id, href, text }) => (
            <Link
              key={id}
              href={href}
              data-to-scrollspy-id={id}
              className="navbar-link navbar-mobile__link group"
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
      </nav>
    </div>
  );
}

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
