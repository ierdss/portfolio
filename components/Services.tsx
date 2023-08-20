import Image from "next/image";
import { ServiceCard } from "./cards/ServiceCards";
import {
  ServicesSectionHeading,
  ServicesSectionContent as card,
} from "@/constants";

export default function Services() {
  const { overline, header, description } = ServicesSectionHeading;

  return (
    <div id="services" className="services sectionPadding">
      <div className="servicesContent">
        <div className="w-full">
          <h1 className="sectionOverline">{overline}</h1>
          <h1 className="sectionHeader">{header}</h1>
        </div>
        <p className="sectionDescription">{description}</p>
      </div>
      <div className="servicesCards">
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
            colorType="serviceCard__black"
          />
        </div>
        <div className="servicesCardsRow">
          <ServiceCard
            icon={card[2].icon}
            title={card[2].title}
            paragraph={card[2].description}
            colorType="serviceCard__black"
          />
          <ServiceCard
            icon={card[3].icon}
            title={card[3].title}
            paragraph={card[3].description}
            colorType="serviceCard__red"
          />
        </div>
      </div>
      <Image
        typeof="background"
        src={"/patterns/bg-services__desktop.svg"}
        fill
        alt="This is impossible! An svg did not load?"
        className="servicesBackground top-0  hidden md:flex"
      />
      <Image
        typeof="background"
        src={"/patterns/bg-services__mobile.svg"}
        fill
        alt="This is impossible! An svg did not load?"
        className="servicesBackground bottom-0 md:hidden"
      />
    </div>
  );
}
