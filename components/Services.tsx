import { ServicesData } from "@/constants";
import { ReactNode } from "react";
import { BsQuestionOctagon } from "react-icons/bs";

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-background-2"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <div className="z-20">
          <h1 className="z-20 w-full text-left text-gray">What Do I Offer?</h1>

          <ul className="flex w-full flex-col flex-wrap items-center justify-between md:flex-row">
            {ServicesData.map(({ id, icon, title, description }) => (
              <ServiceCard
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>

        <div className="z-20">
          <h2 className="text-center text-gray">How Do I Get The Job Done?</h2>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[650px] w-[650px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-[650px] w-[650px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-2 blur-[300px]" />
        <div className="absolute bottom-0 right-0 z-10 h-[650px] w-[650px] translate-x-[30%] translate-y-[30%] rounded-full bg-accent-3 blur-[300px]" />
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={
        className ||
        "group z-20 flex w-full flex-row gap-6 overflow-hidden p-6 transition-all duration-300 ease-out hover:scale-105 hover:text-secondary-red md:min-h-[200px] md:max-w-[400px]"
      }
    >
      <div className="flex h-fit text-secondary-red">
        {icon || <BsQuestionOctagon size={50} />}
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-left text-gray">{title || "Title"}</h6>
        <p className="text-left text-sm normal-case text-gray">
          {description ||
            "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}
        </p>
      </div>
    </div>
  );
}
