import { ContactSectionHeading } from '@/constants/SectionHeading'
import { useRef, useState } from 'react';
import ContactGrid from './minor/ContactGrid';

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

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "JavaScript Mastery",
            from_email: form.email,
            to_email: "sujata@jsmastery.pro",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

    return( 
        <div id='contact' className='flex flex-row flex-wrap w-full sectionPadding text-center justify-center items-center md:text-left gap-8'>
          <div className='flex flex-col justify-between lg:flex-row gap-8 w-full lg:w-[55%] h-full bg-white shadow-xl rounded-xl p-8 md:order-2 border border-neutral-300'>
            <ContactGrid/>
          </div>
          <div className='flex flex-col gap-4 shadow-xl rounded-xl p-4 w-full md:p-8 lg:w-[40%] bg-neutral-800 text-white m-2 md:mr-0 md:order-1'>
              <div className="">
                  <h1 className="sectionOverline !text-white">{overline}</h1>
                  <h1 className="sectionHeader">{header}</h1>
              </div>
              <p className='w-full'>
                  {subheader}
              </p>
              <div className="flex-1 flex flex-col gap-4 w-full">
                  <form 
                      action="https://data.endpoint.space/cljvd1c0f006008l4400sjt6m"
                      method="POST" 
                      // onSubmit={handleSubmit}
                      className='flex flex-wrap w-full gap-3'>
                      <span className="font-bold">Name*</span>
                      <input 
                          type="text" 
                          name='sender' 
                          value={form.name}
                          // onChange={handleChange}
                          placeholder='Enter your name..'
                          className='w-full inputField focus:placeholder:italic'
                          />
                      <span className="font-bold">Email*</span>
                      <input 
                          type="email" 
                          name='email' 
                          value={form.name}
                          // onChange={handleChange}
                          placeholder='Enter your email..'
                          className='w-full inputField focus:placeholder:italic'
                          />
                      <span className="font-bold">Message*</span>
                      <textarea 
                          rows={7}
                          name='message'
                          value={form.name}
                          // onChange={handleChange}
                          placeholder='Write your message..'
                          className='inputField textArea '
                          />
                      <button type='submit' className='w-full callToAction mt-2'>Send</button>
                  </form>
              </div>
          </div>
      </div>
    )
}