import { ContactInfo } from '@/constants'

export default function Contact() {
    return( 
        <div id='contact' className=' w-full text-center flex justify-center items-center md:text-left'>
            <div className='flex flex-col w-full gap-8 sectionPadding'>
                <div className='flex flex-col gap-4'>
                    <div className="">
                        <h1 className="sectionOverline">contact</h1>
                        <h1 className="sectionHeader">send me a message :)</h1>
                    </div>
                    <p className='w-full lg:w-[400px]'>
                        Feel free to contact me anytime! I'll get back to you
                        as soon as I can!
                    </p>
                </div>
                <div className='flex flex-col justify-between lg:flex-row gap-8'>
                    <div className="flex flex-col gap-10 w-full md:w-[300px] items-center md:items-start">
                        {ContactInfo.map(({key, title, icon, text}) => (
                            <div key={key} className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl w-full max-w-[300px]'>
                                <div className='text-secondary-red'>
                                    {icon}
                                </div>
                                <div className='flex-col'>
                                    <h4 className='font-bold text-left'>{title}</h4>
                                    <p className=' text-left'>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        <form action="https://data.endpoint.space/cljvd1c0f006008l4400sjt6m" method="POST" className='flex flex-wrap w-full gap-3'>
                            <input 
                                type="text" 
                                name='Sender' 
                                placeholder='Enter your name..'
                                className='w-full inputField focus:placeholder:italic'
                                />
                            <input 
                                type="text" 
                                name='Email' 
                                placeholder='Enter your email..'
                                className='w-full inputField focus:placeholder:italic'
                                />
                            <textarea 
                                name='Message' 
                                placeholder='Write your message..'
                                className='w-full inputField textArea focus:placeholder:italic'
                                />
                            <button type='submit' className='w-full callToAction mt-2'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}