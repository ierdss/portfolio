import React, { ReactNode } from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ExperienceSectionContent } from "@/constants";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="experience"
      className="w-full flexCenter flex-col gap-[50px] section-padding__y-axis"
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
