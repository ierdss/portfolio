import SocialMediaLinks from "./minor/Links";
import { FooterSectionHeading } from "@/constants/SectionHeading";

export default function Footer() {
  const { copyright } = FooterSectionHeading;

  return (
    <footer className="flex flex-col w-full py-6 px-16 border-t border-neutral-300  text-center">
      {copyright}
    </footer>
  );
}
