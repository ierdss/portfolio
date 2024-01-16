import { useRef } from "react";

import Image from "next/image";
import ServiceCards from "./ServiceCards";
import { ServicesSectionContent as cards } from "@/constants";

import { motion, useInView } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="services" className="services">
      <div className="max-w-[250px]">
        <motion.h1
          className="sectionOverline sm:text-center md:text-left"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          Services
        </motion.h1>
        <motion.h1
          className="sectionHeading sm:text-center md:text-left"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          What I Can Offer
        </motion.h1>
        <motion.p
          className="sectionLeading sm:text-center md:text-left max-w-[220px]"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          With my services, I can make your product ideas come to life.
        </motion.p>
      </div>
      <div className="w-full">
        <ServiceCards cards={cards} />
      </div>
      <Image
        typeof="background"
        src={"/patterns/ring.svg"}
        width={1000}
        height={1000}
        alt="This is impossible! An svg did not load?"
        className="servicesBackground top-1/2 left-1/2 translate-x-[-40%] translate-y-[-29%] hidden sm:flex"
      />
      <Image
        typeof="background"
        src={"/patterns/ring-left.svg"}
        width={1000}
        height={1000}
        alt="This is impossible! An svg did not load?"
        priority
        className="servicesBackground -bottom-1/3 right-0 translate-x-[20%] translate-y-[-60%] sm:hidden"
      />
    </div>
  );
}
