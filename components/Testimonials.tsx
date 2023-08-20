import { WorkflowSectionHeading } from "@/constants";
export default function Testimonials() {
  const { overline, header } = WorkflowSectionHeading;

  return (
    <div id="testimonials" className="testimonials sectionPadding">
      <div className="w-full">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
        <span className="w-[60px] h-[5px] bg-secondary-red mt-2 rounded-md"/>
      </div>
      Testimonials A sliding carousel that automaticallyy displays all
      testimonials received from clients and companies. Use an image background
      to not use cards.
    </div>
  );
}
