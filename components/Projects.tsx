import { Heading1 } from "@/components";
import { FeaturedProjectsData } from "@/constants";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-fit w-full flex-col items-center justify-center gap-12 bg-background-1 sm:px-5 md:text-left"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-center gap-8 px-2 py-12 md:gap-16 md:px-36 md:py-20">
        <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
          <Heading1 text="Featured Projects" />
          <ViewMoreBtn text="View All Projects" href="/projects" />
        </div>

        <Divider />

        <ul className="grid w-full max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-3">
          {FeaturedProjectsData.map((project, index) => (
            <FeaturedProjectsCard
              key={index}
              title={project.title !== null ? project.title : ""}
              subtitle={project.subtitle !== null ? project.subtitle : ""}
              desktopThumbnail={
                project.desktopThumbnail !== null
                  ? project.desktopThumbnail
                  : ""
              }
              desktopAlt={project.desktopAlt !== null ? project.desktopAlt : ""}
              mobileAlt={project.mobileAlt !== null ? project.mobileAlt : ""}
              platformDesktop={
                project.platformDesktop !== null
                  ? project.platformDesktop
                  : false
              }
              platformMobile={
                project.platformMobile !== null ? project.platformMobile : false
              }
              linkRepository={
                project.linkRepository !== null ? project.linkRepository : ""
              }
              linkLiveDemo={
                project.linkLiveDemo !== null ? project.linkLiveDemo : ""
              }
              linkCaseStudy={
                project.linkCaseStudy !== null ? project.linkCaseStudy : ""
              }
              tags={project.tags}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { IoGlobe, IoSearchCircle } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import ViewMoreBtn from "./buttons/ViewMoreBtn";
import Divider from "./divider/Divider";

interface FeaturedProjectsCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  desktopThumbnail?: string;
  desktopAlt?: string;
  mobileThumbnail?: string;
  mobileAlt?: string;
  platformDesktop?: boolean;
  platformMobile?: boolean;
  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
  tags: Array<string>;
}

function FeaturedProjectsCard({
  title,
  subtitle,
  description,
  desktopThumbnail,
  desktopAlt,
  mobileThumbnail,
  mobileAlt,
  platformDesktop,
  platformMobile,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
  tags,
}: FeaturedProjectsCardProps) {
  return (
    <div className="flex aspect-16/10 h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-md md:gap-20 md:rounded-3xl lg:odd:flex-row-reverse lg:even:flex-row">
      <div className="h-50 relative w-full overflow-hidden">
        <a
          href={linkLiveDemo}
          target={"_blank"}
          className={linkLiveDemo ? "" : "pointer-events-none select-none"}
        >
          <Image
            src={desktopThumbnail || "/placeholder/desktop-thumbnail.jpg"}
            width={1000}
            height={1000}
            alt={desktopAlt || "Desktop Thumbnail"}
            sizes="(min-width: 768px) 100vw, 50vw"
          />
        </a>
        {linkLiveDemo && (
          <TbExternalLink
            size={30}
            className="absolute bottom-3 left-3 text-white"
          />
        )}
      </div>
      {/* <div className="flex h-fit w-full flex-col gap-4 px-2 md:px-0 lg:w-3/5">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="w-full text-left text-text">{title}</h3>
            <h5 className="w-full text-left font-bold uppercase text-primary">
              {subtitle}
            </h5>
          </div>
          <div className="flex flex-row items-center gap-3 text-text">
            {platformDesktop && <IoIosLaptop size={40} />}
            {platformMobile && <CiMobile1 size={25} />}
          </div>
        </div>
        <ul className="text-text2 flex flex-row flex-wrap gap-2">
          {tags.length !== 0 &&
            tags.map((tag, index) => (
              <li key={index} className="border-gray1 rounded-full border">
                <p className="px-4 py-1 text-xs capitalize">{tag}</p>
              </li>
            ))}
        </ul>
        <p className="text-justify text-base normal-case text-text lg:text-left">
          {description}
        </p>
        <div className="mt-2 flex w-full flex-row flex-wrap items-center gap-4 md:mt-12">
          {linkCaseStudy && (
            <a
              href={linkCaseStudy}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2 rounded-full text-xs capitalize text-text hover:text-primary md:text-sm"
            >
              <IoSearchCircle size={40} className="aspect-square w-10" />
              Case Study
            </a>
          )}
          {linkLiveDemo && (
            <a
              href={linkLiveDemo}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2  text-xs capitalize text-text hover:text-primary md:text-sm"
            >
              <IoGlobe size={33.5} />
              Live Demo
            </a>
          )}
          {linkRepository && (
            <a
              href={linkRepository}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2 text-xs capitalize text-text hover:text-primary md:text-sm"
            >
              <BsGithub size={30} />
              Source Code
            </a>
          )}
        </div>
      </div> */}
    </div>
  );
}
