import MagneticWrapper from "@/wrappers/MagneticWrapper";
import Link from "next/link";
import React from "react";

type CallToActionBtnProps = {
  iconOnly: boolean;
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  text?: string;
};

export default function CallToActionBtn({
  iconOnly,
  href,
  ariaLabel,
  icon,
  text,
}: CallToActionBtnProps) {
  return (
    <MagneticWrapper>
      <div>
        {iconOnly ? (
          <Link
            href={href ? href : ""}
            target="_blank"
            aria-label={ariaLabel}
            rel="noopener noreferrer"
            className="flex rounded-full bg-text p-2 text-background-1 hover:bg-primary"
          >
            {icon}
          </Link>
        ) : (
          <Link
            href={href ? href : ""}
            target="_blank"
            aria-label={ariaLabel}
            rel="noopener noreferrer"
            className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          >
            {icon}
            <p>{text}</p>
          </Link>
        )}
      </div>
    </MagneticWrapper>
  );
}
