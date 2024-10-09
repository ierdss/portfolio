import { ServicesData, WorkflowData } from "@/constants";
import { ReactNode } from "react";
import { BsQuestionOctagon } from "react-icons/bs";

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-background-2"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-between gap-20 px-2 py-12 md:px-40 md:py-48">
        <div className="z-20 flex w-full flex-col gap-12 md:gap-20 ">
          <h1 className="z-20 w-full text-left text-text">What Do I Offer?</h1>
          <ul className="group/cards flex w-full flex-col flex-wrap items-center justify-between gap-2 md:flex-row">
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

        <div className="z-20 flex flex-col gap-12 md:gap-20 ">
          <h2 className="text-center text-text">How Do I Get The Job Done?</h2>
          <ul className="flex w-full flex-col flex-wrap items-center justify-between gap-2 md:flex-row md:gap-24">
            {WorkflowData.map(({ id, number, title, description }) => (
              <WorkflowCard
                key={id}
                number={number}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 -translate-x-[30%] -translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-1 blur-[300px] md:animate-grow-shrink-1 " />
        </div>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-2 blur-[300px] md:animate-grow-shrink-2" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] bg-accent-3 blur-[300px] md:animate-grow-shrink-3" />
        </div>
      </div>
    </div>
  );
}

interface IService {
  icon?: ReactNode;
  title: string;
  description?: string;
}

function ServiceCard({ icon, title, description }: IService) {
  return (
    <div
      className={
        "group/card z-20 flex w-full flex-row gap-6 p-6 transition-all duration-300 ease-out hover:scale-105 hover:text-primary md:min-h-[200px] md:max-w-[360px]"
      }
    >
      <div className="relative z-10 flex h-12 w-12">
        {/* text-primary group-hover:text-text */}
        <div className="z-20 h-12 w-12 text-redberry group-first/card:text-white group-hover/cards:group-hover/card:text-white group-hover/cards:text-redberry group-hover/cards:group-hover/card:group-first/card:text-white">
          {icon || <BsQuestionOctagon size={48} />}
        </div>
        <div className="absolute left-[50%] top-[50%] z-10 h-0 w-0 -translate-x-[50%] -translate-y-[50%] rounded-full bg-redberry duration-500 ease-in-out group-first/card:h-20 group-first/card:w-20 group-hover/card:h-20 group-hover/card:w-20 group-hover/cards:group-first/card:h-0 group-hover/cards:group-hover/card:group-first/card:h-24 group-hover/cards:group-first/card:w-0 group-hover/cards:group-hover/card:group-first/card:w-24" />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-left text-text">{title || "Title"}</h6>
        <p className="text-left text-sm normal-case text-text">
          {description ||
            "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}
        </p>
      </div>
    </div>
  );
}

interface IWorkflow {
  number: string;
  title: string;
  description?: string;
}

function WorkflowCard({ number, title, description }: IWorkflow) {
  return (
    <div
      className={
        "group z-20 flex w-full flex-row items-center justify-center gap-4 p-6 transition-all duration-300 ease-out hover:scale-105 hover:text-primary md:max-h-[250px] md:min-h-[200px] md:max-w-[700px] md:gap-16 [&:nth-child(2)]:flex-row-reverse md:[&:nth-child(2)]:flex-row md:[&:nth-child(3)]:flex-row-reverse [&:nth-child(4)]:flex-row-reverse"
      }
    >
      <h1 className="numbers select-none text-primary">{number}</h1>
      <div className="flex flex-col gap-2">
        <h6 className="text-left text-text">{title || "Title"}</h6>
        <p className="text-left text-sm normal-case text-text">
          {description ||
            "Lorem ipsum amet consectetur, adipisicing elit. Tenetur error, rem officia?"}
        </p>
      </div>
    </div>
  );
}
