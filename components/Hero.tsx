"use client"

import Links from "./minor/Links";
import { HeroSectionHeading} from "@/constants/SectionHeading";
import HeroGrid from "./minor/HeroGrid";

export default function Hero() {
    const { header, subheader } = HeroSectionHeading;

    return(
        <div className="sectionPadding md:!pt-32 flex flex-col md:flex-row justify-center items-center gap-12 w-full overflow-hidden mt-[50px]">
            <div className="w-[80%] lg:w-[40%] z-10">
                <HeroGrid />
            </div>
            <div className="flex flex-col w-[90%] md:w-[500px] gap-4 text-center justify-center items-center md:text-left md:items-start md:p-8">
                <div  className='flex flex-row w-fit justify-center items-center gap-4 md:order-3'>
                    <Links/>
                </div>
                <h1 className="font-bold text-3xl md:order-1">{header}</h1>
                <p className="md:order-2 font-bold text-slate-600 normal-case">{subheader}</p>
            </div>
        </div>
    )
}