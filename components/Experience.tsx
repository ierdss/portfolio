import React, { ReactNode } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ExperienceSectionContent } from "@/constants";
import Image from "next/image";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  companyName: string;
  icon: ReactNode;
  date: string;
  bullets: Array<String>;
};

type ExperienceTimelineProps = {
  experience: Array<ExperienceCardProps>;
};

function ExperienceCard({
  title,
  companyName,
  icon,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      className="relative group hover:-translate-y-4 transition-all ease-in-out duration-500 overflow-hidden"
      contentStyle={{
        background: "white",
        color: "black",
        borderBottomColor: "#212121",
      }}
      contentArrowStyle={{ borderRight: "7px solid #B40041" }}
      date={date}
      dateClassName="text-black"
      icon={
        <div className="flex w-full aspect-square ">
          <Image
            src="/patterns/intersecting-circles.svg"
            fill
            alt="Circle"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      }
      iconClassName="bg-white overflow-hidden"
    >
      <h1 className="projectTitle">{title}</h1>
      <h1 className="text-xs font-bold text-secondary-red uppercase">
        {companyName}
      </h1>
      <ul className="list-disc mt-4 ml-4">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm tracking-wider pl-1 font-medium">
            {bullet}
          </li>
        ))}
      </ul>
      <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-700 group-hover:w-full" />
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="experience"
      className="w-full sectionPadding flexCenter flex-col gap-[50px]"
    >
      <div className="w-[90%] md:w-full !text-left md:!text-center">
        <motion.h1
          className="sectionOverline !text-left md:!text-center"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          Experience
        </motion.h1>
        <motion.h1
          className="sectionHeading !text-left md:!text-center"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          What Have I Done?
        </motion.h1>
      </div>
      <VerticalTimeline className="w-full" lineColor="#B40041">
        {ExperienceSectionContent.map(
          ({ title, companyName, icon, date, bullets }, index) => (
            <ExperienceCard
              key={index}
              title={title}
              companyName={companyName}
              icon={icon}
              date={date}
              bullets={bullets}
            />
          )
        )}
      </VerticalTimeline>
    </div>
  );
}
