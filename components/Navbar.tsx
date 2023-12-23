"use client";

import { useEffect } from "react";
import { NavLinks } from "@/constants/NavigationLinks";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

import Links from "./minor/Links";

export default function Navbar() {
  const sizeIcon = 30;

  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => setNav(!nav);

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
    <nav id="navbar" className="navbar ">
      <ProgressBar
        color1="#e2e8f0"
        color2="#B40041"
        height="5px"
        position="fixed"
      />

      {/* Navbar Desktop */}
      <div className="navbar__desktop">
        <Link href="#">
          <h1 className="navbarLogo">ANDREI</h1>
        </Link>
        <div className="navbar__desktop-center">
          <ul id="navbar-links" className="navbarLinks__desktop">
            {NavLinks.map(({ href, text }, index) => (
              <li key={index}>
                <Link href={href} className="navbarLink group relative">
                  {text}
                  <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Links />
        </div>
      </div>

      {/* Navbar Mobile */}
      <div onClick={handleNav} className="navbarMenu">
        <GiHamburgerMenu size={sizeIcon} />
      </div>
      <div className={nav ? "navbar__mobile-open" : "navbar__mobile-closed"}>
        <div onClick={handleNav} className="navbar__mobile-top">
          <h1 className="navbarLogo bg-clip">ANDREI</h1>
          <RxCross2 size={sizeIcon} />
        </div>
        <ul id="navbar-links" className="navbarLinks">
          {NavLinks.map(({ href, text }, index) => (
            <li key={index} className="navbarListItem">
              <Link onClick={handleNav} href={href} className="navbarLink">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <Links />
      </div>
    </nav>
  );
}
