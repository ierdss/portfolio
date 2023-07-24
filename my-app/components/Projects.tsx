import { ProjectsList as list } from "@/constants"
import { BsGithub } from 'react-icons/bs'
import { IoGlobe } from 'react-icons/io5'

type ProjectProps = {
    title: string;
    description: string;
    tags: Array<string>;
    githubUrl: string;
    livedemoUrl: string;
}

const sizeIcon = 30;

const Project = ({title, description, tags, githubUrl, livedemoUrl}: ProjectProps) => (
    <div className="flex flex-col text-center justify-center gap-4 py-6 w-full md:w-3/5">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-md text-slate-500 font-medium">{description}</p>
        <ul className="flex flex-row flex-wrap justify-center items-start gap-3">
            {tags.map((tag) => (
                <li key={tag} className="py-2 px-4 justify-center items-start border border-solid border-slate-300 rounded-full font-medium">{tag}</li>
            ))}
        </ul>
        <div className="flex flex-row justify-center items-center gap-8 w-full mt-6">
            <a href={githubUrl}
                target="_blank"
                className="flex flex-row gap-2 justify-center items-center hover:text-secondary-red"
                ><BsGithub size={sizeIcon}/>Source Code</a>
            <a href={livedemoUrl}
                target="_blank"
                className="flex flex-row gap-2 first:justify-center items-center hover:text-secondary-red"
                ><IoGlobe size={sizeIcon}/>Live Demo</a>
        </div>
    </div>
)

const Projects = () => {
    return( 
        <main id="projects" className="bg-slate-100">
            <div className="flex flex-col w-full gap-8 sectionPadding">
                <h1 className="sectionHeader">Projects</h1>
                <h1 className="font-bold text-3xl">Check Out My Projects!</h1>
                <div className="flex flex-row flex-wrap gap-10">
                    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-xl shadow-xl gap-2 md:gap-8 relative w-full lg:min-h-[480px] lg:max-h-[480px]">
                        <div className="bg-thumbnail-desktop-1 h-[400px] w-full md:h-auto md:aspect-video rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[10000ms]"/>
                        <div className="relative">
                            <div className="hidden lg:flex bg-thumbnail-mobile-1 min-h-[280px] max-h-[230px] w-[130px] md:h-auto rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[15000ms] z-20 border-2 border-black absolute -bottom-3 -right-4 hover:scale-110"/>
                        </div>
                        <Project 
                            title={list[0].title}
                            description={list[0].description}
                            tags={list[0].tags}
                            githubUrl={list[0].githubUrl}
                            livedemoUrl={list[0].livedemoUrl}
                            />
                    </div>
                    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-xl shadow-xl gap-2 md:gap-8 relative w-full lg:min-h-[480px] lg:max-h-[480px]">
                        <div className="bg-thumbnail-desktop-2 h-[400px] w-full md:h-auto md:aspect-video rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[10000ms]"/>
                        <div className="relative">
                            <div className="hidden lg:flex bg-thumbnail-mobile-1 min-h-[280px] max-h-[230px] w-[130px] md:h-auto rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[15000ms] z-20 border-2 border-black absolute -bottom-3 -right-4 hover:scale-110"/>
                        </div>
                        <Project 
                            title={list[1].title}
                            description={list[1].description}
                            tags={list[1].tags}
                            githubUrl={list[1].githubUrl}
                            livedemoUrl={list[1].livedemoUrl}
                            />
                    </div>
                    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-xl shadow-xl gap-2 md:gap-8 relative w-full lg:min-h-[480px] lg:max-h-[480px]">
                        <div className="bg-thumbnail-desktop-2 h-[400px] w-full md:h-auto md:aspect-video rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[10000ms]"/>
                        <div className="relative">
                            <div className="hidden lg:flex bg-thumbnail-mobile-1 min-h-[280px] max-h-[230px] w-[130px] md:h-auto rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[15000ms] z-20 border-2 border-black absolute -bottom-3 -right-4 hover:scale-110"/>
                        </div>
                        <Project 
                            title={list[2].title}
                            description={list[2].description}
                            tags={list[2].tags}
                            githubUrl={list[2].githubUrl}
                            livedemoUrl={list[2].livedemoUrl}
                            />
                    </div>
                    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-xl shadow-xl gap-2 md:gap-8 relative w-full lg:min-h-[480px] lg:max-h-[480px]">
                        <div className="bg-thumbnail-desktop-2 h-[400px] w-full md:h-auto md:aspect-video rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[10000ms]"/>
                        <div className="relative">
                            <div className="hidden lg:flex bg-thumbnail-mobile-1 min-h-[280px] max-h-[230px] w-[130px] md:h-auto rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[15000ms] z-20 border-2 border-black absolute -bottom-3 -right-4 hover:scale-110"/>
                        </div>
                        <Project 
                            title={list[3].title}
                            description={list[3].description}
                            tags={list[3].tags}
                            githubUrl={list[3].githubUrl}
                            livedemoUrl={list[3].livedemoUrl}
                            />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;