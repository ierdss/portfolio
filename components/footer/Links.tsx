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
      {SocialMediaLinks.map(({ id, ariaLabel, url }) => (
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

const iSize = 30;

const SocialMediaLinks = [
  {
    id: 1,
    title: "Gmail",
    ariaLabel: "Send me an email!",
    url: "mailto:andreiwork25@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    ariaLabel: "Take a look at my work profile on LinkedIn.",
    url: "https://www.linkedin.com/in/andrei-sager-34a452265/",
  },
  {
    id: 3,
    title: "Github",
    ariaLabel: "Check out my projects from my GitHub repository!",
    url: "https://github.com/Andrei-Sager",
  },
];
