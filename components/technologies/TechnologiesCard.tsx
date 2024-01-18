import { ReactNode } from "react";

import { FaQuestion } from "react-icons/fa";

interface TechnologiesCard {
  icon?: ReactNode;
  name?: string;
  link?: string;
}

export default function TechnologiesCard({
  icon,
  name,
  link,
}: TechnologiesCard) {
  return (
    <a href={link} target="_blank" className="technologies-card group">
      <div>
        {icon || <FaQuestion size={30} className="technologies-card__icon" />}
      </div>
      <h1 className="technologies-card__name">{name || "Name"}</h1>
    </a>
  );
}
