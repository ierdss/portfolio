import { FaHtml5, FaReact, FaCss3Alt, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'
import { AboutContent as content } from '@/constants'

const About = () => {
    const sizeIcon = 50;
    return(
        <main id="about" className="w-full">
            <div className="flex flex-col md:flex-row sectionPadding gap-10 w-full justify-around">
                <div className="flex flex-col w-full lg:w-1/2 gap-4 md:text-right">
                    <h1 className="block sectionHeader">About</h1>
                    <h1 className="block font-bold text-3xl">{content.title}</h1>
                    {content.subtitle.map((paragraph) => (
                        <p className="block font-bold text-slate-500">{paragraph}</p>
                    ))}
                </div>
                <div className="w-0 border border-slate-300 hidden md:block">
                </div>
                <div className="flex flex-col w-full lg:w-1/2 gap-6">
                    <h1 className="block sectionHeader">Skills</h1>
                    <div className="flex flex-row md:flex-col flex-wrap w-full gap-8">
                        <div className="flex flex-row flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl text-html">
                                <FaHtml5 size={sizeIcon}/>
                            </div>    
                        </div>
                        <div className="flex flex-row flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl text-css">
                                <FaCss3Alt size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110 text-sass">
                                <FaSass size={sizeIcon}/>
                            </div>                        
                            <div className="h-[75px] aspect-square border-slate-200 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110 text-tailwind">
                                <SiTailwindcss size={sizeIcon}/>
                            </div>                     
                        </div>
                        <div className="flex flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl text-javascript">
                                <IoLogoJavascript size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110 text-typescript">
                                <BiLogoTypescript size={sizeIcon}/>
                            </div>                                         
                        </div>
                        <div className="flex flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl text-react">
                                <FaReact size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110 text-next">
                                <SiNextdotjs size={sizeIcon}/>
                            </div>                                         
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;