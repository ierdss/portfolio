import { SocialLinksData } from "@/constants";
import Magnetic from "@/wrappers/MagneticWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

export default function Hero() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    console.clear();

    gsap.set(".split", { opacity: 1 });

    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          autoAlpha: 0,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.5,
        });
        return split;
      },
    });
    gsap.to(".box", { x: 360 });

    gsap.registerPlugin(Draggable);
    Draggable.create(".button", {
      onPress: function () {
        if (!this.origX || !this.origY) {
          this.origX = this.startX;
          this.origY = this.startY;
        }
      },
      onDragEnd: function (pointerEvent) {
        const speed = 0.35;
        const easing = "back.out(1.7)"; // https://greensock.com/docs/v3/Eases
        gsap.to(this.target, { x: 0, y: 0, duration: speed, ease: easing });
      },
    });
  });
  return (
    <div
      id="hero"
      className="flex h-screen w-full select-none flex-col items-center justify-center bg-pattern"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-10 px-2 py-24 md:flex-row lg:gap-20 lg:py-48">
        <div className="z-10 flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-background-1/50 lg:max-w-[400px]">
          <Image
            src="/portraits/barong.png"
            width={1000}
            height={1000}
            alt="Just a chill guy."
            priority
          />
        </div>

        <div className="z-20 order-2 flex w-fit max-w-[500px] shrink-0 flex-col items-center justify-center gap-4 text-center md:max-w-[350px] md:items-start md:gap-6 md:text-left lg:max-w-[500px]">
          <p>Hey, Im</p>
          <h1 className="font-serif leading-none text-redberry">
            Andrei
            <br />
            <span className="text-background-2">A</span>
            <span className="text-text">Sager</span>
          </h1>
          <p className="split">
            A 25 y/o Frontend Web Developer based in the Philippines
            specializing in Landing Pages & E-commerce Websites
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:justify-start">
            <div className="flex w-full items-center justify-center gap-2 md:justify-start md:gap-4">
              <Magnetic>
                <div>
                  <Link
                    href="/resume/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 button inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                  >
                    <FaFileDownload size={20} />
                    <p>Resume</p>
                  </Link>
                </div>
              </Magnetic>
            </div>
            <ul className="flex w-fit flex-row justify-between gap-4">
              {SocialLinksData.map(({ id, icon, ariaLabel, url }) => (
                <Magnetic>
                  <div>
                    <Link
                      key={id}
                      href={url}
                      target="_blank"
                      aria-label={ariaLabel}
                      className="text-primary-foreground shadow-xs [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 button inline-flex aspect-square h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-2 py-2 text-sm font-medium text-background-1 outline-none transition-all hover:bg-primary/90 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                    >
                      {icon}
                    </Link>
                  </div>
                </Magnetic>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
