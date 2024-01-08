import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { PrismaClient } from "@prisma/client";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

export default async function Projects() {
  const prisma = new PrismaClient();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="projects"
      className="w-full flex flex-col justify-center items-center md:text-left"
    >
      <div className="flex flex-col justify-center items-center w-full gap-[50px] sectionPadding">
        <div className="">
          <motion.h1
            className="sectionOverline !text-center"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}
          >
            Projects
          </motion.h1>
          <motion.h1
            className="sectionHeading !text-center"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            Check Out My Projects!
          </motion.h1>
        </div>

        <FeaturedProjects />
        <OtherProjects />
      </div>
    </div>
  );
}
