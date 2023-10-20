import Image from "next/image";
import { ServiceCard } from "./cards/ServiceCards";
import { ServicesSectionContent as card } from "@/constants";

export default function Services() {
  return (
    <div id="services" className="services sectionPadding">
      <div className="servicesContent">
        <div className="w-full">
          <h1 className="sectionOverline sm:text-center md:text-left">
            Services
          </h1>
          <h1 className="sectionHeading sm:text-center md:text-left">
            The Value I Provide
          </h1>
        </div>
        <p className="sectionLeading sm:text-center md:text-left">
          With my services I can make your ideas for a product or service come
          to life.
        </p>
      </div>
      <div className="servicesCards relative">
        <Image
          typeof="background"
          src={"/patterns/ring.svg"}
          width={400}
          height={400}
          alt="This is impossible! An svg did not load?"
          className="servicesBackground top-1/2 left-1/2 translate-x-[-50%] translate-y-[-40%] hidden sm:flex"
        />
        <div className="servicesCardsRow">
          <ServiceCard
            icon={card[0].icon}
            title={card[0].title}
            paragraph={card[0].description}
            colorType="serviceCard__red"
          />
          <ServiceCard
            icon={card[1].icon}
            title={card[1].title}
            paragraph={card[1].description}
            colorType="serviceCard"
          />
        </div>
        <div className="servicesCardsRow sm:mt-[50px]">
          <ServiceCard
            icon={card[2].icon}
            title={card[2].title}
            paragraph={card[2].description}
            colorType="serviceCard"
          />
          <ServiceCard
            icon={card[3].icon}
            title={card[3].title}
            paragraph={card[3].description}
            colorType="serviceCard"
          />
        </div>
        {/* <div className="servicesCardsRow xs:mt-[100px]">
          <ServiceCard
            icon={card[2].icon}
            title={card[2].title}
            paragraph={card[2].description}
            colorType="serviceCard"
          />
          <ServiceCard
            icon={card[3].icon}
            title={card[3].title}
            paragraph={card[3].description}
            colorType="serviceCard"
          />
        </div> */}
      </div>
      <Image
        typeof="background"
        src={"/patterns/ring-left.svg"}
        width={1000}
        height={1000}
        alt="This is impossible! An svg did not load?"
        priority
        className="servicesBackground -bottom-1/3 right-0 translate-y-[-50%] sm:hidden"
      />
    </div>
  );
}
