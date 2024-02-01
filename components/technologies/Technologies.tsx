import React, { useRef } from "react";

import { Technologies as TechList } from "@/constants";
import { motion, useInView } from "framer-motion";
import TechnologiesCard from "./TechnologiesCard";

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transform: "translateY(100px)" },
    show: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <div id="technologies" className="technologies">
      <div>
        <motion.h1
          className="sectionOverline"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          Technologies
        </motion.h1>
        <motion.h1
          className="sectionHeading"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          Skills Inside My Toolbox
        </motion.h1>
      </div>
      <ul className="technologies__list">
        {TechList.map((technology) => (
          <TechnologiesCard
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
            link={technology.link}
          />
        ))}
      </ul>
    </div>
  );
}
