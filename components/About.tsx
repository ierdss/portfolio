import { AboutContent as content, SkillList } from '@/constants'
import { ReactNode } from 'react';

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
        <div id="about" className="w-full">
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
                    <SkillRow title={SkillList[0].title} skills={SkillList[0].skills}/>
                    <SkillRow title={SkillList[1].title} skills={SkillList[1].skills}/>
                    <SkillRow title={SkillList[2].title} skills={SkillList[2].skills}/>
                    <SkillRow title={SkillList[3].title} skills={SkillList[3].skills}/>
                </div>
            </div>
        </div>
    )
}