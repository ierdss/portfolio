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
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center justify-center gap-2 w-full max-w-[140px] aspect-16/11 rounded-2xl shadow-md"
    >
      <div>{icon || <FaQuestion size={30} />}</div>
      <h1 className="text-xs">{name || "Name"}</h1>
    </a>
  );
}
