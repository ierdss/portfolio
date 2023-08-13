import { AboutSectionHeading } from '@/constants/SectionHeading';

import { TechnologiesSectionContent as TechList } from '@/constants/SectionContent'
import { ReactNode } from 'react';
import { motion } from 'framer-motion'
import ServicesCardGallery from './ServicesCardGallery';

type TechListProps = {
    technologies: Array<TechProps>;
}

type TechProps = {
    id: number;
    title: string;
    group: string;
    icon: ReactNode;
}

const TechGroup = ({technologies}:TechListProps ) => {
    return(
        <motion.ul className='grid grid-cols-4 gap-4 w-full mt-8'>
            {technologies.map(({id, icon}) => (
                <li key={id} className='flex justify-center items-center w-full aspect-square rounded-xl shadow-inner shadow-slate-400 hover:shadow-lg scale-95 hover:scale-100'>
                    {icon}
                </li>
            ))}
        </motion.ul>
    )
}

export default function About() {
    const { overline, header, paragraphs } = AboutSectionHeading

    return(
        <div id="about" className="sectionPadding w-full text-center flex justify-center items-center md:text-left flex-col gap-24">
            <div className="flex flex-row flex-wrap w-full justify-center items-center gap-8 md:gap-16">
                <div className='flex flex-col gap-8 w-[90%] md:w-[45%] '>
                    <div className='flex flex-col gap-4 w-full '>
                        <div className='w-full'>
                            <h1 className="sectionOverline">{overline}</h1>
                            <h1 className="sectionHeader">{header}</h1>
                        </div>
                        {paragraphs.map(({id, paragraph }) => (
                            <p key={id} className="block font-bold text-slate-500 w-full text-justify">{paragraph}</p>
                        ))}
                    </div>
                    <TechGroup technologies={TechList}/>
                </div>
                <div className='w-full md:w-[45%]'>
                    <ServicesCardGallery/>
                </div>
            </div>
        </div>
    )
}