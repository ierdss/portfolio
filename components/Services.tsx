import { ServicesData, WorkflowData } from "@/constants";
import { ReactNode } from "react";
import { BsQuestionOctagon } from "react-icons/bs";

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-background-2"
    >
      <div className="max-w-center relative flex w-full flex-col items-center justify-between gap-20 px-2 py-12 md:px-40 md:py-48">
        <div className="z-20 flex flex-col gap-20">
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

        <div className="z-20 flex flex-col gap-20">
          <h2 className="text-center text-gray">How Do I Get The Job Done?</h2>
          <ul className="flex w-full flex-col flex-wrap items-center justify-between gap-24 md:flex-row">
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
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-1 bg-accent-1 blur-[300px] " />
        </div>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-2 bg-accent-2 blur-[300px]" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]">
          <div className="z-10 h-[650px] w-[650px] animate-grow-shrink-3 bg-accent-3 blur-[300px]" />
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

interface IWorkflow {
  number: string;
  title: string;
  description?: string;
}

function WorkflowCard({ number, title, description }: IWorkflow) {
  return (
    <div
      className={
        "group z-20 flex w-full flex-row items-center justify-center gap-[4.375rem] overflow-hidden p-6 transition-all duration-300 ease-out hover:scale-105 hover:text-secondary-red md:max-h-[250px] md:min-h-[200px] md:max-w-[750px]  [&:nth-child(3)]:flex-row-reverse  [&:nth-child(4)]:flex-row-reverse"
      }
    >
      <h1 className="numbers select-none text-redberry">{number}</h1>
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
