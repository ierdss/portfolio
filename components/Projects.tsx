import { ProjectSectionContent as ProjectList } from "@/constants/SectionContent"
import { ProjectsSectionHeading } from "@/constants/SectionHeading";
import Image from "next/image";
import { BsGithub } from 'react-icons/bs'
import { IoGlobe } from 'react-icons/io5'

const sizeIcon = 30;

type TagsProps = {
    tags: Array<TagProps>;
}

type TagProps = {
    id: number;
    tag: string;
}

const ProjectTags = ({ tags }:TagsProps) => (
    <ul className="projectTags">
    {tags.map(({ id, tag } ) => (
        <li key={id} className="projectTag">{tag}</li>
    ))}
</ul>
)

type ProjectLinksProps = {
    githubUrl: string;
    livedemoUrl: string;
}

const ProjectLinks = ({ githubUrl, livedemoUrl }:ProjectLinksProps) => (
    <div className="projectLinks">
        <a href={githubUrl} target="_blank" className="projectLink"><BsGithub size={sizeIcon}/>Source Code</a>
        <a href={livedemoUrl} target="_blank" className="projectLink"><IoGlobe size={sizeIcon}/>Live Demo</a>
    </div>
)

export default function Projects() {
    const { overline, header } = ProjectsSectionHeading;

    return( 
        <div id="projects" className="bg-slate-100 w-full text-center flex justify-center items-center md:text-left">
            <div className="flex flex-col w-full gap-8 sectionPadding">
                <div className="">
                    <h1 className="sectionOverline">{overline}</h1>
                    <h1 className="sectionHeader">{header}</h1>
                </div>
                <ul className="projectsList">
                    {ProjectList.map(({ id, thumbnailDesktop, thumbnailMobile, desktopAlt, mobileAlt, title, description, tags, githubUrl, livedemoUrl }) => (
                            <li key={id} className="projectItem">
                                <div className="projectThumbnails">
                                    <div className="projectThumbnailDesktop">
                                        <img
                                            src={thumbnailDesktop}
                                            alt={desktopAlt}
                                        />
                                    </div>
                                    <div className="projectThumbnailMobile">
                                        <div>
                                            <Image
                                                src={thumbnailMobile}
                                                width={200}
                                                height={50}
                                                alt={mobileAlt}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="projectDetails">
                                    <h1 className="projectTitle">{title}</h1>
                                    <p className="projectDescription">{description}</p>
                                    <ProjectTags tags={tags}/>
                                    <ProjectLinks githubUrl={githubUrl} livedemoUrl={livedemoUrl} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
                    {/* <div className="projectItem projectItem1">
                        <div id="desktop" className="projectItemDesktop "/>
                        <div id="mobile" className="projectItemMobile">
                            <div/>
                        </div>
                        <div className="projectItemDescription">
                            <h1 className="font-bold text-lg">{ProjectList[0].title}</h1>
                            <p className="text-md text-slate-500 font-medium">{ProjectList[0].description}</p>
                            <ProjectTags tags={ProjectList[0].tags}/>
                            <ProjectLinks githubUrl={ProjectList[0].githubUrl} livedemoUrl={ProjectList[0].livedemoUrl} />
                        </div>
                    </div> */}
{/* 
                    <div className="projectItem projectItem2 projectItemOdd">
                        <div id="desktop" className="projectItemDesktop"/>
                        <div id="mobile" className="projectItemMobile">
                            <div/>
                        </div>
                        <div className="projectItemDescription">
                            <h1 className="font-bold text-lg">{ProjectsList[1].title}</h1>
                            <p className="text-md text-slate-500 font-medium">{ProjectsList[1].description}</p>
                            <ProjectTags tags={ProjectsList[1].tags}/>
                            <ProjectLinks githubUrl={ProjectsList[1].githubUrl} livedemoUrl={ProjectsList[1].livedemoUrl} />
                        </div>
                    </div>
                    <div className="projectItem projectItem3">
                        <div id="desktop" className="projectItemDesktop "/>
                        <div id="mobile" className="projectItemMobile">
                            <div/>
                        </div>
                        <div className="projectItemDescription">
                            <h1 className="font-bold text-lg">{ProjectsList[2].title}</h1>
                            <p className="text-md text-slate-500 font-medium">{ProjectsList[2].description}</p>
                            <ProjectTags tags={ProjectsList[2].tags}/>
                            <ProjectLinks githubUrl={ProjectsList[2].githubUrl} livedemoUrl={ProjectsList[2].livedemoUrl} />
                        </div>
                    </div>
                    <div className="projectItem projectItem4 projectItemOdd">
                        <div id="desktop" className="projectItemDesktop "/>
                        <div id="mobile" className="projectItemMobile">
                            <div/>
                        </div>
                        <div className="projectItemDescription">
                            <h1 className="font-bold text-lg">{ProjectsList[3].title}</h1>
                            <p className="text-md text-slate-500 font-medium">{ProjectsList[3].description}</p>
                            <ProjectTags tags={ProjectsList[3].tags}/>
                            <ProjectLinks githubUrl={ProjectsList[3].githubUrl} livedemoUrl={ProjectsList[3].livedemoUrl} />
                        </div>
                    </div>
                    <div className="projectItem projectItem5">
                        <div id="desktop" className="projectItemDesktop "/>
                        <div id="mobile" className="projectItemMobile">
                            <div/>
                        </div>
                        <div className="projectItemDescription">
                            <h1 className="font-bold text-lg">{ProjectsList[3].title}</h1>
                            <p className="text-md text-slate-500 font-medium">{ProjectsList[3].description}</p>
                            <ProjectTags tags={ProjectsList[3].tags}/>
                            <ProjectLinks githubUrl={ProjectsList[3].githubUrl} livedemoUrl={ProjectsList[3].livedemoUrl} />
                        </div>
                    </div> */}
            </div>
        </div>
    )
}