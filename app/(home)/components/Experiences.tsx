import { Divider, Heading1, ViewMoreBtn } from "@/components";
import {
  ExperiencesDataEducation,
  ExperiencesDataUpskill,
  ExperiencesDataWork,
  ExperiencesTabs,
} from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import $ from "jquery";
import React, { useState } from "react";

export default function Experiences() {
  const experiences = ExperiencesDataWork;
  const education = ExperiencesDataEducation;
  const upskill = ExperiencesDataUpskill;

  const [tab, setTab] = useState("Work");
  const [tabTitle, setTabTitle] = useState("Work Experience");
  const tabHandler = (tab: string, title: string) => {
    setTab(tab);
    setTabTitle(title);
  };

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    console.clear();
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".card", { opacity: 0, y: 100 });
    gsap.to(".card", {
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "play none none reset",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
    });
  }, [tab]);
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center bg-pattern"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 overflow-hidden px-2 py-12 md:gap-12 md:px-10 md:py-24">
        <div className="flex w-full max-w-screen-xl flex-col justify-start gap-8 md:justify-between">
          <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
            <Heading1 text={tabTitle} />
            <ViewMoreBtn text="View All Experiences" href="/experiences" />
          </div>
          <ul className="flex flex-row gap-4">
            {ExperiencesTabs.map(({ label, title }, index) => (
              <div
                key={index}
                className="tab cursor-pointer text-sm capitalize text-text"
                onClick={() => tabHandler(label, title)}
              >
                {label}
              </div>
            ))}
          </ul>
        </div>

        <Divider />
        {tab === "Work" && (
          <ul className="flex w-full max-w-screen-xl flex-col gap-8">
            {experiences.map(
              (
                { icon, iconStyle, title, company, date, bullets, tags },
                index,
              ) => (
                <li className="card flex flex-col gap-4" key={index}>
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
                        className="rounded-full border border-text/70 px-2 py-0.5 text-xs"
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
        )}

        {/* Education */}
        {tab === "Education" && (
          <ul className="flex w-full max-w-screen-xl flex-col gap-8">
            {education.map(
              ({ degree, institution, graduationDate, description }, index) => (
                <li className="card flex flex-col gap-4" key={index}>
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
        )}

        {/* Upskill Certificates */}
        {tab === "Upskill" && (
          <ul className="flex w-full max-w-screen-xl flex-col gap-8">
            {upskill.map(({ title, platform, date, tags }, index) => (
              <li className="card flex flex-col gap-4" key={index}>
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
                      className="rounded-full border border-text/70 px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="border-b border-b-text opacity-10" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
