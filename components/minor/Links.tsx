import Link from "next/link";
import { SocialMediaLinks } from "@/constants/NavigationLinks";

import { SocialIcon } from "react-social-icons";

type classNameProps = {
  className?: string;
};

export default function Links({ className }: classNameProps) {
  return (
    <ul
      className={
        className ||
        "flex flex-row justify-center items-center gap-2 lg:justify-start"
      }
    >
      {SocialMediaLinks.map(({ id, ariaLabel, icon, url }) => (
        <li key={id}>
          <SocialIcon
            url={url}
            target="_blank"
            label={ariaLabel}
            style={{ height: 35, width: 35 }}
            className="text-secondary-red hover:text-accent-pink"
          />
        </li>
      ))}
    </ul>
  );
}
