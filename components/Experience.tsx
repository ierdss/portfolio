import { ExperiencesData } from "@/constants";
import Link from "next/link";
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
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 overflow-hidden px-2 py-12 md:gap-12 md:px-40 md:py-24">
        <div className="flex w-full max-w-screen-xl flex-col justify-start gap-8 md:justify-between">
          <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
            <Heading1 text="Work Experience" />
            <ViewMoreBtn text="View All Experiences" href="/experiences" />
          </div>
          <ul className="flex flex-row gap-4">
            {Pages.map(({ id, href, text }) => (
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
        <ul className="flex w-full max-w-screen-xl flex-col gap-12">
          {ExperiencesData.toReversed().map(
            (
              { id, icon, iconStyle, title, company, date, bullets, tags },
              index,
            ) => (
              <li className=" flex flex-col gap-5" key={id}>
                <div className="flex flex-row justify-between">
                  <h5>
                    {title} •<span className="text-redberry"> {company}</span>
                  </h5>
                  <p>{date}</p>
                </div>
                <ul className="flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((tag, index) => (
                    <li
                      key={`tag${index}`}
                      className="rounded-full border border-text px-4 py-1 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc text-text">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="pl-1 text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="border-b border-b-text opacity-10"></div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

const Pages = [
  { id: 1, href: "/work", text: "Work" },
  { id: 2, href: "/education", text: "Education" },
  { id: 3, href: "/certificates", text: "Certificates" },
];
