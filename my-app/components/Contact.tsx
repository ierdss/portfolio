import { HiMailOpen } from 'react-icons/hi'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdAccessTimeFilled } from 'react-icons/md'
import { ContactInfo as info } from '@/constants'

const Contact = () => {
    const sizeIcon = 40;

    return(
        <div>
            <h1 className="sectionHeader">Contact</h1>
            <div className="flex flex-col">
                <div className='flex flex-row justify-center items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100'>
                    <div className='text-secondary-red'>
                        <HiMailOpen size={sizeIcon}/>
                    </div>
                    <div className='flex-col'>
                        <h4 className='font-bold'>{info[0].title}</h4>
                        <p>{info[0].text}</p>
                    </div>
                </div>
                <GiRotaryPhone/>
                <MdAccessTimeFilled/>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default Contact;