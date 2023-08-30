import React, { useRef } from "react";

import { TechnologiesSectionContent as TechList } from "@/constants/SectionContent";
import { TechnologiesSectionHeading } from "@/constants/SectionHeading";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Technologies = () => {
  const { overline, header, description } = TechnologiesSectionHeading;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="technologies" className="sectionPadding technologies relative">
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "translateX(0px)" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="w-[90%] md:w-[55%] flex flex-col gap-[20px]"
      >
        <div className=" text-white">
          <h1 className="sectionOverline !text-white">{overline}</h1>
          <h1 className="sectionHeader">{header}</h1>
        </div>
        <p className="sectionDescription !text-white">{description}</p>
      </motion.div>
      <motion.ul className="technologiesCardGrid ">
        {TechList.map(
          ({
            id,
            frontTitle,
            frontIcon,
            frontCategoryIcon,
            backTitle,
            backIcon,
          }) => (
            <li
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
            </li>
          )
        )}
      </motion.ul>
      <Image
        src="/laptop-1.jpg"
        fill
        alt="Background"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
        className="absolute inset-0 -z-10 object-cover"
      />
    </div>
  );
};

export default Technologies;
