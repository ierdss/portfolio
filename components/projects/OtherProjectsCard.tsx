import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";

interface OtherProjectsCardProps {
  title: string;
  subtitle?: string;
  descriptionBasic?: string;
  desktopThumbnail?: string;
  desktopAlt?: string;
  mobileThumbnail?: string;
  mobileAlt?: string;
  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
  tags: TagProps[];
}

interface TagProps {
  id: number;
  tag: string;
}

// MongoDB
// interface tagProps {
//   name?: string;
//   type?: string;
// }

export default function OtherProjectsCard({
  title,
  subtitle,
  descriptionBasic,
  desktopThumbnail,
  desktopAlt,
  mobileThumbnail,
  mobileAlt,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
  tags,
}: OtherProjectsCardProps) {
  const size = 30;

  return (
    <div className="other-projects-card">
      <div className="other-projects-card__images">
        <Image
          src={desktopThumbnail || ""}
          width={50}
          height={50}
          alt={desktopAlt || ""}
          className="other-projects-card__image-desktop"
        />
        <Image
          src={mobileThumbnail || ""}
          width={50}
          height={50}
          alt={mobileAlt || ""}
          className="other-projects-card__image-mobile"
        />
      </div>
      <div className="other-projects-card__details">
        <div className="flex flex-col gap-2">
          <h1 className="other-projects-card__details-title">
            {title || "title"}
          </h1>
          <h1 className="other-projects-card__details-subtitle">
            {subtitle || "subtitle"}
          </h1>
        </div>
        <a href={linkCaseStudy}>
          <p className="other-projects-card__details-description sectionDescription !text-justify md:!text-left">
            {descriptionBasic ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in ea voluptate incidunt veritatis aliquid, atque similique quasi eum sint?"}
          </p>
        </a>
        <ul className="other-projects-card__details-tags">
          {tags.map((tag) => (
            <li key={tag.id} className="other-projects-card__details-tag">
              {tag.tag}
            </li>
          ))}
        </ul>
        <div className="other-projects-card__details-links">
          <a
            href={linkLiveDemo}
            target="_blank"
            className="other-projects-card__details-link"
          >
            <IoGlobe size={34} />
            {/* Live Demo */}
          </a>
          <a
            href={linkRepository}
            target="_blank"
            className="other-projects-card__details-link"
          >
            <BsGithub size={size} />
            {/* Source Code */}
          </a>
          <a
            href={linkCaseStudy}
            target="_blank"
            className="other-projects-card__details-link"
          >
            <BsBookHalf size={size} />
            {/* Case Study */}
          </a>
        </div>
      </div>
    </div>
  );
}
