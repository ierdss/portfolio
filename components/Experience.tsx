import React from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ExperienceSectionContent } from "@/constants";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center gap-[50px] bg-background-1"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[50px] px-[8px] py-[50px] md:flex-row md:px-[150px] md:py-[100px]">
        <div className="experience__heading">
          <h1 className="experience__heading-subtitle">Experience</h1>
          <h1 className="experience__heading-title">What Have I Done?</h1>
        </div>

        <VerticalTimeline className="experience__timeline" lineColor="#B40041">
          {ExperienceSectionContent.map(
            ({ icon, title, company, date, bullets }, index) => (
              <ExperienceCard
                key={index}
                icon={icon}
                title={title}
                company={company}
                date={date}
                bullets={bullets}
              />
            ),
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
}
