import React from "react";
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoMarkdown } from "react-icons/io5";
import {
  SiNextdotjs,
  SiObsidian,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  const iconSize = 40;

  return (
    <div
      id="skills"
      className="j/saustify-center flex w-full flex-col items-center overflow-hidden bg-background-2"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-between gap-12 px-2 py-12 md:gap-20 md:px-40 md:py-48">
        <h2 className="z-20 w-full text-center text-text">
          Skills and Technologies
        </h2>

        {/* Skill Stack */}
        <div className="z-20 flex w-[3000px] flex-col gap-2 [mask-image:radial-gradient(circle,#000_50%,transparent_90%)] md:gap-10">
          <ul className="first-letter: z-20 mr-3 flex w-full flex-row justify-center gap-3 md:mr-5 md:gap-5">
            <div className="min-h-52 overflow-hidden rounded-[20px]">
              <a
                href="https://www.w3schools.com/html/default.asp"
                target="_blank"
                className="skill-card bg-html hover:text-html"
              >
                <FaHtml5 size={iconSize} />
                <h6>HTML</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
                className="skill-card bg-css hover:text-css"
              >
                <FaCss3Alt size={iconSize} />
                <h6>CSS</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://tailwindcss.com/docs/installation"
                target="_blank"
                className="skill-card bg-tailwind hover:text-tailwind"
              >
                <SiTailwindcss size={iconSize} />
                <h6>Tailwind</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://sass-lang.com/documentation/"
                target="_blank"
                className="skill-card bg-sass hover:text-sass"
              >
                <BiLogoSass size={iconSize} />
                <h6>Sass</h6>
              </a>
            </div>
          </ul>

          {/* Skills Row 2 */}
          <ul className="first-letter: z-20 mr-3 flex w-full flex-row justify-center gap-3 md:mr-5 md:gap-5">
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://www.w3schools.com/js/default.asp"
                target="_blank"
                className="skill-card bg-javascript hover:text-javascript"
              >
                <BiLogoJavascript size={iconSize} />
                <h6>Javascript</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                className="skill-card bg-typescript hover:text-typescript"
              >
                <BiLogoTypescript size={iconSize} />
                <h6>Typescript</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://react.dev/reference/react"
                target="_blank"
                className="skill-card bg-react hover:text-react"
              >
                <FaReact size={iconSize} />
                <h6>React.JS</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                className="skill-card bg-next hover:text-next"
              >
                <SiNextdotjs size={iconSize} />
                <h6>Next.js</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://vercel.com/docs"
                target="_blank"
                className="skill-card bg-next hover:text-next"
              >
                <SiVercel size={iconSize} />
                <h6>Vercel</h6>
              </a>
            </div>
          </ul>

          {/* Skills Row 3 */}
          <ul className="first-letter: z-20 mr-3 flex w-full flex-row justify-center gap-3 md:mr-5 md:gap-5">
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://www.markdownguide.org/"
                target="_blank"
                className="skill-card bg-blackberry hover:text-blackberry"
              >
                <IoLogoMarkdown size={iconSize} />
                <h6>Markdown</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://obsidian.md/"
                target="_blank"
                className="skill-card bg-obsidian hover:text-obsidian"
              >
                <SiObsidian size={iconSize} />
                <h6>Obsidian</h6>
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <a
                href="https://graphql.org/"
                target="_blank"
                className="skill-card bg-graphql hover:text-graphql"
              >
                <GrGraphQl size={iconSize} />
                <h6>GraphQl</h6>
              </a>
            </div>
            {/* <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-56 w-[30rem] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
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
                  className="flex aspect-16/11 h-56 w-[30rem] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiVercel size={iconSize} />
                  <h4>Vercel</h4>
                </a>
              </div> */}
          </ul>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 -translate-x-[30%] -translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-1 blur-[300px] md:animate-grow-shrink-1 " />
        </div>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-2 blur-[300px] md:animate-grow-shrink-2" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-3 blur-[300px] md:animate-grow-shrink-3" />
        </div>
      </div>
    </div>
  );
}
