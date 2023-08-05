import { ProjectsList } from "@/constants"
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
    <ul className="flex flex-row flex-wrap justify-center items-start gap-3">
    {tags.map(({ id, tag } ) => (
        <li key={id} className="py-2 px-4 justify-center items-start border border-solid border-slate-300 rounded-full font-medium">{tag}</li>
    ))}
</ul>
)

type ProjectLinksProps = {
    githubUrl: string;
    livedemoUrl: string;
}

const ProjectLinks = ({ githubUrl, livedemoUrl }:ProjectLinksProps) => (
    <div className="flex flex-row justify-center items-center gap-8 w-full mt-6">
        <a href={githubUrl} target="_blank" className="flex flex-row gap-2 justify-center items-center hover:text-secondary-red"><BsGithub size={sizeIcon}/>Source Code</a>
        <a href={livedemoUrl} target="_blank" className="flex flex-row gap-2 first:justify-center items-center hover:text-secondary-red"><IoGlobe size={sizeIcon}/>Live Demo</a>
    </div>
)

export default function Projects() {
    return( 
        <div id="projects" className="bg-slate-100">
            <div className="flex flex-col w-full gap-8 sectionPadding">
                <h1 className="sectionHeader">Projects</h1>
                <h1 className="font-bold text-3xl">Check Out My Projects!</h1>
                <div className="projectsList flex flex-row flex-wrap gap-10">
                    <div className="projectItem projectItem1">
                            <div id="desktop" className="projectItemDesktop "/>
                            <div id="mobile" className="projectItemMobile">
                                <div/>
                            </div>
                            <div className="projectItemDescription">
                                <h1 className="font-bold text-lg">{ProjectsList[0].title}</h1>
                                <p className="text-md text-slate-500 font-medium">{ProjectsList[0].description}</p>
                                <ProjectTags tags={ProjectsList[0].tags}/>
                                <ProjectLinks githubUrl={ProjectsList[0].githubUrl} livedemoUrl={ProjectsList[0].livedemoUrl} />
                            </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}