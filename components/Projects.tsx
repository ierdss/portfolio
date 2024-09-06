import { FeaturedProjectsData } from "@/constants";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-fit w-full flex-col items-center justify-center gap-[50px] bg-background-1 px-2 sm:px-5 md:text-left"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-center gap-[35px] px-[8px] py-[50px] md:gap-[70px] md:px-[150px] md:py-[200px]">
        <h1 className="z-20 w-full text-left text-[40px] font-bold capitalize text-gray md:text-[96px]">
          What Have I Done?
        </h1>

        {FeaturedProjectsData.map((project) => (
          <FeaturedProjectsCard
            key={project.id}
            title={project.title !== null ? project.title : ""}
            subtitle={project.subtitle !== null ? project.subtitle : ""}
            description={
              project.description !== null ? project.description : ""
            }
            desktopThumbnail={
              project.desktopThumbnail !== null ? project.desktopThumbnail : ""
            }
            desktopAlt={project.desktopAlt !== null ? project.desktopAlt : ""}
            mobileThumbnail={
              project.mobileThumbnail !== null ? project.mobileThumbnail : ""
            }
            mobileAlt={project.mobileAlt !== null ? project.mobileAlt : ""}
            platformDesktop={
              project.platformDesktop !== null ? project.platformDesktop : false
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
            tags={project.tags as TagProps[]}
          />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

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
  tags: TagProps[];
}

interface TagProps {
  id: number;
  tag: string;
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
  const placeholderArray = [
    {
      id: 1,
      name: "Project Tag",
    },
    {
      id: 2,
      name: "Project Tag",
    },
    {
      id: 3,
      name: "Project Tag",
    },
    {
      id: 4,
      name: "Project Tag",
    },
    {
      id: 5,
      name: "Project Tag",
    },
    {
      id: 6,
      name: "Project Tag",
    },
  ];

  return (
    <div className="flex h-fit w-full flex-col items-center overflow-hidden rounded-2xl shadow-lg lg:flex-row lg:even:flex-row-reverse">
      <div className="relative aspect-16/11 w-full overflow-hidden rounded-2xl shadow-lg">
        <a href={linkLiveDemo} target="_blank">
          <Image
            src={desktopThumbnail || "/placeholder/desktop-thumbnail.jpg"}
            width={1000}
            height={1000}
            alt={desktopAlt || "Desktop Thumbnail"}
            sizes="(min-width: 768px) 100vw, 50vw"
            className="w-full"
          />
        </a>
        <Image
          src={mobileThumbnail || "/placeholder/mobile-thumbnail.jpg"}
          width={600}
          height={600}
          alt={mobileAlt || "Mobile Thumbnail"}
          sizes="(min-width: 768px) 100vw, 50vw"
          className="w-full"
        />
        <TbExternalLink
          size={30}
          className="absolute bottom-3 left-3 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        />
      </div>
      <div className="flex h-fit w-full flex-col gap-4 rounded-2xl p-4 lg:w-3/5">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="block w-full text-left text-2xl font-bold capitalize">
              {title || "title"}
            </h1>
            <h1 className="block w-full text-left text-xs font-bold uppercase text-secondary-red">
              {subtitle || "subtitle"}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            {platformDesktop ? <IoIosLaptop size={40} /> : ""}
            {platformMobile ? <CiMobile1 size={25} /> : ""}
          </div>
        </div>
        <a href={linkCaseStudy} target="_blank">
          <p className="text-justify text-sm font-medium normal-case text-black lg:text-left">
            {description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti pariatur dolorum doloribus natus, quisquam illo sunt rem nihil neque repellat consequatur molestiae maxime saepe laborum? Quae nesciunt excepturi quasi reprehenderit quo illum natus incidunt possimus doloribus minus. Fugit, id. Rerum facere, consectetur alias ad consequatur quam quo soluta repellat consequuntur."}
          </p>
        </a>
        <ul className="line-clamp-3 flex h-full w-full flex-wrap gap-1">
          {tags.length !== 0
            ? tags.map((tag) => (
                <li
                  key={tag.id}
                  className="flex items-center justify-center rounded-full border border-solid border-slate-300 px-3 py-1 text-xs font-medium capitalize text-slate-600"
                >
                  {tag.tag}
                </li>
              ))
            : placeholderArray.map((tag) => (
                <li
                  key={tag.id}
                  className="flex items-center justify-center rounded-full border border-solid border-slate-300 px-3 py-1 text-xs font-medium capitalize text-slate-600"
                >
                  {tag.name}
                </li>
              ))}
        </ul>
        <div className="flex w-full flex-row flex-wrap items-center gap-4">
          {linkLiveDemo && (
            <a
              href={linkLiveDemo}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 text-xs capitalize hover:text-secondary-red"
            >
              <IoGlobe size={34} />
              Live Demo
            </a>
          )}
          {linkRepository && (
            <a
              href={linkRepository}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 text-xs capitalize hover:text-secondary-red"
            >
              <BsGithub size={30} />
              Source Code
            </a>
          )}
          {linkCaseStudy && (
            <a
              href={linkCaseStudy}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 text-xs capitalize hover:text-secondary-red"
            >
              <BsBookHalf size={30} />
              Case Study
            </a>
          )}
        </div>
        {/* 
            TODO: Replace tooltip package with tailwind css https://flowbite.com/docs/components/tooltips/
          <Tooltip
            id="tooltip__live-demo"
            place="left"
            content="Live Demo"
            style={{ borderRadius: "4px" }}
          />
          <Tooltip
            id="tooltip__source-code"
            place="bottom"
            content="Source Code"
            style={{ borderRadius: "4px" }}
          />
          <Tooltip
            id="tooltip__case-study"
            place="right"
            content="Case Study"
            style={{ borderRadius: "4px" }}
          /> */}
      </div>
    </div>
  );
}
