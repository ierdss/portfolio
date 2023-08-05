import { ReactNode } from "react";

import { BsQuestionOctagon } from 'react-icons/bs'

interface Card {
    id: number;
    icon?: ReactNode;
    title?: string;
    paragraph?: string;
}

type ServiceCardProps = Omit<Card, "id">

export function ServiceCard({ icon, title, paragraph }:ServiceCardProps) {
    return(
        <div className="flex flex-col w-full md:w-[300px] h-[200px] items-center text-center p-6 rounded-xl border-2 border-slate-100 hover:text-secondary-red hover:border-3 hover:shadow-2xl">
            <div className="text-secondary-red mb-[10px]">{icon || <BsQuestionOctagon size={40} />}</div>
            <h1 className="font-bold text-lg capitalize">{title || "Sample"}</h1>
            <p className="font-medium text-slate-500 text-xm">{paragraph || "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem impedit  officia?"}</p> 
        </div>
    )
}

type ServiceCardsProps = {
    cards?: Array<Card>;
}

export default function ServiceCards({ cards }:ServiceCardsProps) {
    return(
        <div className='flex flex-wrap justify-center items-center gap-6'>
            {cards?.map(({ id, icon, title, paragraph }) => (
                <ServiceCard key={id} icon={icon} title={title} paragraph={paragraph}/>
            ))}
        </div>
    )
}
