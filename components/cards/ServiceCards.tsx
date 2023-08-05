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
        <div className="flex flex-col w-full md:w-[320px] h-[220px] items-center text-center py-6 px-12 rounded-xl border-2 border-slate-100 hover:text-secondary-red hover:border-3 hover:shadow-2xl group relative overflow-hidden bg-gray-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring hover:border-3 hover:scale-105">
            <div className="text-secondary-red mb-5">{icon || <BsQuestionOctagon size={40} />}</div>
            <h1 className="font-bold text-lg capitalize">{title || "Sample"}</h1>
            <p className="font-medium text-slate-600 text-xm">{paragraph || "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}</p> 
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
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
