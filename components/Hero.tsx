"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Links from "./minor/Links";
import { HeroSectionHeading } from "@/constants/SectionHeading";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const { header, body } = HeroSectionHeading;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let profileCardEl = document.querySelectorAll<HTMLElement>(".heroCard");

    profileCardEl.forEach((heroCard) => {
      heroCard.addEventListener("mouseover", function () {
        profileCardEl.forEach((eachCard) => {
          eachCard.classList.remove("active");
        });
        heroCard.classList.add("active");
      });
    });
  }, []);

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, 2000);
  }),
    [];

  return (
    <div
      id="hero"
      className="hero sectionPadding md:!px-[100px] md:!pt-[100px] relative"
    >
      <div className="heroContainer z-10">
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: isDone
              ? ""
              : "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
          className="heroCard active"
        >
          <Image
            src="/placeholder/man-left.jpg"
            fill
            alt="man-left"
            priority
            quality={100}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 75vw, (max-width: 1280px) 100vw, 25vw"
            className="heroCard__image"
          />
          <div className="heroCard__content">
            <h1 className="sectionHeading">Andrei</h1>
            <p className="sectionOverline !text-white">Developer</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "translateY(50px)" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: isDone
              ? ""
              : "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="heroCard"
        >
          <Image
            src="/placeholder/man-center.jpg"
            fill
            alt="man-center"
            priority
            quality={100}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 75vw, (max-width: 1280px) 100vw, 25vw"
            className="heroCard__image"
          />
          <div className="heroCard__content">
            <h1 className="sectionHeading">Santos</h1>
            <p className="sectionOverline !text-white">Designer</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: isDone
              ? ""
              : "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          className="heroCard"
        >
          <Image
            src="/placeholder/man-right.jpg"
            fill
            alt="man-right"
            priority
            quality={100}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 75vw, (max-width: 1280px) 100vw, 25vw"
            className="heroCard__image"
          />
          <div className="heroCard__content">
            <h1 className="sectionHeading">Sager</h1>
            <p className="sectionOverline !text-white">Solver</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "translateX(0px)" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}
        className="flex flex-col w-[90%] md:w-[440px] gap-4 text-center justify-center items-center lg:items-start"
      >
        <div className="flex flex-col w-fit justify-center items-center gap-4 md:order-3">
          <Links />
        </div>
        <h1 className="sectionHeading md:order-1 !text-center lg:!text-left">
          {header}
        </h1>
        <p className="md:order-2 sectionLeading !text-center lg:!text-left">
          {body}
        </p>
      </motion.div>
      <div className="servicesBackground aspect-square !opacity-30 top-[100px] left-0 -z-0">
        <Image
          typeof="background"
          src={"/patterns/ring-top.svg"}
          width={1000}
          height={1000}
          alt="This is impossible! An svg did not load?"
          className=" md:hidden object-none overflow-auto aspect-square"
        />
      </div>
      <div className="servicesBackground !opacity-30 right-0 -z-0  hidden md:flex">
        <Image
          typeof="background"
          src={"/patterns/ring-left.svg"}
          width={1000}
          height={1000}
          alt="This is impossible! An svg did not load?"
        />
      </div>
    </div>
  );
}
