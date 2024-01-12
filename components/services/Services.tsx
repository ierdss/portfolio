import { useRef } from "react";

import Image from "next/image";
import { ServiceCard } from "./ServiceCards";
import { ServicesSectionContent as card } from "@/constants";

import { motion, useInView } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="services"
      className="w-full bg-rose-50 flex items-center justify-center"
    >
      <div className="services sectionPadding">
        <div className="servicesContent">
          <div className="w-full  md:w-full">
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
          </div>
          <motion.p
            className="sectionLeading sm:text-center md:text-left"
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
        <div className="servicesCards relative">
          <Image
            typeof="background"
            src={"/patterns/ring.svg"}
            width={400}
            height={400}
            alt="This is impossible! An svg did not load?"
            className="servicesBackground top-1/2 left-1/2 translate-x-[-50%] translate-y-[-40%] hidden sm:flex"
          />
          <div className="servicesCardsCol">
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              <ServiceCard
                icon={card[0].icon}
                title={card[0].title}
                paragraph={card[0].description}
                colorType="serviceCard__red"
              />
            </motion.div>

            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <ServiceCard
                icon={card[1].icon}
                title={card[1].title}
                paragraph={card[1].description}
                colorType="serviceCard"
              />
            </motion.div>
          </div>
          <div className="servicesCardsCol sm:mt-[50px]">
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
              <ServiceCard
                icon={card[2].icon}
                title={card[2].title}
                paragraph={card[2].description}
                colorType="serviceCard"
              />
            </motion.div>
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
            >
              <ServiceCard
                icon={card[3].icon}
                title={card[3].title}
                paragraph={card[3].description}
                colorType="serviceCard"
              />
            </motion.div>
          </div>
          {/* <div className="servicesCardsRow xs:mt-[100px]">
          <ServiceCard
            icon={card[2].icon}
            title={card[2].title}
            paragraph={card[2].description}
            colorType="serviceCard"
          />
          <ServiceCard
            icon={card[3].icon}
            title={card[3].title}
            paragraph={card[3].description}
            colorType="serviceCard"
          />
        </div> */}
        </div>
        <Image
          typeof="background"
          src={"/patterns/ring-left.svg"}
          width={1000}
          height={1000}
          alt="This is impossible! An svg did not load?"
          priority
          className="servicesBackground -bottom-1/3 right-0 translate-y-[-61%] sm:hidden"
        />
      </div>
    </div>
  );
}
