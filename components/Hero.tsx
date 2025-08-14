"use client";

import { SocialLinksData } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";
import { FaFileDownload, FaGithub } from "react-icons/fa";

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
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-10 px-2 py-24 md:flex-row lg:gap-20 lg:py-48">
        <div className="z-10 flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-background-1/50 lg:max-w-[400px]">
          <Image
            src="/portraits/barong.png"
            width={1000}
            height={1000}
            alt="Just a chill guy."
            priority
          />
        </div>

        <div className="z-20 order-2 flex w-fit max-w-[500px] shrink-0 flex-col items-center justify-center gap-4 text-center md:max-w-[350px] md:items-start md:gap-6 md:text-left lg:max-w-[500px]">
          <p>Hey, Im</p>
          <h1 className="leading-none text-redberry">
            Andrei
            <br />
            <span className="text-background-2">A</span>
            <span className="text-text">Sager</span>
          </h1>
          <p>
            A 25 y/o Frontend Web Developer based in the Philippines
            <br className="hidden lg:flex" /> specializing in Landing Pages &
            <br className="smd:flex hidden md:hidden" /> E-commerce Websites
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:justify-start">
            <div className="flex w-full items-center justify-center gap-2 md:justify-start md:gap-4">
              <a
                download={true}
                href="https://github.com/AndreiSager/files/blob/495a5a1c5238bc0de0bd23ee95d40821accaf439/curriculum_vitae-no_photo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
              >
                <FaFileDownload size={20} />
                <p>Resume</p>
              </a>
            </div>
            <ul className="flex w-fit flex-row justify-between gap-4">
              {SocialLinksData.map(({ id, icon, ariaLabel, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  aria-label={ariaLabel}
                  className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 inline-flex aspect-square h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-2 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                >
                  {icon}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
