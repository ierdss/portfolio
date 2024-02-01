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
    <div id="projects" className="projects">
      <div className="">
        <h1 className="sectionOverline !text-center">Projects</h1>
        <h1 className="sectionHeading !text-center">Check Out My Projects!</h1>
      </div>
      <FeaturedProjects />
      <OtherProjects />
    </div>
  );
}
