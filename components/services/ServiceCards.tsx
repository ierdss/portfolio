import { ReactNode } from "react";

import { BsQuestionOctagon } from "react-icons/bs";

interface Card {
  id: number;
  icon?: ReactNode;
  title?: string;
  paragraph?: string;
  colorType?: string;
}

type ServiceCardProps = Omit<Card, "id">;

export function ServiceCard({
  icon,
  title,
  paragraph,
  colorType,
}: ServiceCardProps) {
  return (
    <div className={colorType || "serviceCard"}>
      <div>{icon || <BsQuestionOctagon size={50} />}</div>
      <h1>{title || "Sample"}</h1>
      <p>
        {paragraph ||
          "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}
      </p>
      <div className="serviceCard__shadow"></div>
    </div>
  );
}

type ServiceCardsProps = {
  cards?: Array<Card>;
};

export default function ServiceCards({ cards }: ServiceCardsProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {cards?.map(({ id, icon, title, paragraph }) => (
        <ServiceCard key={id} icon={icon} title={title} paragraph={paragraph} />
      ))}
    </div>
  );
}
