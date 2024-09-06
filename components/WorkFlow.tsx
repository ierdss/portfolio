import { WorkflowData } from "@/constants";

export default function Workflow() {
  return (
    <div
      id="workflow"
      className="sectionPadding workflow relative gap-[75px] md:h-[100vh] md:max-h-[500px]"
    >
      <div className="w-full !text-center">
        <h1 className="sectionOverline !text-center">Workflow</h1>
        <h1 className="sectionHeading !text-center">My Thought Process</h1>
        <span className="mt-2 h-[5px] w-[60px] rounded-md bg-secondary-red" />
      </div>
      <ul className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-4 md:gap-[25px]">
        {WorkflowData.map(({ number, title, description }, index) => (
          <li
            key={index}
            className="group relative z-10 inline-block aspect-video w-full rounded-md border border-neutral-100 bg-white px-4 py-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
          >
            <span className="absolute -top-[30px] left-[50%] !z-20 flex aspect-square w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-secondary-red text-2xl font-bold text-white shadow-lg">
              {number}
            </span>
            <h1 className="sectionHeading-2 !text-center">{title}</h1>
            <p className="sectionDescription mt-2 !text-justify">
              {description}
            </p>
            <span className="ease absolute left-0 top-0  h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-1/2" />
            <span className="ease absolute right-0 top-0 h-0 w-0 rounded-lg border-b-2 border-secondary-red transition-all duration-500 group-hover:w-1/2" />
            <span className="ease absolute bottom-0 left-0  h-0 w-0 border-t-2 border-secondary-red transition-all duration-1000 group-hover:w-1/2" />
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary-red transition-all duration-1000 group-hover:w-1/2" />
          </li>
        ))}
      </ul>
      {/* <Image
        src={"/patterns/bg-services__mobile.svg"}
        fill
        alt="Nothing"
        className="absolute inset-0 z-[1]"
      /> */}
    </div>
  );
}
