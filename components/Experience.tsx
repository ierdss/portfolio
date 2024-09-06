import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experiences as ExperiencesContent } from "@/constants";
import { FaStar } from "react-icons/fa";

export default function Experiences() {
  const testingVisibility = false;

  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center gap-[50px] bg-background-1"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[70px] px-[8px] py-[50px] md:px-[150px] md:py-[100px]">
        <h2 className="z-20 w-full text-center text-gray">
          Where Have I Worked?
        </h2>

        <VerticalTimeline className="w-full" lineColor="#B40041">
          {ExperiencesContent.map(
            ({ id, icon, iconStyle, title, subtitle, date, bullets, tags }) => (
              <VerticalTimelineElement
                key={id}
                className="group relative w-full transition-all duration-500 ease-in-out hover:-translate-y-4"
                contentStyle={{
                  background: "transparent",
                  color: "#252131",
                }}
                contentArrowStyle={{ borderRight: "10px solid #B40041" }}
                date={date}
                dateClassName="text-heading text-[16px]"
                icon={icon}
                iconStyle={iconStyle}
                iconClassName="scale-150"
                visible={testingVisibility}
              >
                <h1 className="text-2xl font-bold text-gray">{title}</h1>
                <h1 className="text-base font-bold uppercase text-secondary-red">
                  {subtitle}
                </h1>
                <ul className="mt-4 flex flex-row flex-wrap gap-2 text-gray2">
                  {tags.map(({ id, tag }) => (
                    <li
                      key={id}
                      className="border-gray1 rounded-full border px-4 py-1 text-[13px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="ml-4 mt-4 list-disc text-gray2">
                  {bullets.map(({ id, bullet }) => (
                    <li key={id} className="pl-1 text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <span className="ease absolute bottom-0 left-[50%] z-20 h-0 w-0 -translate-x-1/2 border-t-2 border-secondary-red transition-all duration-700 group-hover:w-full" />
                <div className="absolute -bottom-1 left-0 z-10 h-2 w-full bg-blackberry" />
              </VerticalTimelineElement>
            ),
          )}
          {/* TODO: Make this add new elements on click in the future when I have more job experience. */}
          <VerticalTimelineElement
            iconStyle={{ background: "#B40041", color: "#fff" }}
            icon={<FaStar />}
            visible={testingVisibility}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
