import { AboutContent as content, SkillList, ServicesContent } from '@/constants'
import { ReactNode } from 'react';
import ServiceCards, { ServiceCard } from './cards/ServiceCards';

type SkillProps = {
    title: string;
    skills: Array<SkillsProps>;
}

type SkillsProps = {
    id: number;
    title: string;
    icon: ReactNode;
}

const SkillRow = ({ title, skills }:SkillProps ) => (
    <ul className="flex flex-row w-full gap-8">
        {skills.map(({id, icon}) => (
            <li key={id} className="w-[75px] aspect-square p-4 flex justify-center items-center rounded-tr-lg rounded-bl-lg scale-115 first:bg-slate-100 first:border first:border-slate-300 hover:scale-110 transition duration-150 ease-in-out first:shadow-xl border-slate-200 border-solid border-2 shadow-lg scale-105">
                {icon}
            </li>
        ))}
    </ul>
)

export default function About() {
    return(
        <div id="about" className="sectionPadding w-full text-center flex justify-center items-center md:text-left">
            <div className="flex flex-col gap-24 w-full justify-around">
                <div className="flex flex-col w-full gap-12">
                    <div className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <h1 className="sectionOverline">about</h1>
                            <h1 className="sectionHeader">me and my services 👌</h1>
                        </div>
                        {content.paragraphs.map(( {id, paragraph }) => (
                            <p key={id} className="block font-bold text-slate-500 w-full md:w-3/5">{paragraph}</p>
                        ))}
                    </div>
                    <ServiceCards cards={ServicesContent}/>
                </div>
                <div>
                    <div className="">
                        <h1 className="sectionOverline">work experience</h1>
                        <h1 className="sectionHeader">what have i done?</h1>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 gap-6">
                    <div className=''>
                        <h1 className="sectionOverline">skills</h1>
                        <h1 className="sectionHeader">tools i am most familiar with 💻</h1>
                    </div>
                    <SkillRow title={SkillList[0].title} skills={SkillList[0].skills}/>
                    <SkillRow title={SkillList[1].title} skills={SkillList[1].skills}/>
                    <SkillRow title={SkillList[2].title} skills={SkillList[2].skills}/>
                    <SkillRow title={SkillList[3].title} skills={SkillList[3].skills}/>
                </div>
            </div>
        </div>
    )
}