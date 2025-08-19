import { FaArrowRightLong } from "react-icons/fa6";

export default function ViewMoreBtn({ text, href }: AnchorProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <a className="w-full text-center text-text" href={href}>
        {text}
      </a>
      <FaArrowRightLong size={28} />
    </div>
  );
}
