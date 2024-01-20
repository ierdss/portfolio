"use client";

import { useEffect } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { TiDownload } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

export default function Hero() {
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

  return (
    <div id="hero" className="hero">
      <motion.div
        className="hero__portrait"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.17, 0.55, 0.55, 1],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Image
          src="/hero.jpg"
          width={1000}
          height={1000}
          alt="A picture of Andrei Sager"
        />
      </motion.div>

      <div className="hero__headline">
        <div>
          <motion.h1
            className="sectionOverline !text-center md:!text-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            Andrei Sager
          </motion.h1>
          <motion.h1
            className="sectionHeading !text-4xl !text-center md:!text-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            Software Developer
          </motion.h1>
        </div>

        <motion.p
          className="sectionLeading !text-center md:!text-left"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.17, 0.55, 0.55, 1],
          }}
        >
          I specialize in constructing websites and mobile applications while
          immersing myself in diverse aspects of the digital spectrum that pique
          my interest.
        </motion.p>

        <div className="hero__headline__buttons">
          <motion.a
            href="#"
            className="cta__outline"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            <TiDownload size={20} />
            <p>Download CV</p>
          </motion.a>
          <motion.a
            href="#projects"
            className="cta__solid"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            <SiMinutemailer size={20} />
            See Projects
          </motion.a>
        </div>
      </div>

      {/* Animated Lavalamp Squares */}
      <ul className="hero__squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
