import Image from "next/image";
import { FaHtml5, FaReact, FaCss3Alt, FaSass } from 'react-icons/fa'
import { SiObsidian, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'

const About = () => {
    const sizeIcon = 50;

    return(
        <main className="w-full">
            <div className="flex flex-col md:flex-row sectionPadding gap-10 w-full justify-around">
                {/* <Image
                    src="/MeRed.png"
                    height={100}
                    width={400}
                    alt="Me in Red"
                    >
                </Image> */}
                <div className="flex flex-col w-full lg:w-1/2 gap-4 md:text-right">
                    <h1 className="block sectionHeader">About</h1>
                    <h1 className="block font-bold text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, est.</h1>
                    <p className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae numquam, quasi consectetur corrupti culpa architecto nihil maiores, enim odit corporis veritatis doloremque. Beatae doloremque nemo magnam ut eum rem modi rerum quibusdam optio labore sapiente minima, consequuntur omnis repudiandae nam maxime illum aut autem et hic veniam ea! Deleniti, consequuntur tempore. Illum, adipisci at eligendi similique laborum corporis repellendus exercitationem esse eius ea hic quia impedit.</p>
                </div>
                <div className="w-0 border border-slate-300 hidden md:block">
                </div>
                <div className="flex flex-col w-full lg:w-1/2 gap-6">
                    <h1 className="block sectionHeader">Skills</h1>
                    <div className="flex flex-row md:flex-col flex-wrap w-full gap-8">
                        <div className="flex flex-row flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl">
                                <FaHtml5 size={sizeIcon}/>
                            </div>    
                            <div className="h-[75px] aspect-square border-slate-200 text-black-100 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110">
                                <SiObsidian size={sizeIcon}/>
                            </div>                                         
                        </div>
                        <div className="flex flex-row flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl">
                                <FaCss3Alt size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 text-black-100 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110">
                                <FaSass size={sizeIcon}/>
                            </div>                        
                            <div className="h-[75px] aspect-square border-slate-200 text-black-100 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110">
                                <SiTailwindcss size={sizeIcon}/>
                            </div>                     
                        </div>
                        <div className="flex flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl">
                                <IoLogoJavascript size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 text-black-100 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110">
                                <BiLogoTypescript size={sizeIcon}/>
                            </div>                                         
                        </div>
                        <div className="flex flex-wrap gap-6 border-1 w-fit">
                            <div className="h-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 bg-slate-100 border border-slate-300 hover:scale-110 transition duration-150 ease-in-out shadow-xl">
                                <IoLogoJavascript size={sizeIcon}/>
                            </div>
                            <div className="h-[75px] aspect-square border-slate-200 text-black-100 border-solid border-2 p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg shadow-lg scale-105 hover:scale-110">
                                <BiLogoTypescript size={sizeIcon}/>
                            </div>                                         
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;