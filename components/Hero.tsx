"use client"

import Links from "./minor/Links";
import { HeroSectionHeading} from "@/constants/SectionHeading";
import GalleryGrid from "./minor/GalleryGrid";

export default function Hero() {
    const { header, subheader } = HeroSectionHeading;

    return(
        <div className="sectionPadding !pt-24 md:!pt-32 flex flex-col md:flex-row justify-center items-center gap-12 w-full overflow-hidden">
            <div className="w-[80%] lg:w-[40%] z-10">
                <GalleryGrid />
            </div>
            <div className="flex flex-col w-[90%] md:w-[500px] gap-4 text-center justify-center items-center md:text-left md:items-start md:p-8">
                <div  className='flex flex-row w-fit justify-center items-center gap-4 md:order-3'>
                    <Links/>
                </div>
                <h1 className="font-bold text-3xl md:order-1">{header}</h1>
                <p className="md:order-2 font-bold text-slate-700">{subheader}</p>
            </div>
        </div>
    )
}