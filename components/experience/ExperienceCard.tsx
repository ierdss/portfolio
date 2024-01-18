import { ReactNode } from "react";

import Image from "next/image";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceCardProps = {
  icon: ReactNode;
  title: string;
  companyName: string;
  date: string;
  bullets: Array<String>;
};

type ExperienceTimelineProps = {
  experience: Array<ExperienceCardProps>;
};

export default function ExperienceCard({
  icon,
  title,
  companyName,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      className="relative group hover:-translate-y-4 transition-all ease-in-out duration-500 overflow-hidden"
      contentStyle={{
        background: "white",
        color: "black",
        borderBottomColor: "#212121",
      }}
      contentArrowStyle={{ borderRight: "7px solid #B40041" }}
      date={date}
      dateClassName="text-black"
      icon={
        icon || (
          <div className="flex w-full aspect-square ">
            <Image
              src="/patterns/intersecting-circles.svg"
              fill
              alt="Circle"
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        )
      }
      iconClassName="bg-white overflow-hidden"
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
