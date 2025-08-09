"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import "dotenv/config";

import { SocialLinksData } from "@/constants";
import HashLoader from "react-spinners/HashLoader";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex w-full flex-col items-center justify-center bg-background-1"
    >
      <div className="relative flex w-full max-w-center flex-col justify-between gap-12 px-2 py-12 md:flex-row md:px-40 md:py-24">
        <div className="z-10 flex flex-col gap-9 md:gap-20">
          <div className="flex flex-col gap-6 md:gap-12 lg:flex-row">
            <div className="group:order-1 z-20 flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-md !px-0 md:gap-12"></div>
          </div>
        </div>

        <div className="z-10 flex flex-row items-center justify-center gap-8 md:flex-col md:items-end md:justify-end md:gap-16">
          <p className="order-1 flex w-fit flex-row gap-[6px] text-center text-xs text-text md:order-2 md:text-xl">
            © 2023{" "}
            <span className="flex h-fit w-fit font-bold"> Andrei Sager</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
