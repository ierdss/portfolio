import Image from "next/image";
import ServiceCards from "./ServiceCards";
import { ServicesSectionContent as cards } from "@/constants";

export default function Services() {
  return (
    <div
      id="services"
      className="bg-background-2 flex w-full flex-col gap-[50px]"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[50px] px-[8px] py-[50px] md:flex-row md:px-[150px] md:py-[100px]">
        <div className="flex max-w-[250px] flex-col gap-4">
          <div>
            <h1 className="sectionOverline sm:text-center md:text-left">
              Services
            </h1>
            <h1 className="sectionHeading sm:text-center md:text-left">
              What I Can Offer
            </h1>
          </div>
          <p className="sectionLeading sm:text-center md:text-left">
            With my services, I can make your product ideas come to life.
          </p>
        </div>
        <div className="w-full">
          <ServiceCards cards={cards} />
        </div>
      </div>
    </div>
  );
}
