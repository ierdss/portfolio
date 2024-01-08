import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { PrismaClient } from "@prisma/client";
import FeaturedProjects from "./FeaturedProjects";

export default async function Projects() {
  const prisma = new PrismaClient();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const project1 = await prisma.project.create({
  //   data: { title: "Lorebuilder" },
  // });

  // const project2 = await prisma.project.create({
  //   data: {
  //     title: "Roadway Delivery",
  //   },
  // });

  // const tag = await prisma.tag.create({
  //   data: {
  //     name: "HTML",
  //     type: "Markup Language",
  //   },
  // });

  // const project = await prisma.project.create({
  //   data: {
  //     title: "Marked A.I.",
  //     tags: { connect: { id: "659b60ba7354a795e7d4040d" } },
  //   },
  // });

  const projects = await prisma.project.findMany({
    where: { title: "Lorebuilder" },
  });

  // const projects = await prisma.project.findMany({
  //   include: {
  //     tags: true,
  //   },
  // });

  // const tags = await prisma.tag.findMany({
  //   where: { name: "HTML" },
  //   include: {
  //     projects: true,
  //   },
  // });

  return (
    // <div>
    //   <div>Prisma</div>
    //   {projects.map(({ title, subtitle, description, isFeatured }) => (
    //     <div>
    //       <h1>{title}</h1>
    //       <h1>{subtitle}</h1>
    //       <p>{description}</p>
    //       <p>{isFeatured}</p>
    //     </div>
    //   ))}
    // </div>
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
        {/* <div className="">
                <h1 className="sectionOverline">{overline}</h1>
                <h1 className="sectionHeader">{header}</h1>
            </div>
            <OtherProjects/> */}
      </div>
    </div>
  );
}
