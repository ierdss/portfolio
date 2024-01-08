import { ServiceCard } from "./ServiceCards";
import { AboutSectionContent as content } from "@/constants/SectionContent";

export default function ServicesCardGallery() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-6 gap-4 py-8 md:py-12">
      <ServiceCard
        icon={content[0].icon}
        title={content[0].title}
        paragraph={content[0].paragraph}
        colorType="serviceCard__black"
      />
      <div className="flex items-center justify-center text-transparent">
        Filler
      </div>
      <ServiceCard colorType="serviceCard__red" />
      <ServiceCard colorType="serviceCard__red" />
      <ServiceCard />
      <ServiceCard colorType="serviceCard__image" />
      <div className="flex items-center justify-center text-transparent">
        Filler
      </div>
    </div>
  );
}
