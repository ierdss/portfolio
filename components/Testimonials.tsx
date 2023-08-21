import {
  TestimonialsSectionHeading,
  TestimonialsSectionContent,
} from "@/constants";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials() {
  const { overline, header } = TestimonialsSectionHeading;

  return (
    <div id="testimonials" className="testimonials sectionPadding">
      <div className="w-full">
        <h1 className="sectionOverline">{overline}</h1>
        <h1 className="sectionHeader">{header}</h1>
        <span className="w-[60px] h-[5px] bg-secondary-red mt-2 rounded-md" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[75px] gap-x-[25px]">
        {TestimonialsSectionContent.map(
          ({ avatar, name, occupation, testimonial }, index) => (
            <li
              key={index}
              className="relative flex items-center flex-col justify-around w-full rounded-md p-8 gap-3 shadow-lg border border-neutral-300 group first:text-white first:bg-secondary-red bg-neutral-50 pt-[50px] hover:-translate-y-4 transition-all duration-500 ease-in-out"
            >
              <Image
                src={avatar}
                width={90}
                height={90}
                alt="Testimonial Avatar"
                className="absolute -top-[50px] left-[50%] -translate-x-1/2 bg-black rounded-full overflow-hidden aspect-square"
              />
              <div className="w-full flexCenter flex-row !justify-between">
                <div className="text-left">
                  <h1 className="font-bold text-lg">{name}</h1>
                  <h1 className="font-semibold text-xs text-secondary-red group-first:text-white uppercase">
                    {occupation}
                  </h1>
                </div>
                <BiSolidQuoteLeft
                  size={40}
                  className="text-secondary-red group-first:text-white"
                />
              </div>
              <p className="font-medium text-xs text-justify">{testimonial}</p>
              <span>⭐⭐⭐⭐⭐</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
