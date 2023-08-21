import React from "react";

import {
  ExperienceSectionHeading,
  ExperienceSectionContent,
} from "@/constants";

type TimelineProps = {
  timeline?: Array<TimelineCardProps>;
};

type TimelineCardProps = {
  position: string;
  timeframe: string;
  description: string;
  contributions: Array<String>;
};

export default function Experience({ timeline }: TimelineProps) {
  const { overline, header } = ExperienceSectionHeading;

  return (
    <div id="experience" className="w-full sectionPadding">
      <div className="">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
      </div>
      <ul>
        Card based timeline for ongoing work experience.
        {ExperienceSectionContent.map(
          ({ id, title, companyName, icon, date, bullets }) => (
            <li key={id} className="experienceCard"></li>
          )
        )}
      </ul>
    </div>
  );
}
