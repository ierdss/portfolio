import { TestimonialsSectionContent } from "@/constants";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="sectionPadding bg-background-2 flex w-full flex-col items-center justify-center gap-[50px] text-center"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[50px] px-[8px] py-[50px] md:flex-row md:px-[150px] md:py-[100px]">
        <div className="w-full">
          <h1 className="sectionOverline !text-center">Testimonials</h1>
          <h1 className="sectionHeading !text-center">What People Say</h1>
          <span className="mt-2 h-[5px] w-[60px] rounded-md bg-secondary-red" />
        </div>
        <ul className="grid grid-cols-1 gap-x-[25px] gap-y-[20px] md:grid-cols-2 lg:w-[80%]">
          {TestimonialsSectionContent.map(
            ({ avatar, name, occupation, testimonial }, index) => (
              <li
                key={index}
                className="group relative flex w-full flex-col items-center gap-3 rounded-md border border-neutral-300 bg-neutral-50 p-8 shadow-lg transition-all duration-500  ease-in-out first:bg-secondary-red first:text-white hover:-translate-y-4"
              >
                <p className="flex flex-row gap-4">
                  <span className="sectionDescription w-[90%] group-first:text-white">
                    {testimonial}
                  </span>
                  <BiSolidQuoteLeft
                    size={50}
                    className="text-secondary-red group-first:text-white"
                  />
                </p>
                <div className="flexCenter mt-2 w-full flex-row !justify-start gap-2">
                  <Image
                    src={avatar}
                    width={50}
                    height={50}
                    alt="Testimonial Avatar"
                    className=" aspect-square overflow-hidden rounded-full bg-black"
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
                <p className="flex w-full justify-end">⭐⭐⭐⭐⭐</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
