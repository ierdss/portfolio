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

export default function Technologies() {
  const iconSize = 50;

  return (
    <div
      id="technologies"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-background-2"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <h1 className="z-20 w-full text-center text-[32px] font-bold capitalize text-gray md:text-[64px]">
          The Technologies I Use
          <br className="hidden md:flex" /> To Create My Works
        </h1>

        {/* Skill Stack */}
        <div className="z-20 flex max-w-[1980px] flex-col gap-[8px] md:gap-[40px]">
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
                  <h1 className="bg-clip-text text-[32px] font-bold">HTML</h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.w3schools.com/css/default.asp"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-css text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-css"
                >
                  <FaCss3Alt size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">CSS</h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-tailwind text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-tailwind"
                >
                  <SiTailwindcss size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Tailwind
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://sass-lang.com/documentation/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-sass text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-sass"
                >
                  <BiLogoSass size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">Sass</h1>
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
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Javascript
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-typescript text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-typescript"
                >
                  <BiLogoTypescript size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Typescript
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://react.dev/reference/react"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-react text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-react"
                >
                  <FaReact size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    React.JS
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiNextdotjs size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Next.js
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiVercel size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">Vercel</h1>
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
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Markdown
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://obsidian.md/"
                  target="_blank"
                  className="bg-obsidian hover:text-obsidian flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray"
                >
                  <SiObsidian size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Obsidian
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  className="bg-graphql hover:text-graphql flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray"
                >
                  <GrGraphQl size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    GraphQl
                  </h1>
                </a>
              </div>
              {/* <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiNextdotjs size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">
                    Next.js
                  </h1>
                </a>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-next text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-next"
                >
                  <SiVercel size={iconSize} />
                  <h1 className="bg-clip-text text-[32px] font-bold">Vercel</h1>
                </a>
              </div> */}
            </ul>
          </Marquee>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[650px] w-[650px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-[650px] w-[650px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-2 blur-[300px]" />
        <div className="absolute bottom-0 right-0 z-10 h-[650px] w-[650px] translate-x-[30%] translate-y-[30%] rounded-full bg-accent-3 blur-[300px]" />
      </div>
    </div>
  );
}
