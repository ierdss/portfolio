import { Divider, Heading1 } from "@/components";
import settings, {
  ExperiencesDataEducation as education,
  ExperiencesTabs as tabs,
  ExperiencesDataUpskill as upskill,
  ExperiencesDataWork as work,
} from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef, useState } from "react";

export default function Experiences() {
  const [tab, setTab] = useState("Work");
  const [tabTitle, setTabTitle] = useState("Work Experience");
  const tabHandler = (tab: string, title: string) => {
    setTab(tab);
    setTabTitle(title);
  };

  if (settings.animation) {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
      // Experience Cards Animation
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".exp-card", { opacity: 0, y: 50 });
      ScrollTrigger.batch(".exp-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            stagger: 0.15,
            opacity: 1,
            y: 0,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
      });
    }, [tab]);

    useGSAP(() => {
      // Hover Animation
      gsap.utils.toArray(".exp-hover").forEach((el) => {
        const element = el as Element;
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 0.95,
            ease: "back.out(3)",
            overwrite: true,
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            ease: "back.out(3)",
            overwrite: true,
          });
        });
      });
    }, [tab]);
  }
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center bg-pattern"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 overflow-hidden px-2 py-12 md:gap-12 md:px-10 md:py-24">
        <div className="w-full max-w-screen-xl">
          <Heading1 text={tabs[0].title} />
        </div>
        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {work.map(
            ({ id, icon, iconStyle, title, company, date, bullets, tags }) => (
              <li className="exp-card exp-hover flex flex-col gap-4" key={id}>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <h5 className="text-lg">
                    {title} •<span className="text-redberry"> {company}</span>
                  </h5>
                  <p className="text-sm">{date}</p>
                </div>
                <ul className="flex flex-row flex-wrap gap-2 text-text">
                  {tags.map((tag) => (
                    <li
                      key={tag.id}
                      className="rounded-full border border-text/70 px-2 py-0.5 text-xs"
                    >
                      {tag.text}
                    </li>
                  ))}
                </ul>
                <ul className="ml-5 list-disc text-text">
                  {bullets.map((bullet) => (
                    <li key={bullet.id} className="text-sm text-text/70">
                      {bullet.text}
                    </li>
                  ))}
                </ul>
                <div className="border-b border-b-text opacity-10"></div>
              </li>
            ),
          )}
        </ul>

        <div className="w-full max-w-screen-xl">
          <Heading1 text={tabs[1].title} />
        </div>
        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {education.map(
            ({ id, degree, institution, graduationDate, description }) => (
              <li className="exp-card exp-hover flex flex-col gap-4" key={id}>
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

        <div className="w-full max-w-screen-xl">
          <Heading1 text={tabs[2].title} />
        </div>
        <Divider />
        <ul className="flex w-full max-w-screen-xl flex-col gap-8">
          {upskill.map(({ id, title, platform, date, tags }) => (
            <li className="exp-card exp-hover flex flex-col gap-4 " key={id}>
              <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                <h5 className="text-lg">
                  {title} •<span className="text-redberry"> {platform}</span>
                </h5>
                <p className="text-sm">Completed: {date}</p>
              </div>
              <ul className="flex flex-row flex-wrap gap-2 text-text">
                {tags.map((tag) => (
                  <li
                    key={tag.id}
                    className="rounded-full border border-text/70 px-2 py-0.5 text-xs"
                  >
                    {tag.text}
                  </li>
                ))}
              </ul>
              <div className="border-b border-b-text opacity-10" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
