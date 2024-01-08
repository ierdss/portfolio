import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";

interface OtherProjectsCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  thumbnailDesktop?: string;
  thumbnailMobile?: string;
  altDesktop?: string;
  altMobile?: string;
  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
  tags: tagProps[];
}

interface tagProps {
  name?: string;
  type?: string;
}

export default function OtherProjectsCard({
  title,
  subtitle,
  description,
  thumbnailDesktop,
  thumbnailMobile,
  altDesktop,
  altMobile,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
  tags,
}: OtherProjectsCardProps) {
  const size = 30;

  return (
    <div>
      <div>
        <Image
          src={thumbnailDesktop || ""}
          width={50}
          height={50}
          alt={altDesktop || ""}
        />
        <Image
          src={thumbnailMobile || ""}
          width={50}
          height={50}
          alt={altMobile || ""}
        />
      </div>
      <div>
        <div>
          <h1 className="sectionOverline">{subtitle || "subtitle"}</h1>
          <h1 className="sectionHeader">{title || "title"}</h1>
        </div>
        <p>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in ea voluptate incidunt veritatis aliquid, atque similique quasi eum sint?"}
        </p>
        <ul>
          {tags.map((tag) => (
            <li>{tag.name}</li>
          ))}
        </ul>
      </div>
      <div className="projectLinks">
        <a
          href={linkLiveDemo}
          target="_blank"
          className="projectLink sectionLeading"
        >
          <IoGlobe size={size} />
          Live Demo
        </a>
        <a
          href={linkRepository}
          target="_blank"
          className="projectLink sectionLeading"
        >
          <BsGithub size={size} />
          Source Code
        </a>
        <a
          href={linkCaseStudy}
          target="_blank"
          className="projectLink sectionLeading"
        >
          <BsBookHalf size={size} />
          Case Study
        </a>
      </div>
    </div>
  );
}
