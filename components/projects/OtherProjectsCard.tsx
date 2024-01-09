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
        <div>
          <h1 className="other-projects-card__details-subtitle sectionOverline">
            {subtitle || "subtitle"}
          </h1>
          <h1 className="other-projects-card__details-title sectionHeader">
            {title || "title"}
          </h1>
        </div>
        <p className="other-projects-card__details-description sectionDescription !text-justify md:!text-left">
          {descriptionBasic ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in ea voluptate incidunt veritatis aliquid, atque similique quasi eum sint?"}
        </p>
        <ul className="other-projects-card__details-tags">
          {tags.map((tag) => (
            <li key={tag.id} className="other-projects-card__details-tag">
              {tag.tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="other-projects-card__links projectLinks">
        <a
          href={linkLiveDemo}
          target="_blank"
          className="other-projects-card__link projectLink"
        >
          <IoGlobe size={size} />
          {/* Live Demo */}
        </a>
        <a
          href={linkRepository}
          target="_blank"
          className="other-projects-card__link projectLink"
        >
          <BsGithub size={size} />
          {/* Source Code */}
        </a>
        <a
          href={linkCaseStudy}
          target="_blank"
          className="other-projects-card__link projectLink"
        >
          <BsBookHalf size={size} />
          {/* Case Study */}
        </a>
      </div>
    </div>
  );
}
