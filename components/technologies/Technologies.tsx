import React, { useRef } from "react";

import { TechnologiesSectionContent as Skills } from "@/constants/SectionContent";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
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
    <div id="technologies" className="technologies px-2">
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
      <ul className="w-full grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5">
        {Skills.map((skill) => (
          <TechnologiesCard key={skill.id} />
        ))}
      </ul>
      {/* <div className="w-[90%] md:w-[55%] flex flex-col gap-[20px]">
        <div className=" text-white">
          <motion.h1
            className="sectionOverline !text-white"
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
            Tools I Am Most Familiar With{" "}
          </motion.h1>
        </div>
        <motion.p
          className="sectionLeading !text-white"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          As a Software Developer I have decided to master a small set of
          skills. Nonetheless, I am willing and eager to learn new technologies
          that allow me to give more value to my clients while build myself up
          even further.
        </motion.p>
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="technologiesCardGrid"
      >
        {TechList.map(
          ({
            id,
            frontTitle,
            frontIcon,
            frontCategoryIcon,
            backTitle,
            backIcon,
          }) => (
            <motion.li
              variants={item}
              key={id}
              className="hover:-translate-y-2 group transition-all duration-500"
            >
              <div className="technologiesCard">
                <div className="technologiesCard__back text-center">
                  {backIcon}
                  <span>{frontTitle}</span>
                  <span className="text-xs">{backTitle}</span>
                </div>
                <div className="technologiesCard__front">
                  <div className="w-full flex justify-end">
                    {frontCategoryIcon}
                  </div>
                  {frontIcon}
                  <div className="w-full">{frontCategoryIcon}</div>
                </div>
              </div>
            </motion.li>
          )
        )}
      </motion.ul>
      <Image
        src="/laptop-1.jpg"
        fill
        alt="Background"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
        className="absolute inset-0 -z-10 object-cover"
      /> */}
    </div>
  );
};

export default Technologies;
