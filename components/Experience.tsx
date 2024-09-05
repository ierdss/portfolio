import React, { ReactNode } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceSectionContent } from "@/constants";

export default function Experiences() {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center gap-[50px] bg-background-1"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[70px] px-[8px] py-[50px] md:px-[150px] md:py-[100px]">
        <h1 className="z-20 w-full text-center text-[32px] font-bold capitalize text-gray md:text-[64px]">
          Where Have I Worked?
        </h1>

        <VerticalTimeline className="w-full" lineColor="#B40041">
          {ExperienceSectionContent.map(
            ({ id, icon, title, company, date, bullets, tags }) => (
              <Experience
                key={id}
                icon={icon}
                title={title}
                company={company}
                date={date}
                bullets={bullets}
                tags={tags}
              />
            ),
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
}

interface IExperience {
  icon: ReactNode;
  title: string;
  company: string;
  date: string;
  bullets: IBullet[];
  tags: ITag[];
}

interface IBullet {
  id: number;
  bullet: string;
}

interface ITag {
  id: number;
  tag: string;
}

function Experience({
  icon,
  title,
  company,
  date,
  bullets,
  tags,
}: IExperience) {
  return (
    <VerticalTimelineElement
      className="group w-full transition-all duration-500 ease-in-out hover:-translate-y-4"
      contentStyle={{
        background: "transparent",
        borderBottom: "transparet",
        color: "#252131",
      }}
      contentArrowStyle={{ borderRight: "10px solid #B40041" }}
      date={date}
      dateClassName="text-heading text-[16px]"
      icon={
        icon || (
          <div className="flex aspect-square w-full select-none">
            <Image
              src="/patterns/intersecting-circles.svg"
              width={300}
              height={300}
              alt="Circle"
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        )
      }
      iconClassName="bg-white"
    >
      <h1 className="text-2xl font-bold text-gray">{title}</h1>
      <h1 className="text-base font-bold uppercase text-secondary-red">
        {company}
      </h1>
      <ul className="mt-4 flex flex-row flex-wrap gap-2 text-gray2">
        {tags.map(({ id, tag }) => (
          <li
            key={id}
            className="border-gray1 rounded-full border px-4 py-1 text-[13px] font-bold"
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className="ml-4 mt-4 list-disc text-gray2">
        {bullets.map(({ id, bullet }) => (
          <li key={id} className="pl-1 text-base font-bold">
            {bullet}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}
