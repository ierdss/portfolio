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

export default function OtherProjects() {
  // const otherProjects = await getOtherProjects();

  return (
    <div className="other-projects">
      <div>
        <h1 className="sectionOverline">Other Projects</h1>
        <h1 className="sectionHeading">More From Me</h1>
      </div>
      <div className="other-projects__map">
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
            platformDesktop={
              project.platformDesktop !== null ? project.platformDesktop : false
            }
            platformMobile={
              project.platformMobile !== null ? project.platformMobile : false
            }
            linkSourceCode={
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
