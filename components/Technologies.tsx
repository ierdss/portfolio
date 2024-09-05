import React from "react";

import { Technologies as TechList } from "@/constants";
import TechnologiesCard from "./TechnologiesCard";

export default function Technologies() {
  return (
    <div
      id="technologies"
      className="flex w-full flex-col items-center justify-center bg-background-2"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] overflow-hidden px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <div>
          <h1 className="sectionOverline">Technologies</h1>
          <h1 className="sectionHeading">Skills Inside My Toolbox</h1>
        </div>
        <ul className="technologies__list">
          {TechList.map((technology) => (
            <TechnologiesCard
              key={technology.name}
              icon={technology.icon}
              name={technology.name}
              link={technology.link}
            />
          ))}
        </ul>

        {/* Background Mist Effect */}
        <div className="absolute left-0 top-0 z-10 h-[500px] w-[500px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[400px]" />
        <div className="bg-accent-3 absolute left-[50%] top-[50%] z-10 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[50%] rounded-full blur-[400px]" />
        <div className="absolute bottom-0 right-0 z-10 h-[500px] w-[500px] translate-x-[30%] translate-y-[30%] rounded-full bg-accent-2 blur-[400px]" />
      </div>
    </div>
  );
}
