import { SocialLinks as links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
    const sizeIcon = 30;

    return(
        <main id="home" className="w-full py-20 bg-slate-50">
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center w-full md:w-fit h-1/2 md:h-[700px] py-20 px-6 md:px-20 gap-8">
                <div className="w-[300px] md:w-[400px] aspect-square rounded-full p-6 bg-slate-400 border-white">
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4 text-center justify-center items-center md:text-left md:items-start">
                    <div className='flex flex-row w-fit justify-center items-center gap-4 md:order-3'>
                        <Link 
                            href={links[0].url}
                            target="blank"
                            className='text-secondary-red hover:text-linkedin'
                        >
                            <BsLinkedin size={sizeIcon}/>
                        </Link>
                        <Link 
                            href={links[1].url}
                            target="blank"
                            className='text-secondary-red hover:text-github'
                        >
                            <BsGithub size={sizeIcon}/>
                        </Link>
                    </div>
                    <h1 className="font-bold text-5xl md:order-1">I am a Front-End Developer</h1>
                    <p className="md:order-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quia facere sit hic laudantium optio?</p>
                </div>
            </div>
        </main>
    )
}

export default Hero;