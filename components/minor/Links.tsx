import Link from "next/link";
import { SocialMediaLinks } from "@/constants/NavigationLinks";

type classNameProps = {
  className?: string;
};

export default function Links({ className }: classNameProps) {
  return (
    <ul
      className={
        className ||
        "flex flex-row justify-center items-center gap-4 lg:justify-start"
      }
    >
      {SocialMediaLinks.map(({ id, ariaLabel, icon, url }) => (
        <li key={id}>
          <Link
            href={url}
            target="_blank"
            aria-label={ariaLabel}
            className="text-secondary-red hover:text-accent-pink"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
