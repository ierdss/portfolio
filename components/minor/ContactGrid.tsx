import Image from "next/image";
import { ContactSectionContent } from '@/constants/SectionContent'

export default function ContactGrid() {
    const email = ContactSectionContent[0];
    const phone = ContactSectionContent[1];
    const time = ContactSectionContent[2];

    return(
        <div className="w-full grid grid-cols-3 grid-rows-3 grid-flow-dense gap-4">
            <div className="gridSquare gridSquare__long !rounded-full !rounded-tr-none  !rounded-br-none bg-secondary-red contactCard text-white text-left">
                {email.icon}
                <div className='flex-col'>
                    <h4 className="font-bold">{email.title}</h4>
                    <p>{email.text}</p>
                </div>
            </div>

            <div className="gridSquare gridSquare__small !rounded-full !shadow-inner !shadow-neutral-400 border border-neutral-200 contactCard__extra flex w-full">
                <Image
                    src="/plants/leaf-1.jpg"
                    width={200}
                    height={200}
                    alt="a leaf"
                    loading="lazy"
                >

                </Image>
            </div>
            <div className="gridSquare gridSquare__small bg-secondary-red contactCard__extra">
                <Image
                    src="/plants/trees-1.jpg"
                    width={200}
                    height={200}
                    alt="a leaf"
                    loading="lazy"
                >

                </Image>
            </div>

            <div className="gridSquare gridSquare__long !rounded-full !rounded-bl-none bg-neutral-800 contactCard contactCard text-white text-left">
                    {phone.icon}
                <div className='flex-col'>
                    <h4 className='font-bold'>{phone.title}</h4>
                    <p>{phone.text}</p>
                </div>
            </div>
            <div className="gridSquare gridSquare__long !rounded-full !rounded-tr-none !shadow-inner !shadow-neutral-400 border border-neutral-200 contactCard">
                <span className='text-secondary-red'>
                    {time.icon}
                </span>
                <div className='flex-col'>
                    <h4 className='font-bold text-left'>{time.title}</h4>
                    <p className=' text-left'>{time.text}</p>
                </div>
            </div>

            <div className="gridSquare gridSquare__small bg-neutral-800 !rounded-tl-full contactCard__extra">
                <Image
                    src="/plants/leaves-3.jpg"
                    width={200}
                    height={200}
                    alt="a leaf"
                    loading="lazy"
                >

                </Image>
            </div>
        </div>
    )
}
    {/* <div>
        <div className="flex flex-row flex-wrap gap-10 w-full items-center md:items-start">
            {ContactSectionContent.map(({key, title, icon, text}) => (
                <div key={key} className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl w-full max-w-[300px] group relative overflow-hidden bg-gray-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring hover:border-3'>
                 
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
                </div>
            ))}
        </div> */}