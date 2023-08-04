import { HeroContent as content } from "@/constants";
import Image from "next/image";
import Links from "./Links";

export default function Hero() {
    return(
        <div id="home" className="w-full py-20 bg-slate-50">
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center w-full md:w-fit h-1/2 md:h-[700px] pt-20 px-6 md:px-20 gap-8">
                <div className="w-[300px] md:w-[400px] aspect-square rounded-full bg-slate-300 border-white">
                    <Image
                        src={content.portrait}
                        width={800}
                        height={800}
                        alt={content.alt}
                        placeholder="blur"
                        blurDataURL={content.portrait}
                        className="aspect-square rounded-full bg-cover"
                        ></Image>
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4 text-center justify-center items-center md:text-left md:items-start">
                    <div  className='flex flex-row w-fit justify-center items-center gap-4 md:order-3'>
                        <Links/>
                    </div>
                    <h1 className="font-bold text-5xl md:order-1">{content.title}</h1>
                    <p className="md:order-2 font-bold text-slate-500">{content.subtitle}</p>
                </div>
            </div>
        </div>
    )
}