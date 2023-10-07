import { TestimonialsSectionContent } from "@/constants";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials sectionPadding">
      <div className="w-full">
        <h1 className="sectionOverline !text-center">Testimonials</h1>
        <h1 className="sectionHeading !text-center">What People Say</h1>
        <span className="w-[60px] h-[5px] bg-secondary-red mt-2 rounded-md" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[25px] lg:w-[80%]">
        {TestimonialsSectionContent.map(
          ({ avatar, name, occupation, testimonial }, index) => (
            <li
              key={index}
              className="relative flex items-center flex-col w-full rounded-md p-8 gap-3 shadow-lg border border-neutral-300 group first:text-white first:bg-secondary-red bg-neutral-50  hover:-translate-y-4 transition-all duration-500 ease-in-out"
            >
              <p className="flex flex-row gap-4">
                <span className="sectionDescription group-first:text-white w-[90%]">
                  {testimonial}
                </span>
                <BiSolidQuoteLeft
                  size={50}
                  className="text-secondary-red group-first:text-white"
                />
              </p>
              <div className="w-full flexCenter flex-row !justify-start gap-2 mt-2">
                <Image
                  src={avatar}
                  width={50}
                  height={50}
                  alt="Testimonial Avatar"
                  className=" bg-black rounded-full overflow-hidden aspect-square"
                />
                <div className="text-left">
                  <h1 className="sectionLeading group-first:text-white">
                    {name}
                  </h1>
                  <h1 className="sectionOverline-2 !capitalize group-first:text-white ">
                    {occupation}
                  </h1>
                </div>
              </div>
              <p className="w-full flex justify-end">⭐⭐⭐⭐⭐</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
