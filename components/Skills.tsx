import React, { ReactNode } from "react";
import { SkillsRow1, SkillsRow2, SkillsRow3 } from "@/constants";
import { FaHtml5, FaQuestion } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function Technologies() {
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
          {/* <SkillsRow row={SkillsRow1} direction="left" />
          <SkillsRow row={SkillsRow2} direction="right" />
          <SkillsRow row={SkillsRow3} direction="left" /> */}
          <Marquee
            play={true}
            direction={"left"}
            loop={0}
            pauseOnHover={false}
            speed={100}
            autoFill={true}
            className="overflow-visible"
          >
            <ul className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              <div className="overflow-hidden rounded-[20px]">
                <a
                  key={1}
                  href={"/"}
                  target="_blank"
                  className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 bg-html text-gray transition-all duration-300 ease-out hover:scale-150 hover:bg-gray hover:text-html"
                >
                  <FaHtml5 size={48} />
                  <h1 className="bg-clip-text text-[32px] font-bold">HTML</h1>
                </a>
              </div>
            </ul>
          </Marquee>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[650px] w-[650px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-[650px] w-[650px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-2 blur-[300px]" />
        <div className="bg-accent-3 absolute bottom-0 right-0 z-10 h-[650px] w-[650px] translate-x-[30%] translate-y-[30%] rounded-full blur-[300px]" />
      </div>
    </div>
  );
}

interface ISkillsRow {
  row: ISkillsRow[];
  direction: "left" | "right" | "up" | "down" | undefined;
}

interface ISkillsRow {
  id: number;
  icon: ReactNode;
  name: string;
  color: string;
  link: string;
}

function SkillsRow({ row, direction }: ISkillsRow) {
  return (
    <Marquee
      play={true}
      direction={direction}
      loop={0}
      pauseOnHover={false}
      speed={100}
      autoFill={true}
    >
      <ul className="first-letter: z-20 mr-3  flex w-full flex-row gap-3 md:mr-5 md:gap-5">
        {row.map(({ id, icon, name, color, link }) => (
          <a
            key={id}
            href={link || "/"}
            target="_blank"
            className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 rounded-2xl transition-all duration-300 ease-out hover:scale-105"
          >
            <div>{icon || <FaQuestion size={48} />}</div>
            <h1 className="text-[32px] font-bold">{name || "Name"}</h1>
          </a>
        ))}
      </ul>
    </Marquee>
  );
}
