import {
  TestimonialsSectionHeading,
  TestimonialsSectionContent,
} from "@/constants";
import Image from "next/image";

export default function Testimonials() {
  const { overline, header } = TestimonialsSectionHeading;

  return (
    <div id="testimonials" className="testimonials sectionPadding">
      <div className="w-full">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
        <span className="w-[60px] h-[5px] bg-secondary-red mt-2 rounded-md" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[25px]">
        {TestimonialsSectionContent.map(
          ({ avatar, name, occupation, testimonial }, index) => (
            <li
              key={index}
              className="relative flex items-center flex-col w-full rounded-md p-8 gap-3 shadow-lg border border-neutral-300 group first:text-white first:bg-secondary-red bg-neutral-50  hover:-translate-y-4 transition-all duration-500 ease-in-out"
            >
              <p className="font-medium text-xs text-left">{testimonial}</p>

              <div className="w-full flexCenter flex-row !justify-start gap-2">
                <Image
                  src={avatar}
                  width={50}
                  height={50}
                  alt="Testimonial Avatar"
                  className=" bg-black rounded-full overflow-hidden aspect-square"
                />
                <div className="text-left">
                  <h1 className="font-bold text-sm">{name}</h1>
                  <h1 className="font-semibold text-xs text-secondary-red group-first:text-white ">
                    {occupation}
                  </h1>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
