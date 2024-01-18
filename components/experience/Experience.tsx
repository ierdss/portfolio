import React, { ReactNode } from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { ExperienceSectionContent } from "@/constants";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="experience" className="experience">
      <div className="experience__heading">
        <motion.h1
          className="experience__heading-subtitle"
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
          className="experience__heading-title"
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
