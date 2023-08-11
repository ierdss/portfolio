import { ServiceCard } from './cards/ServiceCards';
import { AboutSectionContent as content } from '@/constants/SectionContent'
import { AboutSectionHeading } from '@/constants/SectionHeading';

import { TechnologiesSectionContent as TechList } from '@/constants/SectionContent'
import { ReactNode } from 'react';
import { motion } from 'framer-motion'

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
                <li key={id} className='flex justify-center items-center w-full aspect-square rounded-xl shadow-inner shadow-slate-400'>
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
            <div className="flex flex-row flex-wrap w-full">
                <div className='flex flex-col gap-4 w-full md:w-1/2 md:pr-16 justify-center'>
                    <div className='w-full'>
                        <h1 className="sectionOverline">{overline}</h1>
                        <h1 className="sectionHeader">{header}</h1>
                    </div>
                    {paragraphs.map(({id, paragraph }) => (
                        <p key={id} className="block font-bold text-slate-500 w-full text-justify">{paragraph}</p>
                    ))}
                    <TechGroup technologies={TechList}/>
                </div>
                <div className='w-full md:w-1/2 flex flex-row gap-4 py-12 md:py-16'>
                    <div className='flex flex-col gap-4'>
                        <ServiceCard 
                            icon={content[0].icon} 
                            title={content[0].title} 
                            paragraph={content[0].paragraph}
                            colorType='serviceCard__black'
                        />
                        <ServiceCard colorType="serviceCard__red"/>
                        <ServiceCard colorType='serviceCard__image'/>
                    </div>
                    <div className='flex flex-col gap-4 mt-[110px]'>
                        <ServiceCard colorType="serviceCard__red"/>
                        <ServiceCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}