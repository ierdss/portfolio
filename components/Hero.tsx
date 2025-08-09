"use client";

import Image from "next/image";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import { SocialLinksData } from "@/constants";
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
      className="flex w-full select-none flex-col items-center justify-center bg-background-1"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-center gap-10 px-2 py-24 md:flex-row md:gap-24 md:px-40 md:py-48">
        <div className="z-10 flex aspect-square w-[80%] items-center justify-center overflow-hidden rounded-full bg-background-1/50  brightness-125 md:order-2 md:max-w-[450px]">
          <Image
            src="/hero.png"
            width={1000}
            height={1000}
            alt="A picture of Andrei Sager"
            priority
          />
        </div>

        <div className="z-20 order-1 flex w-full shrink-0 flex-col items-center justify-center gap-4 text-center md:w-[50%] md:items-start md:gap-20 md:text-left">
          <h5 className="w-full text-text">
            Hi, I'm <span className="text-redberry">Andrei Sager</span>, I Am a
            <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Software Developer",
                4000,
                "Front-End Designer",
                4000,
                "Writer",
                4000,
              ]}
              speed={30}
              deletionSpeed={30}
              style={{ fontSize: "1.4em" }}
              repeat={Infinity}
            />
          </h5>

          <div className="relative flex flex-col items-start justify-center text-text">
            <ul className="absolute -left-[120px] top-0 order-2 hidden w-fit flex-col justify-between gap-8 md:flex ">
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
            </ul>
          </div>
          <div className="flex w-full items-center justify-center gap-2 md:justify-start md:gap-4">
            <a
              download={true}
              href="https://github.com/AndreiSager/files/blob/495a5a1c5238bc0de0bd23ee95d40821accaf439/curriculum_vitae-no_photo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full select-none flex-row items-center justify-center gap-[0.6em] rounded-[10px] border border-text bg-transparent p-[1.2em] text-center text-xs font-bold text-text hover:border-redberry hover:text-redberry hover:brightness-110 md:min-w-[210px] md:max-w-[300px] md:p-[0.9em] md:text-base"
            >
              <FaGithub size={30} className="h-5 w-5 md:h-8 md:w-8" />
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
