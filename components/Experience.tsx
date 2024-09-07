import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperiencesData } from "@/constants";
import { FaStar } from "react-icons/fa";

export default function Experiences() {
  const testingVisibility = false;

  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center gap-12 bg-background-1"
    >
      <div className="max-w-center flex w-full flex-col justify-between gap-20 px-2 py-12 md:px-40 md:py-24">
        <h2 className="z-20 w-full text-center text-gray">
          Where Have I Worked?
        </h2>

        <VerticalTimeline className="w-full" lineColor="#B40041">
          {ExperiencesData.map(
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
                dateClassName="text-heading text-4"
                icon={icon}
                iconStyle={iconStyle}
                iconClassName="scale-150"
                visible={testingVisibility}
              >
                <h4 className="text-2xl font-bold text-gray">{title}</h4>
                <h6 className="text-base font-bold uppercase text-secondary-red">
                  {subtitle}
                </h6>
                <ul className="mt-4 flex flex-row flex-wrap gap-2 text-gray2">
                  {tags.map(({ id, tag }) => (
                    <li
                      key={id}
                      className="border-gray1 rounded-full border px-4 py-1 text-xs"
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
