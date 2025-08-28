import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import MagneticWrapper from "./wrappers/MagneticWrapper";

export default function NotFound() {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center gap-4 bg-pattern md:gap-6">
      <h2 className="text-redberry">404 Not Found</h2>
      <p>Could not find requested resource</p>

      <MagneticWrapper>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          <FaHouseChimney size={20} />
          Return Home
        </Link>
      </MagneticWrapper>
    </div>
  );
}
