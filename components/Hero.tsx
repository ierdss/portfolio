"use client";

import { useEffect } from "react";
import Image from "next/image";
import Links from "./minor/Links";
import { HeroSectionHeading } from "@/constants/SectionHeading";
import Link from "next/link";

export default function Hero() {
  const { header, body } = HeroSectionHeading;

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
    <div
      id="hero"
      className="hero sectionPadding md:!px-[100px] md:!pt-[100px]"
    >
      <div className="heroContainer">
        <div className="heroCard">
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
            <h1 className="sectionHeader">Andrei</h1>
            <p className="sectionOverline !text-white">Designer</p>
          </div>
        </div>

        <div className="heroCard">
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
            <h1 className="sectionHeader">Santos</h1>
            <p className="sectionOverline !text-white">Developer</p>
          </div>
        </div>

        <div className="heroCard active">
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
            <h1 className="sectionHeader">Sager</h1>
            <p className="sectionOverline !text-white">Solver</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] md:w-[440px] gap-4 text-center justify-center items-center md:text-left md:items-start">
        <div className="flex flex-col w-fit justify-center items-center gap-4 md:order-3">
          <Links />
        </div>
        <h1 className="font-bold text-3xl md:order-1">{header}</h1>
        <p className="md:order-2 text-sm font-bold text-slate-600 normal-case">
          {body}
        </p>
        {/* <div className="md:order-4 w-full flex flex-row gap-[10px] justify-between items-center">
          <button type="button" className="sectionCta__outline">
            Download CV
          </button>
          <Link href="#contact" className="callToAction">
            Say hello
          </Link>
        </div> */}
      </div>
    </div>
  );
}
