import { ProjectsList as list } from "@/constants"
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoGlobe } from 'react-icons/io5'

type ProjectProps = {
    thumbnail: string;
    title: string;
    description: string;
    tags: Array<string>;
    githubUrl: string;
    livedemoUrl: string;
}

const sizeIcon = 30;

const Project = ({title, description, tags, githubUrl, livedemoUrl}: ProjectProps) => (
    <div className="flex flex-col bg-white text-center justify-center gap-4 p-6">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-md">{description}</p>
        <ul className="flex flex-row flex-wrap justify-center items-start gap-3">
            {tags.map((tag) => (
                <li className="py-2 px-4 justify-center items-start border border-solid border-slate-300 rounded-full">{tag}</li>
            ))}
        </ul>
        <div className="flex flex-row justify-center items-center gap-4 w-full">
            <a 
                href={githubUrl}
                className="flex flex-row gap-2 justify-center items-center"
                ><BsGithub size={sizeIcon}/>Source Code</a>
            <a href={livedemoUrl}
                className="flex flex-row gap-2 first:justify-center items-center"
                ><IoGlobe size={sizeIcon}/>Live Demo</a>
        </div>
    </div>
)

const Projects = () => {
    return( 
        <main className="bg-slate-100">
            <div className="flex flex-col w-full gap-8 sectionPadding">
                <h1 className="sectionHeader">Projects</h1>
                <p></p>
                <div className="flex flex-row flex-wrap gap-10">
                    <Project 
                        thumbnail={list[0].thumbnail}
                        title={list[0].title}
                        description={list[0].description}
                        tags={list[0].tags}
                        githubUrl={list[0].githubUrl}
                        livedemoUrl={list[0].livedemoUrl}
                        />
                    <Project 
                        thumbnail={list[0].thumbnail}
                        title={list[0].title}
                        description={list[0].description}
                        tags={list[0].tags}
                        githubUrl={list[0].githubUrl}
                        livedemoUrl={list[0].livedemoUrl}
                        />
                </div>
            </div>
        </main>
    )
}

export default Projects;