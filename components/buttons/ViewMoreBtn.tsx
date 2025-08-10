import { FaArrowRightLong } from "react-icons/fa6";

export default function ViewMoreBtn({ text }: HeadingProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <a className="z-20 w-full text-center text-text">{text}</a>
      <FaArrowRightLong size={28} />
    </div>
  );
}
