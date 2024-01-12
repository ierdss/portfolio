"use client";

import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

import Links from "../footer/Links";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.getElementById("navbar")!;
      const distance = 50;
      if (document.documentElement.scrollTop > distance) {
        navbar.classList.add("navbar__scrolled");
      } else {
        navbar.classList.remove("navbar__scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className="navbar">
      {/* Measures the scroll progress on the page. */}
      <ProgressBar
        color1="#e2e8f0"
        color2="#B40041"
        height="5px"
        position="fixed"
      />

      {/* Elements of the navbar justified between. */}
      <div className="navbar-desktop">
        <Link href="#">
          <h1 className="navbar__logo">ANDREI</h1>
        </Link>
        <ul id="navbar-links" className="navbar-desktop__links">
          {NavLinks.map(({ href, text }, index) => (
            <li key={index}>
              <Link href={href} className="navbar-desktop__link group relative">
                {text}
                <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <Links />
        </div>
        {/* Navbar Mobile */}
        {/* <NavbarMobile links={NavLinks} /> */}
      </div>
    </nav>
  );
}

const NavLinks = [
  { href: "#services", text: "Services" },
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  // { href: "#testimonials", text: "Testimonials" },
  { href: "#contact", text: "Contact" },
];
