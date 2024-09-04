"use client";

import { useEffect } from "react";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
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
    <div
      id="hero"
      className="flex w-full flex-col items-center justify-center bg-blackberry"
    >
      <div className="relative flex h-[100vh] max-h-[800px] w-full max-w-[1980px] flex-col items-center justify-center gap-[40px] overflow-hidden  px-[8px] py-[50px] md:flex-row md:gap-[50px] md:px-[150px] md:py-[100px]">
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
            <h1 className="sectionHeading !text-center !text-4xl md:!text-left">
              Software Developer
            </h1>
          </div>

          <p className="sectionLeading max-w-md !text-center md:!text-left">
            I specialize in constructing websites and mobile applications while
            immersing myself in diverse aspects of the digital spectrum that
            pique my interest.
          </p>

          <div className="hero__headline__buttons">
            <a href="#projects" className="cta__solid">
              <SiMinutemailer size={20} />
              See Projects
            </a>
            <a
              download={true}
              href="https://github.com/AndreiSager/files/blob/495a5a1c5238bc0de0bd23ee95d40821accaf439/curriculum_vitae-no_photo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__outline"
            >
              <FaGithub size={20} />
              <p>View CV</p>
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
    </div>
  );
}
