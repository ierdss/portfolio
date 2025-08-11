import { ExperiencesData } from "@/constants";
import React from "react";
import ViewMoreBtn from "./buttons/ViewMoreBtn";
import Divider from "./divider/Divider";
import Heading1 from "./headings/Heading1";

export default function Experiences() {
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

        <Divider />
        <ul>
          {ExperiencesData.map(
            (
              { icon, iconStyle, title, company, date, bullets, tags },
              index,
            ) => (
              <li>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-4">
                    <h5>
                      {title} •<span className="text-redberry"> {company}</span>
                    </h5>
                  </div>
                  <p>{date}</p>
                </div>
                <ul className="mt-4 flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((tag, index) => (
                    <li>
                      <li
                        key={index}
                        className="rounded-full border border-text px-4 py-1 text-xs"
                      >
                        {tag}
                      </li>
                    </li>
                  ))}
                </ul>
                <ul className="ml-4 mt-4 list-disc text-text">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="pl-1 text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
