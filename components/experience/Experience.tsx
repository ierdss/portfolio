import React from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ExperienceSectionContent } from "@/constants";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div id="experience" className="experience">
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
          )
        )}
      </VerticalTimeline>
    </div>
  );
}
