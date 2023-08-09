import { ContactSectionContent } from '@/constants/SectionContent'
import { ContactSectionHeading } from '@/constants/SectionHeading'
import { useRef, useState } from 'react';

// template_p6ks3sk
// service_ar3a3ho
// GRURLN1e8fG0Plvov

export default function Contact() {
    const { overline, header, subheader } = ContactSectionHeading;

    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);

    // const handleChange = (e) => {
    //   const { target } = e;
    //   const { name, value } = target;
  
    //   setForm({
    //     ...form,
    //     [name]: value,
    //   });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setLoading(true);
  
    //   emailjs
    //     .send(
    //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //       {
    //         from_name: form.name,
    //         to_name: "JavaScript Mastery",
    //         from_email: form.email,
    //         to_email: "sujata@jsmastery.pro",
    //         message: form.message,
    //       },
    //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //     )
    //     .then(
    //       () => {
    //         setLoading(false);
    //         alert("Thank you. I will get back to you as soon as possible.");
  
    //         setForm({
    //           name: "",
    //           email: "",
    //           message: "",
    //         });
    //       },
    //       (error) => {
    //         setLoading(false);
    //         console.error(error);
  
    //         alert("Ahh, something went wrong. Please try again.");
    //       }
    //     );
    // };

    return( 
        <div id='contact' className=' w-full text-center flex justify-center items-center md:text-left'>
            <div className='flex flex-col w-full gap-8 sectionPadding'>
                <div className='flex flex-col gap-4'>
                    <div className="">
                        <h1 className="sectionOverline">{overline}</h1>
                        <h1 className="sectionHeader">{header}</h1>
                    </div>
                    <p className='w-full lg:w-[400px]'>
                        {subheader}
                    </p>
                </div>
                <div className='flex flex-col justify-between lg:flex-row gap-8'>
                    <div className="flex flex-col gap-10 w-full md:w-[300px] items-center md:items-start">
                        {ContactSectionContent.map(({key, title, icon, text}) => (
                            <div key={key} className='flex flex-row items-center gap-4 p-8 border border-solid border-slate-200 rounded-tr-xl rounded-bl-xl bg-slate-100 hover:scale-105 transition duration-150 ease-in-out shadow-xl w-full max-w-[300px] group relative overflow-hidden bg-gray-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring hover:border-3'>
                                <span className='text-secondary-red'>
                                    {icon}
                                </span>
                                <div className='flex-col'>
                                    <h4 className='font-bold text-left'>{title}</h4>
                                    <p className=' text-left'>{text}</p>
                                </div>
                                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
                                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-secondary-red transition-all duration-700 group-hover:h-full"></span>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        <form 
                            action="https://data.endpoint.space/cljvd1c0f006008l4400sjt6m"
                            method="POST" 
                            // onSubmit={handleSubmit}
                            className='flex flex-wrap w-full gap-3'>
                            <span>Name</span>
                            <input 
                                type="text" 
                                name='sender' 
                                value={form.name}
                                // onChange={handleChange}
                                placeholder='Enter your name..'
                                className='w-full inputField focus:placeholder:italic'
                                />
                            <span>Email</span>
                            <input 
                                type="email" 
                                name='email' 
                                value={form.name}
                                // onChange={handleChange}
                                placeholder='Enter your email..'
                                className='w-full inputField focus:placeholder:italic'
                                />
                            <span>Message</span>
                            <textarea 
                                rows={7}
                                name='message'
                                value={form.name}
                                // onChange={handleChange}
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