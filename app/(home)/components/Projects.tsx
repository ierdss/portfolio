import { Heading1 } from "@/components";
import CallToActionBtn from "@/components/buttons/CallToActionBtn";
import ViewMoreBtn from "@/components/buttons/ViewMoreBtn";
import Divider from "@/components/divider/Divider";
import { ProjectsDataFeatured } from "@/constants";
import Magnetic from "@/wrappers/MagneticWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { TbBrandGithubFilled, TbExternalLink } from "react-icons/tb";

export default function Projects() {
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
      id="projects"
      className="flex h-fit w-full flex-col items-center justify-center gap-12 bg-background-2 md:text-left"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-8 px-2 pb-[15lvh] pt-12 md:gap-12 md:px-10 md:pb-40 md:pt-20">
        <div className="flex w-full max-w-screen-xl flex-col items-start justify-between md:flex-row md:items-center">
          <Heading1 text="Featured Projects" />
          <ViewMoreBtn text="View All Projects" href="/projects" />
        </div>

        <Divider />

        <ul className="grid w-full max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-4 md:gap-y-12">
          {ProjectsDataFeatured.map(
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
                      <CallToActionBtn
                        iconOnly={false}
                        href={linkLiveDemo}
                        ariaLabel="Live Demo"
                        icon={<TbExternalLink size={size} />}
                        text="Live Demo"
                      />
                    )}
                    {linkRepository && (
                      <CallToActionBtn
                        iconOnly={linkLiveDemo ? true : false}
                        href={linkRepository}
                        ariaLabel="Github Repository"
                        icon={<TbBrandGithubFilled size={size} />}
                        text="GitHub Repo"
                      />
                    )}
                    {linkCaseStudy && (
                      <CallToActionBtn
                        iconOnly={linkLiveDemo || linkRepository ? true : false}
                        href={linkCaseStudy}
                        ariaLabel="Case Study"
                        icon={<FaSearch size={size} />}
                        text="Case Study"
                      />
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
