"use client";

import { Heading1 } from "@/components";
import ViewMoreBtn from "@/components/buttons/ViewMoreBtn";
import Divider from "@/components/divider/Divider";
import { ProjectsDataAll, ProjectsDataFeatured } from "@/constants";
import Magnetic from "@/wrappers/MagneticWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { TbBrandGithubFilled, TbExternalLink } from "react-icons/tb";

export default function AllProjects() {
  const size = 20;
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".project-card", { y: 50, opacity: 0 });
    ScrollTrigger.batch(".project-card", {
      onEnter: (batch) =>
        gsap.to(batch, {
          stagger: 0.15,
          opacity: 1,
          y: 0,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
    });
  });
  return (
    <div
      id="all-projects"
      className="flex h-fit w-full flex-col items-center justify-center gap-12 bg-background-2 md:text-left"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 px-2 pb-[15lvh] pt-12 md:gap-12 md:px-10 md:pb-40 md:pt-20">
        <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
          <Heading1 text="All My Projects" />
        </div>

        <Divider />

        <ul className="grid w-full max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-4 md:gap-y-12">
          {ProjectsDataAll.map(
            ({
              id,
              title,
              thumbnail,
              alt,
              tags,
              description,
              linkLiveDemo,
              linkRepository,
              linkCaseStudy,
            }) => (
              <div
                className="project-card flex h-fit w-full flex-col items-center gap-4"
                key={id}
              >
                <div className="h-50 relative aspect-16/10 w-full overflow-hidden rounded-lg md:rounded-xl">
                  <a
                    href={linkLiveDemo}
                    target={"_blank"}
                    className={
                      linkLiveDemo ? "" : "pointer-events-none select-none"
                    }
                  >
                    <Image
                      src={thumbnail || "/placeholder/desktop-thumbnail.jpg"}
                      width={1000}
                      height={1000}
                      alt={alt || "Desktop Thumbnail"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </a>
                  {linkLiveDemo && (
                    <TbExternalLink
                      size={30}
                      className="absolute bottom-3 left-3 text-white"
                    />
                  )}
                </div>
                <div className="flex w-full flex-col gap-4">
                  <div className="flex w-full flex-col">
                    <h5 className="text-lg">{title}</h5>
                    <p className="text-justify text-sm normal-case text-text/90 lg:text-left">
                      {description}
                    </p>
                  </div>
                  <ul className="flex flex-row flex-wrap gap-2">
                    {tags.length !== 0 &&
                      tags.map((tag) => (
                        <li
                          key={tag.id}
                          className="rounded-full border border-text/70 px-2 py-0.5 text-xs capitalize"
                        >
                          {tag.text}
                        </li>
                      ))}
                  </ul>
                  <div className="flex w-full flex-row flex-wrap items-center gap-4">
                    {linkLiveDemo && (
                      <Magnetic>
                        <div>
                          <Link
                            href={linkLiveDemo}
                            target="_blank"
                            className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 inline-flex h-9 shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                          >
                            <TbExternalLink size={size} />
                            <p>Live Demo</p>
                          </Link>
                        </div>
                      </Magnetic>
                    )}
                    {linkRepository && (
                      <Magnetic>
                        <div>
                          <Link
                            href={linkRepository}
                            target="_blank"
                            className="flex rounded-full bg-text p-2 text-background-1 hover:bg-primary"
                          >
                            <TbBrandGithubFilled size={size} />
                          </Link>
                        </div>
                      </Magnetic>
                    )}
                    {linkCaseStudy && (
                      <Magnetic>
                        <div>
                          <Link
                            href={linkCaseStudy}
                            target="_blank"
                            className="flex rounded-full bg-text p-2 text-background-1 hover:bg-primary"
                          >
                            <FaSearch size={size} />
                          </Link>
                        </div>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
