import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import emailjs from "@emailjs/browser";
import "dotenv/config";
require("dotenv").config();

import HashLoader from "react-spinners/HashLoader";
import Image from "next/image";
import { ContactSectionContent } from "@/constants";

export default function Contact() {
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

  const [modal, setModal] = useState({
    title: "",
    email: "",
    message: "",
  });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleModal(title, message, button) {
    modal.title = title;
    modal.message = message;
    modal.button = button;
    openModal();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andrei",
          from_email: form.email,
          to_email: "andreiwork25@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          handleModal(
            "Message Sent Succesfully!",
            "Thank you for contacting me! I will get back to you as soon as possible.",
            "Okay, I undestand"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          handleModal(
            "Failed To Send Message!",
            "Ahh, something went wrong. Please try again!",
            "Okay, I undestand"
          );
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row w-full text-center justify-center items-center md:text-left bg-transparent overflow-hidden section-padding__y-axis section-padding__x-axis !pb-[30px]"
    >
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 capitalize"
                  >
                    {modal.title || "payment successful"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modal.message ||
                        "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-secondary-red px-4 py-2 text-sm font-medium text-white hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-red focus-visible:ring-offset-2 normal-case"
                      onClick={closeModal}
                    >
                      {modal.button || "Got it, thanks!"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="flex flex-col lg:flex-row bg-rose-100 rounded-3xl section-padding__y-axis section-padding__x-axis gap-[50px] relative overflow-hidden">
        <div className="w-full lg:w-1/3 md:aspect-auto aspect-square relative flex flex-col justify-center items-center md:items-start gap-8 drop-shadow-xl">
          <div className="w-full">
            <h1 className="sectionOverline !text-center md:!text-left">
              Contact
            </h1>
            <h1 className="sectionHeading !text-center md:!text-left">
              Send me a message
            </h1>
            <p className="sectionLeading !text-center md:!text-left mt-2">
              Feel free to contact me anytime! I'll get back to you as soon as I
              can!
            </p>
          </div>
          <div className="z-10 flex flex-col gap-[50px] w-fit">
            <ul className="flex flex-col gap-[20px]">
              {ContactSectionContent.map(({ icon, title, text }, index) => (
                <li key={index} className="flex flex-row gap-2 text-left">
                  <div className="text-secondary-red">{icon}</div>
                  <div>
                    <h1 className="sectionLeading">{title}</h1>
                    <p className="sectionDescription">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-2/3 !px-[0px] flex flex-col justify-center items-center gap-4 md:gap-[50px] rounded-md g:order-1 flex-1 z-20">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-wrap w-full gap-3"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <label className="flex flex-col w-full">
                <span className="sectionLeading text-left">
                  Name<span className="text-secondary-red">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name.."
                  autoComplete="on"
                  className="inputField sectionDescription"
                />
              </label>
              <label className="flex flex-col w-full">
                <span className="sectionLeading text-left">
                  Email<span className="text-secondary-red">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email.."
                  autoComplete="on"
                  className="inputField sectionDescription"
                />
              </label>
            </div>
            <label className="flex flex-col w-full">
              <span className="sectionLeading text-left">
                Message<span className="text-secondary-red">*</span>
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message.."
                className="inputField textArea sectionDescription"
              />
            </label>
            <button
              type="submit"
              className="!w-full md:!w-fit min-w-[210px] cta__solid !px-12 !py-3 flex justify-center items-center"
            >
              {loading ? (
                <div className="flex flex-row gap-4">
                  Sending...
                  <HashLoader
                    loading={true}
                    size={20}
                    color="white"
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={1}
                    className="text-white"
                  />
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
        <Image
          typeof="background"
          src={"/patterns/cross.svg"}
          width={800}
          height={800}
          alt="This is impossible! An svg did not load?"
          className="services__background top-1/2 left-1/2 translate-x-[-5%] translate-y-[-29%] hidden sm:flex"
        />
        <Image
          typeof="background"
          src={"/patterns/cross.svg"}
          width={1000}
          height={1000}
          alt="This is impossible! An svg did not load?"
          priority
          className="services__background -bottom-1/3 right-0 translate-x-[20%] translate-y-[-120%] sm:hidden"
        />
      </div>
    </div>
  );
}
