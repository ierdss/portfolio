import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";

interface OtherProjectsCardProps {
  title: string;
  subtitle?: string;
  description?: string;
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
  description,
  desktopThumbnail,
  desktopAlt,
  mobileThumbnail,
  mobileAlt,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
  tags,
}: OtherProjectsCardProps) {
  const placeholderArray = new Array(4).fill("Project Tag");

  return (
    <div className="other-projects-card">
      <div className="other-projects-card__images">
        <a href={linkLiveDemo} target="_blank">
          <Image
            src={desktopThumbnail || "/placeholder/desktop-thumbnail.jpg"}
            width={1000}
            height={1000}
            alt={desktopAlt || "Desktop Thumbnail"}
            sizes="(min-width: 768px) 100vw, 50vw"
            className="other-projects-card__image-desktop"
          />
        </a>
        <Image
          src={mobileThumbnail || ""}
          width={600}
          height={600}
          alt={mobileAlt || "Mobile Thumbnail"}
          sizes="(min-width: 768px) 100vw, 50vw"
          className="other-projects-card__image-mobile"
        />
      </div>
      <div className="other-projects-card__details">
        <div>
          <h1 className="other-projects-card__details-title">
            {title || "title"}
          </h1>
          <h1 className="other-projects-card__details-subtitle">
            {subtitle || "subtitle"}
          </h1>
        </div>
        <a href={linkCaseStudy}>
          <p className="other-projects-card__details-description">
            {description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti pariatur dolorum doloribus natus, quisquam illo sunt rem nihil neque repellat consequatur molestiae maxime saepe laborum? Quae nesciunt excepturi quasi reprehenderit quo illum natus incidunt possimus doloribus minus. Fugit, id. Rerum facere, consectetur alias ad consequatur quam quo soluta repellat consequuntur."}
          </p>
        </a>
        <ul className="other-projects-card__details-tags">
          {tags.length !== 0
            ? tags.map((tag) => (
                <li key={tag.id} className="other-projects-card__details-tag">
                  {tag.tag}
                </li>
              ))
            : placeholderArray.map(({ tag }, index) => (
                <li key={index} className="other-projects-card__details-tag">
                  {tag}
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
            <BsGithub size={30} />
            {/* Source Code */}
          </a>
          <a
            href={linkCaseStudy}
            target="_blank"
            className="other-projects-card__details-link"
          >
            <BsBookHalf size={30} />
            {/* Case Study */}
          </a>
        </div>
      </div>
    </div>
  );
}
