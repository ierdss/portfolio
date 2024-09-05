import { ReactNode } from "react";
import { BsQuestionOctagon } from "react-icons/bs";

interface ServiceCardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div className={className || "service-card group"}>
      <div className="service-card__icon">
        {icon || <BsQuestionOctagon size={50} />}
      </div>
      <h1 className="service-card__title">{title || "Title"}</h1>
      <p className="service-card__description">
        {description ||
          "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}
      </p>
      <div className="service-card__shadow"></div>
    </div>
  );
}
