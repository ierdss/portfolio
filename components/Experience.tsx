import React, { ReactNode } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  ExperienceSectionHeading,
  ExperienceSectionContent,
} from "@/constants";
import Image from "next/image";

type ExperienceCardProps = {
  title: string;
  companyName: string;
  icon: ReactNode;
  date: string;
  bullets: Array<String>;
};

type ExperienceTimelineProps = {
  experience: Array<ExperienceCardProps>;
};

function ExperienceCard({
  title,
  companyName,
  icon,
  date,
  bullets,
}: ExperienceCardProps) {
  // className="experienceCard"

  return (
    <VerticalTimelineElement
      className="relative group hover:-translate-y-4 transition-all ease-in-out duration-500 "
      contentStyle={{
        background: "white",
        color: "black",
        borderBottomColor: "#212121",
      }}
      contentArrowStyle={{ borderRight: "7px solid #B40041" }}
      date={date}
      dateClassName="text-black"
      icon={
        <div className="flexCenter w-full aspect-square">
          <Image
            src="/patterns/intersecting-circles.svg"
            fill
            alt="Me in red"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      }
      iconStyle={{
        color: "#B40041",
      }}
      iconClassName="bg-white overflow-hidden shadow-xl"
    >
      <h1 className="projectTitle">{title}</h1>
      <h1 className="text-xs font-bold text-secondary-red uppercase">
        {companyName}
      </h1>
      <ul className="list-disc mt-4 ml-4">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm tracking-wider pl-1 font-medium">
            {bullet}
          </li>
        ))}
      </ul>
      <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-700 group-hover:w-full" />
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const { overline, header } = ExperienceSectionHeading;

  return (
    <div
      id="experience"
      className="w-full sectionPadding flexCenter flex-col gap-[50px]"
    >
      <div className="w-[90%] md:w-full text-left md:text-center">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
      </div>
      <VerticalTimeline className="w-full" lineColor="#B40041">
        {ExperienceSectionContent.map(
          ({ title, companyName, icon, date, bullets }, index) => (
            <ExperienceCard
              key={index}
              title={title}
              companyName={companyName}
              icon={icon}
              date={date}
              bullets={bullets}
            />
          )
        )}
      </VerticalTimeline>
    </div>
  );
}
