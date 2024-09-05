import {
  TestimonialsRow1,
  TestimonialsRow2,
  TestimonialsRow3,
} from "@/constants";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className=" flex w-full flex-col items-center justify-center gap-[50px] bg-background-2 text-center"
    >
      <div className="relative flex w-full max-w-[1980px] flex-col items-center justify-between gap-[70px] overflow-hidden px-[8px] py-[50px] md:px-[150px] md:py-[200px]">
        <h1 className="font-boldtext-left z-20 w-full text-[32px] font-bold capitalize text-gray md:text-[64px]">
          What Do My Clients Think?
        </h1>

        {/* Testimonials Stack */}
        <div className="flex flex-col gap-[40px]">
          <TestimonialsRow row={TestimonialsRow1} />
          <TestimonialsRow row={TestimonialsRow2} />
          <TestimonialsRow row={TestimonialsRow3} />
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 z-10 h-[700px] w-[700px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-accent-1 blur-[300px]" />
        <div className="bg-accent-3 absolute left-[50%] top-[50%] z-10 h-[500px] w-[500px] -translate-x-[50%] -translate-y-[50%] rounded-full blur-[300px]" />
        <div className="absolute bottom-0 right-0 z-10 h-[500px] w-[500px] translate-x-[30%] translate-y-[30%] rounded-full bg-accent-2 blur-[300px]" />
      </div>
    </div>
  );
}

interface ITestimonialsRow {
  row: ITestimonial[];
}

interface ITestimonial {
  id: number;
  avatar: string;
  name: string;
  location: string;
  testimonial: string;
}

function TestimonialsRow({ row }: ITestimonialsRow) {
  return (
    <ul className="z-20 flex flex-row items-start justify-center gap-[40px]">
      {row.map(({ id, avatar, name, location, testimonial }) => (
        <li
          key={id}
          className="group relative flex h-fit min-h-[250px] w-[400px] select-none flex-col items-center justify-center gap-[24px] rounded-[20px] bg-glass p-10 text-content transition-all duration-500 ease-in-out first:bg-heading first:text-white  hover:-translate-y-4"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex w-full flex-row items-center justify-start gap-[10px]">
              <div className="h-[50px] w-[50px] overflow-hidden rounded-full bg-gray">
                {/* <Image
                  src={avatar}
                  width={50}
                  height={50}
                  alt="Avatar"
                  className="h-[50px] w-[50px] overflow-hidden rounded-full bg-background-1"
                /> */}
              </div>
              <div className="text-left">
                <h1 className="text-[20px] font-bold text-heading group-first:text-background-1">
                  {name}
                </h1>
                <p className="font-regular text-[14px] capitalize text-heading group-first:text-background-1">
                  {location}
                </p>
              </div>
            </div>
            <p className="flex justify-end text-sm">⭐⭐⭐⭐⭐</p>
          </div>
          <p className="flex w-full flex-row gap-4 text-left text-[12px] font-semibold text-content group-first:text-background-1 ">
            ❝{testimonial}❞
          </p>
        </li>
      ))}
    </ul>
  );
}
