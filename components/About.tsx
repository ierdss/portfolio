import { ServicesContent } from '@/constants'
import ServiceCards from './cards/ServiceCards';
import { AboutSectionContent } from '@/constants/SectionContent';

export default function About() {
    const { overline, header, paragraphs } = AboutSectionContent

    return(
        <div id="about" className="sectionPadding w-full text-center flex justify-center items-center md:text-left flex-col gap-24">
                <div className="flex flex-col w-full gap-12">
                    <div className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <h1 className="sectionOverline">{overline}</h1>
                            <h1 className="sectionHeader">{header}</h1>
                        </div>
                        {paragraphs.map(( {id, paragraph }) => (
                            <p key={id} className="block font-bold text-slate-500 w-full md:w-3/5">{paragraph}</p>
                        ))}
                    </div>
                    <ServiceCards cards={ServicesContent}/>
            </div>
        </div>
    )
}