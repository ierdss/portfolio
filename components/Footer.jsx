"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import emailjs from "@emailjs/browser";
import "dotenv/config";

import HashLoader from "react-spinners/HashLoader";
import { SocialMediaLinks } from "@/constants";

export default function Footer() {
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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);

          handleModal(
            "Message Sent Succesfully!",
            "Thank you for contacting me! I will get back to you as soon as possible.",
            "Okay, I undestand",
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          handleModal(
            "Failed To Send Message!",
            "Ahh, something went wrong. Please try again!",
            "Okay, I undestand",
          );
        },
      );
  };

  return (
    <footer
      id="footer"
      className="flex w-full flex-col items-center justify-center bg-blackberry"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[50px] px-[8px] py-[50px] shadow-lg md:flex-row md:px-[150px] md:py-[100px]">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0  bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex h-full w-full items-center justify-center  p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
                    <Dialog.Title
                      as="h3"
                      className="text-gray-900 text-lg font-medium capitalize leading-6"
                    >
                      {modal.title || "payment successful"}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm">
                        {modal.message ||
                          "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-3xl border border-transparent bg-secondary-red px-4 py-2 text-sm font-semibold normal-case text-white hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-red focus-visible:ring-offset-2"
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

        <div className="flex flex-col gap-[35px] md:gap-[70px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-left text-[32px] font-bold capitalize text-gray md:text-[64px]">
              Reaching goals relentlessly!
            </h1>

            <p className="text-left text-[20px] text-gray brightness-90 md:!text-left">
              Relentlessly pursuing goals with unwavering{" "}
              <br className="hidden md:flex" />
              determination, turning vision into reality!
            </p>
          </div>

          <div className="flex flex-col gap-[25px] md:gap-[50px] lg:flex-row">
            <div className="group:order-1 z-20 flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-md !px-[0px] md:gap-[50px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-[30px] md:flex-row"
              >
                <div className="flex w-full flex-col gap-[30px] md:w-fit">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required={true}
                    placeholder="Enter your name..."
                    autoComplete="on"
                    className=" bg-blackglass block w-full rounded-[10px] bg-opacity-70 p-[16px] text-left text-gray focus:placeholder:italic md:w-[300px]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required={true}
                    placeholder="Enter your email..."
                    autoComplete="on"
                    className=" bg-blackglass active:bg-blackglass block w-full rounded-[10px] bg-opacity-70 p-[16px] text-left text-gray focus:placeholder:italic md:w-[300px]"
                  />

                  <button
                    type="submit"
                    className="block w-full min-w-[210px] items-center justify-center rounded-[10px] bg-gray p-[16px] font-bold text-blackberry hover:brightness-110 md:w-[300px]"
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
                </div>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required={true}
                  placeholder="Write your message..."
                  className=" bg-blackglass block h-full w-full resize-none rounded-[10px] bg-opacity-70 p-[16px] text-left text-gray focus:placeholder:italic md:h-[175px] md:w-[500px]"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[30px] md:items-end md:justify-end md:gap-[60px]">
          <ul className="flex w-fit flex-row items-center gap-[30px] md:w-full md:justify-between md:gap-2 lg:flex">
            {SocialMediaLinks.map(({ id, icon, ariaLabel, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                ariaLabel={ariaLabel}
                className="h-[48px] w-[48px] rounded-full text-gray"
              >
                {icon}
              </a>
            ))}
          </ul>
          <p className="flex w-fit flex-row gap-[6px] text-center text-[13px] text-gray md:text-[20px]">
            © 2023{" "}
            <span className="flex h-fit w-fit font-bold"> Andrei Sager</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
