import { HiMailOpen } from 'react-icons/hi'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdAccessTimeFilled } from 'react-icons/md'
import { ContactInfo as info } from '@/constants'

const Contact = () => {
    const sizeIcon = 40;

    return( 
        <main id='contact' className='w-full'>
            <div className='flex flex-col w-full gap-8 sectionPadding'>
                <div className='flex flex-col gap-4'>
                    <h1 className="sectionHeader">Contact</h1>
                    <p className='w-full lg:w-[400px]'>
                        Feel free to contact me anytime! I'll get back to you
                        as soon as I can!
                    </p>
                </div>
                <div className='flex flex-col justify-between lg:flex-row gap-8'>
                    <div className="flex flex-col gap-10 w-fit md:max-w-[350px]">
                        <div className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl'>
                            <div className='text-secondary-red'>
                                <HiMailOpen size={sizeIcon}/>
                            </div>
                            <div className='flex-col'>
                                <h4 className='font-bold'>{info[0].title}</h4>
                                <p>{info[0].text}</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl'>
                            <div className='text-secondary-red'>
                                <GiRotaryPhone size={sizeIcon}/>
                            </div>
                            <div className='flex-col'>
                                <h4 className='font-bold'>{info[1].title}</h4>
                                <p>{info[1].text}</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl'>
                            <div className='text-secondary-red'>
                                <MdAccessTimeFilled size={sizeIcon}/>
                            </div>
                            <div className='flex-col'>
                                <h4 className='font-bold'>{info[2].title}</h4>
                                <p>{info[2].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-full max-w-[700px]">
                        <h1 className='font-bold text-lg'>Send Me a Message :)</h1>
                        <input 
                            type="text" 
                            id='name' 
                            placeholder='Enter your name..'
                            className='inputField focus:placeholder:italic'
                            />
                        <input 
                            type="text" 
                            id='email' 
                            placeholder='Enter your email..'
                            className='inputField focus:placeholder:italic'
                            />
                        <textarea 
                            id='message' 
                            placeholder='Write your message..'
                            className='inputField textArea focus:placeholder:italic'
                            />
                        <button className='callToAction'>Send</button>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;