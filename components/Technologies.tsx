import React, { ReactNode } from 'react'

import { SkillList } from '@/constants'

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

import { motion } from 'framer-motion'

const Technologies = () => {
  return (
    <div className='w-full sectionPadding'>
        <motion.div
            className='w-[100px] aspect-square bg-black'
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
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
  )
}

export default Technologies