import Image from "next/image";
import ServiceCards from "./ServiceCards";
import { ServicesSectionContent as cards } from "@/constants";

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center bg-background-2"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] overflow-hidden px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <h1 className="z-20 w-full text-left capitalize text-gray">
          What Do I Offer?
        </h1>

        <div className="w-full">
          <ServiceCards cards={cards} />
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[650px] w-[650px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-[650px] w-[650px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-2 blur-[300px]" />
        <div className="absolute bottom-0 right-0 z-10 h-[650px] w-[650px] translate-x-[30%] translate-y-[30%] rounded-full bg-accent-3 blur-[300px]" />
      </div>
    </div>
  );
}
