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
      className="relative flex w-full flex-col items-center justify-center gap-12 bg-background-1  md:flex-row "
    >
      <div className="flex w-full max-w-center justify-center px-2 py-12 md:px-40 md:py-24">
        <p className="flex flex-row gap-[6px] text-xs text-text md:order-2 md:text-xl">
          © 2023{" "}
          <span className="flex h-fit w-fit font-bold"> Andrei Sager</span>
        </p>
      </div>
    </footer>
  );
}
