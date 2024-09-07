import React from "react";
import Marquee from "react-fast-marquee";
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoMarkdown } from "react-icons/io5";
import {
  SiNextdotjs,
  SiObsidian,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export default function Skills() {
  const iconSize = 50;

  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-background-2"
    >
      <div className="max-w-center relative flex w-full flex-col items-center justify-between gap-[70px] px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <h2 className="z-20 w-full text-center text-gray ">
          The Technologies I Use
          <br className="hidden md:flex" /> To Create My Works
        </h2>

        {/* Skill Stack */}
        <div className="z-20 flex w-[3000px] flex-col gap-[8px] [mask-image:radial-gradient(circle,#000_50%,transparent_90%)] md:gap-[40px]">
          {/* Skills Row 1 */}
          <Marquee
            play={true}
            direction={"left"}
            loop={0}
            pauseOnHover={false}
            speed={100}
            autoFill={true}
          >
            <ul className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.w3schools.com/html/default.asp"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-html text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-html"
                >
                  <FaHtml5 size={iconSize} />
                  <h4>HTML</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.w3schools.com/css/default.asp"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-css text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-css"
                >
                  <FaCss3Alt size={iconSize} />
                  <h4>CSS</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-tailwind text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-tailwind"
                >
                  <SiTailwindcss size={iconSize} />
                  <h4>Tailwind</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://sass-lang.com/documentation/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-sass text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-sass"
                >
                  <BiLogoSass size={iconSize} />
                  <h4>Sass</h4>
                </a>
              </div>
            </ul>
          </Marquee>

          {/* Skills Row 2 */}
          <Marquee
            play={true}
            direction={"right"}
            loop={0}
            pauseOnHover={false}
            speed={100}
            autoFill={true}
          >
            <ul className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.w3schools.com/js/default.asp"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-javascript text-blackberry transition-all duration-300 ease-out hover:scale-150 hover:bg-blackberry hover:text-javascript"
                >
                  <BiLogoJavascript size={iconSize} />
                  <h4>Javascript</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-typescript text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-typescript"
                >
                  <BiLogoTypescript size={iconSize} />
                  <h4>Typescript</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://react.dev/reference/react"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-react text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-react"
                >
                  <FaReact size={iconSize} />
                  <h4>React.JS</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiNextdotjs size={iconSize} />
                  <h4>Next.js</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiVercel size={iconSize} />
                  <h4>Vercel</h4>
                </a>
              </div>
            </ul>
          </Marquee>

          {/* Skills Row 3 */}
          <Marquee
            play={true}
            direction={"left"}
            loop={0}
            pauseOnHover={false}
            speed={100}
            autoFill={true}
          >
            <ul className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.markdownguide.org/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-blackberry text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-blackberry"
                >
                  <IoLogoMarkdown size={iconSize} />
                  <h4>Markdown</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://obsidian.md/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-obsidian text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-obsidian"
                >
                  <SiObsidian size={iconSize} />
                  <h4>Obsidian</h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-graphql text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-graphql"
                >
                  <GrGraphQl size={iconSize} />
                  <h4>GraphQl</h4>
                </a>
              </div>
              {/* <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiNextdotjs size={iconSize} />
                  <h4>
                    Next.js
                  </h4>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiVercel size={iconSize} />
                  <h4>Vercel</h4>
                </a>
              </div> */}
            </ul>
          </Marquee>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 -translate-x-[30%] -translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-1 bg-accent-1 blur-[300px] " />
        </div>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-2 bg-accent-2 blur-[300px]" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-3 bg-accent-3 blur-[300px]" />
        </div>
      </div>
    </div>
  );
}
