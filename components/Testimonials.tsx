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
      className=" flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-background-2 text-center"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-between gap-9 px-2 py-12 md:gap-20 md:px-40 md:py-48">
        <h2 className="z-20 w-full text-center text-gray">
          What Do My Clients Think?
        </h2>

        {/* Testimonials Stack */}
        <div className="flex flex-col items-center justify-between gap-2 md:gap-10">
          <TestimonialsRow row={TestimonialsRow1} />
          <TestimonialsRow row={TestimonialsRow2} />
          <TestimonialsRow row={TestimonialsRow3} />
        </div>

        {/* Background Mist Effects */}
        <div className="absolute left-0 top-0 -translate-x-[30%] -translate-y-[30%]">
          <div className="md:animate-grow-shrink-1 z-10 h-[650px] w-[650px] bg-accent-1 blur-[300px] " />
        </div>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="md:animate-grow-shrink-2 z-10 h-[650px] w-[650px] bg-accent-2 blur-[300px]" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]">
          <div className="md:animate-grow-shrink-3 z-10 h-[650px] w-[650px] bg-accent-3 blur-[300px]" />
        </div>
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
    <ul className="z-20 flex flex-col items-start justify-center gap-2 md:flex-row md:gap-10">
      {row.map(({ id, avatar, name, location, testimonial }) => (
        <li
          key={id}
          className="group relative flex w-full select-none flex-col items-center justify-start gap-5 rounded-[20px] bg-glass p-5 text-content transition-all duration-500 ease-in-out hover:-translate-y-1 md:min-h-[220px] md:w-[400px] md:p-10 md:hover:-translate-y-4"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex w-full flex-row items-center justify-start gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray">
                {/* <Image
                  src={avatar}
                  width={50}
                  height={50}
                  alt="Avatar"
                  className="h-12 w-12 overflow-hidden rounded-full bg-background-1"
                /> */}
              </div>
              <div className="text-left">
                <h6 className="text-base font-bold text-heading">{name}</h6>
                <p className="font-regular text-xs capitalize text-heading">
                  {location}
                </p>
              </div>
            </div>
            <p className="flex justify-end text-sm">⭐⭐⭐⭐⭐</p>
          </div>
          <p className="flex w-full flex-row gap-4 text-left text-xs font-semibold text-content">
            ❝{testimonial}❞
          </p>
        </li>
      ))}
    </ul>
  );
}
