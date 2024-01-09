import getOtherProjects from "../../actions/getOtherProjects";
import OtherProjectsCard from "./OtherProjectsCard";

import { Projects } from "@/constants/projectsdatabase";

interface TagProps {
  id: number;
  tag: string;
}

// MongoDb
// interface tagProps {
//   name?: string;
//   type?: string;
// }

export default async function OtherProjects() {
  const otherProjects = await getOtherProjects();

  return (
    <div className="max-w-screen-xl">
      <div>
        <h1 className="sectionOverline">More From Me</h1>
        <h1 className="sectionHeader">Other Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {Projects.map((project) => (
          <OtherProjectsCard
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
