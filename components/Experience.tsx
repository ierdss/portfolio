import React from "react";

import { ExperienceSectionHeading } from "@/constants";

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
    <div className="w-full sectionPadding">
      <div className="">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
      </div>
      <div>Card based timeline for ongoing work experience.</div>
    </div>
  );
}
