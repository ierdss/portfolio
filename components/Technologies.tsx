import React, { ReactNode } from "react";
import { Technologies as TechList } from "@/constants";
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

        <ul className="technologies__list z-20">
          {TechList.map((technology) => (
            <Technology
              key={technology.name}
              icon={technology.icon}
              name={technology.name}
              link={technology.link}
            />
          ))}
        </ul>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[650px] w-[650px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-[650px] w-[650px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-2 blur-[300px]" />
        <div className="bg-accent-3 absolute bottom-0 right-0 z-10 h-[650px] w-[650px] translate-x-[30%] translate-y-[30%] rounded-full blur-[300px]" />
      </div>
    </div>
  );
}

interface ITechnologyCard {
  icon: ReactNode;
  name: string;
  link: string;
}

function Technology({ icon, name, link }: ITechnologyCard) {
  return (
    <a
      href={link || "/"}
      target="_blank"
      className="group flex aspect-16/11 h-[220px] w-[480px] flex-row flex-wrap items-center justify-center gap-4 rounded-2xl shadow-md transition-all duration-300 ease-out hover:scale-105"
    >
      <div className="group-hover:text-secondary-red">
        {icon || <FaQuestion size={30} />}
      </div>
      <h1 className="text-[32px] font-bold group-hover:text-secondary-red">
        {name || "Name"}
      </h1>
    </a>
  );
}
