import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { PrismaClient } from "@prisma/client";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

export default function Projects() {
  const prisma = new PrismaClient();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="projects"
      className="w-full h-fit flex flex-col justify-center items-center md:text-left px-2 sm:px-5 "
    >
      <div className="flex flex-col justify-center items-center w-full gap-[50px] section-padding__y-axis">
        <div className="">
          <h1 className="sectionOverline !text-center">Projects</h1>
          <h1 className="sectionHeading !text-center" ref={ref}>
            Check Out My Projects!
          </h1>
        </div>
        <FeaturedProjects />
        <OtherProjects />
      </div>
    </div>
  );
}
