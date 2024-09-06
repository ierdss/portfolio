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
      className="flex w-full select-none flex-col items-center justify-center bg-blackberry"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-center gap-[40px] overflow-hidden px-[8px] py-[50px] md:flex-row md:gap-[50px] md:px-[150px] md:pb-[200px] md:pt-[200px]">
        <div className="z-10 order-2 flex aspect-square w-[80%] max-w-[450px] items-center justify-center overflow-hidden rounded-full bg-gray bg-opacity-10 brightness-125">
          <Image
            src="/hero.png"
            width={1000}
            height={1000}
            alt="A picture of Andrei Sager"
            priority
          />
        </div>

        <div className="z-20 order-1 flex w-[90%] shrink-0 flex-col items-center justify-center gap-20 text-center md:w-[50%] md:items-start">
          <h5 className="text-gray">
            Hi, I Am <span className="text-redberry">Andrei Sager</span>, a
            Software Developer
          </h5>

          <div className="flex flex-col items-start justify-center text-gray">
            <p className="">I make</p>
            <div className="ml-[-10px]">
              <h1 className="claim ml-[-2px] !font-normal">BIGGER</h1>
              <h1 className="claim">BOLDER</h1>
              <h1 className="claim">BETTER</h1>
            </div>

            <p className="sectionLeading max-w-md !text-center md:!text-left">
              websites that are hard to ignore.
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="flex w-full min-w-[210px] flex-row items-center justify-center gap-3 rounded-[10px] bg-redberry p-[16px] text-center font-bold text-gray hover:brightness-110 md:w-[300px]"
            >
              <SiMinutemailer size={30} />
              <p>See Projects</p>
            </a>
            <a
              download={true}
              href="https://github.com/AndreiSager/files/blob/495a5a1c5238bc0de0bd23ee95d40821accaf439/curriculum_vitae-no_photo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full min-w-[210px] select-none flex-row items-center justify-center gap-3 rounded-[10px] border border-gray bg-transparent p-[16px] text-center font-bold text-gray hover:brightness-110 md:w-[300px]"
            >
              <FaGithub size={30} />
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
