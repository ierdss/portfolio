import React from "react";

import { Technologies as TechList } from "@/constants";
import TechnologiesCard from "./TechnologiesCard";

export default function Technologies() {
  return (
    <div
      id="technologies"
      className="bg-background-2 flex w-full flex-col items-center justify-center gap-8 px-2"
    >
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
    </div>
  );
}
