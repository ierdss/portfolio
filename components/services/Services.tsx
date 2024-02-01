import Image from "next/image";
import ServiceCards from "./ServiceCards";
import { ServicesSectionContent as cards } from "@/constants";

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="max-w-[250px] flex flex-col gap-4">
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
      <Image
        typeof="background"
        src={"/patterns/ring.svg"}
        width={800}
        height={800}
        alt="This is impossible! An svg did not load?"
        className="services__background top-1/2 left-1/2 translate-x-[-20%] translate-y-[-29%] hidden sm:flex"
      />
      <Image
        typeof="background"
        src={"/patterns/ring-left.svg"}
        width={1000}
        height={1000}
        alt="This is impossible! An svg did not load?"
        priority
        className="services__background -bottom-1/3 right-0 translate-x-[20%] translate-y-[-60%] sm:hidden"
      />
    </div>
  );
}
