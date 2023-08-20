import Image from "next/image";
import { ServiceCard } from "./cards/ServiceCards";
import { ServicesSectionHeading } from "@/constants"

export default function Services() {
    const { overline, header, description } = ServicesSectionHeading

    return(
        <div className="services sectionPadding">
            <div className="servicesContent">
                <div className='w-full'>
                    <h1 className="sectionOverline">{overline}</h1>
                    <h1 className="sectionHeader">{header}</h1>
                </div>
                <p className="sectionDescription">{description}</p>
            </div>
            <div className="servicesCards">
                <div className="servicesCardsRow">
                    <ServiceCard colorType="serviceCard__red" />
                    <ServiceCard colorType="serviceCard__black" />
                </div>
                <div className="servicesCardsRow">
                    <ServiceCard colorType="serviceCard__black" />
                    <ServiceCard colorType="serviceCard__red" /> 
                </div>
            </div>
            <Image
                src={"/patterns/bg-services.svg"}
                fill
                alt="Circles"
                className="servicesBackground"
            >

            </Image>
        </div>
    )
}