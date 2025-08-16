import { Divider, Heading1, ViewMoreBtn } from "@/components";
import {
  ExperiencesDataEducation,
  ExperiencesDataUpskill,
  ExperiencesDataWork,
  ExperiencesTabs,
} from "@/constants";
import Link from "next/link";
import React from "react";

export default function Experiences() {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center bg-background-1"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 overflow-hidden px-2 py-12 md:gap-12 md:px-10 md:py-24">
        <div className="flex w-full max-w-screen-xl flex-col justify-start gap-8 md:justify-between">
          <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
            <Heading1 text="Work Experience" />
            <ViewMoreBtn text="View All Experiences" href="/experiences" />
          </div>
          <ul className="flex flex-row gap-4">
            {ExperiencesTabs.map(({ id, href, text }) => (
              <Link
                key={id}
                href={href}
                className="cursor-pointer text-sm capitalize text-text"
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>

        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {ExperiencesDataWork.toReversed().map(
            (
              { id, icon, iconStyle, title, company, date, bullets, tags },
              index,
            ) => (
              <li className=" flex flex-col gap-4" key={id}>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <h5 className="text-lg">
                    {title} •<span className="text-redberry"> {company}</span>
                  </h5>
                  <p className="text-sm">{date}</p>
                </div>
                <ul className="flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((tag, index) => (
                    <li
                      key={`tag${index}`}
                      className="leading-0 rounded-full border border-text/70 px-2 py-0.5 text-xs capitalize"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="ml-5 list-disc text-text">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-text/70">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="border-b border-b-text opacity-10"></div>
              </li>
            ),
          )}
        </ul>

        {/* Education */}
        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {ExperiencesDataEducation.toReversed().map(
            (
              { id, degree, institution, graduationDate, description },
              index,
            ) => (
              <li className=" flex flex-col gap-4" key={id}>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <h5 className="text-lg">
                    {degree} •
                    <span className="text-redberry"> {institution}</span>
                  </h5>
                  <p className="text-sm">Graduated: {graduationDate}</p>
                </div>
                <p className="text-sm text-text/70">{description}</p>
                <div className="border-b border-b-text opacity-10"></div>
              </li>
            ),
          )}
        </ul>

        {/* Upskill Certificates */}
        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {ExperiencesDataUpskill.toReversed().map(
            ({ id, title, platform, date, tags }, index) => (
              <li className=" flex flex-col gap-4" key={id}>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <h5 className="text-lg">
                    {title} •<span className="text-redberry"> {platform}</span>
                  </h5>
                  <p className="text-sm">Completed: {date}</p>
                </div>
                <ul className="flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((tag, index) => (
                    <li
                      key={`tag${index}`}
                      className="leading-0 rounded-full border border-text/70 px-2 py-0.5 text-xs capitalize"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {/* <ul className="ml-5 list-disc text-text">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-text/70">
                      {bullet}
                    </li>
                  ))}
                </ul> */}
                <div className="border-b border-b-text opacity-10" />
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
