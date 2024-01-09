import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";

interface FeaturedProjectsCardProps {
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

export default function FeaturedProjectsCard({
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
}: FeaturedProjectsCardProps) {
  return (
    <div className="featured-projects-card">
      <div className="featured-projects-card__images">
        <a href={linkLiveDemo} target="_blank">
          <Image
            src={desktopThumbnail || ""}
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
          className="featured-projects-card__image-mobile"
        />
      </div>
      <div className="featured-projects-card__details">
        <div className="flex flex-col gap-2">
          <h1 className="featured-projects-card__details-title">
            {title || "title"}
          </h1>
          <h1 className="featured-projects-card__details-subtitle">
            {subtitle || "subtitle"}
          </h1>
        </div>
        <a href={linkCaseStudy} target="_blank">
          <p className="featured-projects-card__details-description">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in ea voluptate incidunt veritatis aliquid, atque similique quasi eum sint?"}
          </p>
        </a>
        <ul className="featured-projects-card__details-tags">
          {tags.map((tag) => (
            <li key={tag.id} className="featured-projects-card__details-tag">
              {tag.tag}
            </li>
          ))}
        </ul>
        <div className="featured-projects-card__details-links">
          <a
            href={linkLiveDemo}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <IoGlobe size={34} />
            Live Demo
          </a>
          <a
            href={linkRepository}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <BsGithub size={30} />
            Source Code
          </a>
          <a
            href={linkCaseStudy}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <BsBookHalf size={30} />
            Case Study
          </a>
        </div>
      </div>
    </div>
  );
}

// import { Projects as ProjectList } from "@/constants/projectsdatabase";
// import Image from "next/image";
// import Link from "next/link";
// import { BsGithub } from "react-icons/bs";
// import { IoGlobe } from "react-icons/io5";
// import { HiOutlineExternalLink } from "react-icons/hi";

// import { motion } from "framer-motion";

// const sizeIcon = 30;

// type TagsProps = {
//   tags: Array<TagProps>;
// };

// type TagProps = {
//   id: number;
//   tag: string;
// };

// function ProjectTags({ tags }: TagsProps) {
//   return (
//     <ul className="projectTags">
//       {tags.map(({ id, tag }) => (
//         <li key={id} className="projectTag">
//           {tag}
//         </li>
//       ))}
//     </ul>
//   );
// }

// type ProjectLinksProps = {
//   githubUrl: string;
//   livedemoUrl: string;
// };

// function ProjectLinks({ githubUrl, livedemoUrl }: ProjectLinksProps) {
//   return (
//     <div className="projectLinks">
//       <a
//         href={githubUrl}
//         target="_blank"
//         className="projectLink sectionLeading"
//       >
//         <BsGithub size={sizeIcon} />
//         Source Code
//       </a>
//       <a
//         href={livedemoUrl}
//         target="_blank"
//         className="projectLink sectionLeading"
//       >
//         <IoGlobe size={sizeIcon} />
//         Live Demo
//       </a>
//     </div>
//   );
// }

// export default function FeaturedProjects() {
//   return (
//     <div className="projectsList">
//       {ProjectList.map(
//         ({
//           id,
//           title,
//           subtitle,
//           description,
//           thumbnailDesktop,
//           thumbnailMobile,
//           altDesktop,
//           altMobile,
//           linkRepository,
//           linkLiveDemo,
//           linkCaseStudy
//           tags,
//         }) => (
//           <div key={id} className="projectItem">
//             <div className="projectItem__right">
//               <Link href={linkLiveDemo} target="_blank">
//                 <div className="projectThumbnails">
//                   <div className="projectThumbnailDesktop">
//                     <Image
//                       src={thumbnailDesktop}
//                       width={950}
//                       height={700}
//                       alt={altDesktop}
//                       loading="lazy"
//                       quality={100}
//                       sizes="(min-width: 768px) 75vw, (min-width: 1280px) 100vw, 25vw"
//                       className="rounded-2xl object-cover object-top"
//                     />
//                   </div>
//                   <div className="projectThumbnailMobile">
//                     <div>
//                       <Image
//                         src={thumbnailMobile}
//                         width={200}
//                         height={50}
//                         alt={altMobile}
//                         loading="lazy"
//                         quality={100}
//                         className="object-cover object-top"
//                       />
//                     </div>
//                   </div>
//                   <HiOutlineExternalLink
//                     size={30}
//                     className="projectThumbnail__external-link"
//                   />
//                 </div>
//               </Link>
//               <div className="projectTags__container">
//                 <ProjectTags tags={tags} />
//               </div>
//             </div>
//             <div className="projectDetails">
//               <div>
//                 <h1 className="sectionHeading-2 !text-center lg:!text-left">
//                   {title}
//                 </h1>
//                 <h1 className="sectionOverline-2 !text-center lg:!text-left">
//                   {subtitle}
//                 </h1>
//               </div>
//               {description}
//               <ProjectLinks githubUrl={linkRepository} livedemoUrl={linkLiveDemo} />
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }
