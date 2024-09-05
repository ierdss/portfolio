import React, { ReactNode } from "react";
import { SkillsRow1, SkillsRow2, SkillsRow3 } from "@/constants";
import { FaQuestion } from "react-icons/fa";

export default function Technologies() {
  return (
    <div
      id="technologies"
      className="flex w-full flex-col items-center justify-center bg-background-2"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] overflow-hidden px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <h1 className="z-20 w-full text-center text-[32px] font-bold capitalize text-gray md:text-[64px]">
          The Technologies I Use
          <br className="hidden md:flex" /> To Create My Works
        </h1>

        {/* Skill Stack */}
        <div className="flex flex-col gap-[8px] md:gap-[40px]">
          <SkillsRow row={SkillsRow1} />
          <SkillsRow row={SkillsRow2} />
          <SkillsRow row={SkillsRow3} />
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
}

interface ISkillsRow {
  id: number;
  icon: ReactNode;
  name: string;
  color: string;
  link: string;
}

function SkillsRow({ row }: ISkillsRow) {
  return (
    <ul className="first-letter: z-20 flex w-full flex-row gap-3 md:gap-5">
      {row.map(({ id, icon, name, color, link }) => (
        <a
          key={id}
          href={link || "/"}
          target="_blank"
          className="flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 rounded-2xl shadow-md transition-all duration-300 ease-out hover:scale-105"
        >
          <div className="">{icon || <FaQuestion size={48} />}</div>
          <h1 className="text-[32px] font-bold">{name || "Name"}</h1>
        </a>
      ))}
    </ul>
  );
}
