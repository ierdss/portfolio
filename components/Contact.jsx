import { ContactSectionHeading } from '@/constants/SectionHeading'
import { useRef, useState } from 'react';
import ContactGrid from './minor/ContactGrid';

import emailjs from "@emailjs/browser";
import 'dotenv/config'
require('dotenv').config()

import HashLoader from 'react-spinners/HashLoader';

export default function Contact() {
    const { overline, header, subheader } = ContactSectionHeading;

    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
      const { target } = event;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          process.env.NEXT_EMAILJS_SERVICE_ID,
          process.env.NEXT_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Andrei",
            from_email: form.email,
            to_email: "andreiwork25@gmail.com",
            message: form.message,
          },
          process.env.NEXT_EMAILJS_PUBLIC_KEY
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
          <div className='flex flex-col justify-between lg:flex-row gap-8 w-full lg:w-[55%] h-full bg-white shadow-xl rounded-xl p-4 lg:p-8 lg:order-2 border border-neutral-300'>
            <ContactGrid/>
          </div>
          <div className='flex flex-col gap-4 shadow-xl rounded-xl p-4 w-full md:p-8 lg:w-[40%] bg-neutral-800 text-white m-2 md:mr-0 lg:order-1'>
              <div className="">
                  <h1 className="sectionOverline !text-white">{overline}</h1>
                  <h1 className="sectionHeader">{header}</h1>
              </div>
              <p className='w-full normal-case'>
                  {subheader}
              </p>
              <div className="flex-1 flex flex-col gap-4 w-full">
                  <form 
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className='flex flex-wrap w-full gap-3'
                  >
                    <label className='flex flex-col w-full'>
                      <span className="font-bold text-left">Name*</span>
                      <input 
                          type="text"
                          name='name'
                          value={form.name}
                          onChange={handleChange}
                          placeholder='Enter your name..'
                          className='inputField'
                          />
                    </label>
                    <label className='flex flex-col w-full'>
                      <span className="font-bold text-left">Email*</span>
                      <input 
                          type="email"
                          name='email'
                          value={form.email}
                          onChange={handleChange}
                          placeholder='Enter your email..'
                          className='inputField'
                          />
                    </label>
                    <label className='flex flex-col w-full'>
                      <span className="font-bold text-left">Message*</span>
                      <textarea 
                          rows={7}
                          name='message'
                          value={form.message}
                          onChange={handleChange}
                          placeholder='Write your message..'
                          className='inputField textArea'
                          />
                    </label>
                    <button type='submit' className='w-full callToAction mt-2 flex justify-center items-center'>
                      {loading ? 
                      <div className='flex flex-row gap-4'>
                        Sending...
                       <HashLoader
                        loading={true}
                        size={28}
                        color="white"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        speedMultiplier={1}
                        className='text-white'
                        ></HashLoader>
                      </div> : "Send"
                    }
                    </button>
                  </form>
              </div>
          </div>
      </div>
    )
}