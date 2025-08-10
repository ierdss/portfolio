import { ExperiencesData } from "@/constants";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ViewMoreBtn from "./buttons/ViewMoreBtn";
import Heading1 from "./headings/Heading1";

export default function Experiences() {
  const testingVisibility = false;

  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center bg-background-1"
    >
      <div className="flex w-full max-w-center flex-col justify-between gap-12 overflow-hidden px-2 py-12 md:gap-20 md:px-40 md:py-24">
        <div className="flex w-full flex-row justify-between">
          <Heading1 text="Work Experience" />
          <ViewMoreBtn text="View All Experiences" href="/experiences" />
        </div>

        <VerticalTimeline className="w-full" lineColor="#B40041">
          {ExperiencesData.map(
            (
              { icon, iconStyle, title, subtitle, date, bullets, tags },
              index,
            ) => (
              <VerticalTimelineElement
                key={index}
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
                <h4 className="text-2xl font-bold text-text">{title}</h4>
                <h6 className="text-base font-bold uppercase text-primary">
                  {subtitle}
                </h6>
                <ul className="mt-4 flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-full border border-text px-4 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="ml-4 mt-4 list-disc text-text">
                  {bullets.map((item, index) => (
                    <li key={index} className="pl-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="ease absolute bottom-0 left-[50%] z-20 h-0 w-0 -translate-x-1/2 border-t-2 border-primary transition-all duration-700 group-hover:w-full" />
                <div className="absolute -bottom-1 left-0 z-10 h-2 w-full bg-background-1" />
                <div className="absolute -left-1 top-0 z-10 h-full w-2 bg-background-1" />
                <div className="absolute -right-1 top-0 z-10 h-full w-2 bg-background-1" />
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
