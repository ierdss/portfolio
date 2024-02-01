import { ReactNode } from "react";

import ServiceCard from "./ServiceCard";

interface Card {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

interface ServiceCardsProps {
  cards: Array<Card>;
}

export default function ServiceCards({ cards }: ServiceCardsProps) {
  return (
    <ul className="service-cards">
      {cards.map(({ icon, title, description }) => (
        <ServiceCard
          key={title}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
}
