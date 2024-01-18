import { ReactNode } from "react";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceCardProps = {
  icon: ReactNode;
  title: string;
  company: string;
  date: string;
  bullets: Array<String>;
};

export default function ExperienceCard({
  icon,
  title,
  company,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      className="experience-card"
      contentStyle={{
        background: "white",
        color: "black",
        borderBottomColor: "#212121",
      }}
      contentArrowStyle={{ borderRight: "7px solid #B40041" }}
      date={date}
      dateClassName="experience-card__date"
      icon={
        icon || (
          <div className="experience-card__icon">
            <Image
              src="/patterns/intersecting-circles.svg"
              fill
              alt="Circle"
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        )
      }
      iconClassName="bg-white overflow-hidden"
    >
      <h1 className="experience-card__title">{title}</h1>
      <h1 className="experience-card__company">{company}</h1>
      <ul className="experience-card__bullets">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm tracking-wider pl-1 font-medium">
            {bullet}
          </li>
        ))}
      </ul>
      <span className="ease absolute bottom-0 left-[50%] -translate-x-1/2 h-0 w-0 border-t-2 border-secondary-red transition-all duration-700 group-hover:w-full" />
    </VerticalTimelineElement>
  );
}
