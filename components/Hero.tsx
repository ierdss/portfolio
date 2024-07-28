"use client";

import { useEffect } from "react";
import Image from "next/image";

import { TiDownload } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

export default function Hero() {
  useEffect(() => {
    let profileCardEl = document.querySelectorAll<HTMLElement>(".heroCard");

    profileCardEl.forEach((heroCard) => {
      heroCard.addEventListener("mouseover", function () {
        profileCardEl.forEach((eachCard) => {
          eachCard.classList.remove("active");
        });
        heroCard.classList.add("active");
      });
    });
  }, []);

  return (
    <div id="hero" className="hero">
      <div className="hero__portrait">
        <Image
          src="/hero.png"
          width={1000}
          height={1000}
          alt="A picture of Andrei Sager"
          priority
        />
      </div>

      <div className="hero__headline">
        <div>
          <h1 className="sectionOverline !text-center md:!text-left">
            Andrei Sager
          </h1>
          <h1 className="sectionHeading !text-4xl !text-center md:!text-left">
            Software Developer
          </h1>
        </div>

        <p className="sectionLeading !text-center md:!text-left max-w-md">
          I specialize in constructing websites and mobile applications while
          immersing myself in diverse aspects of the digital spectrum that pique
          my interest.
        </p>

        <div className="hero__headline__buttons">
          <a
            download={true}
            href="/documents/curriculum_vitae-no_photo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta__outline"
          >
            <TiDownload size={20} />
            <p>Download CV</p>
          </a>
          <a href="#projects" className="cta__solid">
            <SiMinutemailer size={20} />
            See Projects
          </a>
        </div>
      </div>

      {/* Animated Lavalamp Squares */}
      <ul className="hero__squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
