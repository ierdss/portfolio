import Image from "next/image";
import { ContactSectionContent } from '@/constants/SectionContent'

export default function ContactGrid() {
    const email = ContactSectionContent[0];
    const phone = ContactSectionContent[1];
    const time = ContactSectionContent[2];

    const width = 260;
    const height = 260;

    return(
        <div className="w-full grid grid-cols-3 grid-rows-3 grid-flow-dense gap-2 lg:gap-4 ">
            <div className="gridSquare gridSquare__long !rounded-full !rounded-tr-none  !rounded-br-none bg-secondary-red contactCard text-white ">
                {email.icon}
                <div className='contactCard__text'>
                    <h4 className="contactCard__title">{email.title}</h4>
                    <p className="contactCard__info">{email.text}</p>
                </div>
            </div>


            <div className="gridSquare gridSquare__small !rounded-full !shadow-inner !shadow-neutral-400 border border-neutral-200 contactCard__extra">
                <Image
                    src="/plants/leaf-1.jpg"
                    width={width}
                    height={height}
                    alt="a leaf"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>
            <div className="gridSquare gridSquare__small bg-secondary-red contactCard__extra">
                <Image
                    src="/plants/trees-1.jpg"
                    width={width}
                    height={height}
                    alt="trees"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>


            <div className="gridSquare gridSquare__long !rounded-full !rounded-bl-none bg-neutral-800 contactCard text-white">
                    {phone.icon}
                <div className='contactCard__text'>
                    <h4 className='contactCard__title'>{phone.title}</h4>
                    <p className="contactCard__info">{phone.text}</p>
                </div>
            </div>
            <div className="gridSquare gridSquare__long !rounded-full !rounded-tr-none !shadow-inner !shadow-neutral-400 border border-neutral-200 contactCard">
                <span className='text-secondary-red'>
                    {time.icon}
                </span>
                <div className='contactCard__text'>
                    <h4 className='contactCard__title'>{time.title}</h4>
                    <p className='contactCard__info'>{time.text}</p>
                </div>
            </div>


            <div className="gridSquare gridSquare__small bg-neutral-800 !rounded-tl-full contactCard__extra">
                <Image
                    src="/plants/leaves-3.jpg"
                    width={width}
                    height={height}
                    alt="leaves"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>
        </div>
    )
}