import getOtherProjects from "../../actions/getOtherProjects";
import OtherProjectsCard from "./OtherProjectsCard";

interface tagProps {
  name?: string;
  type?: string;
}

export default async function OtherProjects() {
  const otherProjects = await getOtherProjects();

  return (
    <div>
      <div>
        <h1 className="sectionOverline">More From Me</h1>
        <h1 className="sectionHeader">Other Projects</h1>
      </div>
      <div className="grid-cols-1 md:grid-cols-3">
        {otherProjects.map((project) => (
          <OtherProjectsCard
            key={project.id}
            title={project.title !== null ? project.title : ""}
            subtitle={project.subtitle !== null ? project.subtitle : ""}
            description={
              project.description !== null ? project.description : ""
            }
            thumbnailDesktop={
              project.thumbnailDesktop !== null ? project.thumbnailDesktop : ""
            }
            thumbnailMobile={
              project.thumbnailMobile !== null ? project.thumbnailMobile : ""
            }
            altDesktop={project.altDesktop !== null ? project.altDesktop : ""}
            altMobile={project.altMobile !== null ? project.altMobile : ""}
            linkRepository={
              project.linkRepository !== null ? project.linkRepository : ""
            }
            linkLiveDemo={
              project.linkLiveDemo !== null ? project.linkLiveDemo : ""
            }
            linkCaseStudy={
              project.linkCaseStudy !== null ? project.linkCaseStudy : ""
            }
            tags={project.tags as tagProps[]}
          />
        ))}
      </div>
    </div>
  );
}
