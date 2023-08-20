import React from "react";

import { TechnologiesSectionContent as TechList } from "@/constants/SectionContent";
import { TechnologiesSectionHeading } from "@/constants/SectionHeading";
import Image from "next/image";

const Technologies = () => {
  const { overline, header, description } = TechnologiesSectionHeading;

  return (
    <div id="technologies" className="sectionPadding technologies relative">
      <div className="w-[90%] md:w-[55%] flex flex-col gap-[20px]">
        <div className=" text-white">
          <h1 className="sectionOverline !text-white">{overline}</h1>
          <h1 className="sectionHeader">{header}</h1>
        </div>
        <p className="sectionDescription !text-white">{description}</p>
      </div>
      <ul className="technologiesCardGrid">
        {TechList.map(({ id, frontTitle, frontIcon, frontCategoryIcon, backTitle, backIcon }) => (
          <li key={id} className="hover:-translate-y-2 group transition-all duration-500">
            <div className="technologiesCard">
              <div className="technologiesCard__back">
                {backIcon}
                <span>{frontTitle}</span>
                <span className="text-xs">{backTitle}</span>
              </div>
              <div className="technologiesCard__front">
                <div className="w-full flex justify-end">{frontCategoryIcon}</div>
                {frontIcon}
                <div className="w-full">{frontCategoryIcon}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Image
        src="/laptop-1.jpg"
        fill
        alt="Background"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
        className="absolute top-0 left-0 -z-10 object-cover"
      />
    </div>
  );
};

export default Technologies;
