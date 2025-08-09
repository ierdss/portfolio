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
      className="relative flex w-full max-w-center flex-col items-center justify-center gap-12 bg-background-1 px-2 py-12 md:flex-row md:px-40 md:py-24"
    >
      <p className="order-1 flex w-fit flex-row gap-[6px] text-center text-xs text-text md:order-2 md:text-xl">
        © 2023{" "}
        <span className="flex h-fit w-fit font-bold"> Andrei Sager</span>
      </p>
    </footer>
  );
}
