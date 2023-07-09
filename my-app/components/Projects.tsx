import { ProjectsList as list } from "@/constants"
import { BsGithub } from 'react-icons/bs'
import { IoGlobe } from 'react-icons/io5'

type ProjectProps = {
    thumbnail: string;
    alt: string;
    title: string;
    description: string;
    tags: Array<string>;
    githubUrl: string;
    livedemoUrl: string;
}

const sizeIcon = 30;

const Project = ({thumbnail, alt, title, description, tags, githubUrl, livedemoUrl}: ProjectProps) => (
    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-xl shadow-xl gap-2 md:gap-8">
            <div className={`${thumbnail} h-[400px] w-full md:h-auto md:aspect-video rounded-xl shadow-xl overflow-hidden bg-top bg-cover hover:bg-bottom ease-in duration-[4000ms]`}>
        </div>
        <div className="flex flex-col text-center justify-center gap-4 py-6 w-full md:w-4/5">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-md text-slate-500 font-medium">{description}</p>
            <ul className="flex flex-row flex-wrap justify-center items-start gap-3">
                {tags.map((tag) => (
                    <li key={tag} className="py-2 px-4 justify-center items-start border border-solid border-slate-300 rounded-full font-medium">{tag}</li>
                ))}
            </ul>
            <div className="flex flex-row justify-center items-center gap-8 w-full mt-6">
                <a 
                    href={githubUrl}
                    className="flex flex-row gap-2 justify-center items-center"
                    ><BsGithub size={sizeIcon}/>Source Code</a>
                <a href={livedemoUrl}
                    className="flex flex-row gap-2 first:justify-center items-center"
                    ><IoGlobe size={sizeIcon}/>Live Demo</a>
            </div>
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
                    <Project 
                        thumbnail={list[0].thumbnail}
                        alt={list[0].alt}
                        title={list[0].title}
                        description={list[0].description}
                        tags={list[0].tags}
                        githubUrl={list[0].githubUrl}
                        livedemoUrl={list[0].livedemoUrl}
                        />
                    <Project 
                        thumbnail={list[1].thumbnail}
                        alt={list[1].alt}
                        title={list[1].title}
                        description={list[1].description}
                        tags={list[1].tags}
                        githubUrl={list[1].githubUrl}
                        livedemoUrl={list[1].livedemoUrl}
                        />
                </div>
            </div>
        </main>
    )
}

export default Projects;