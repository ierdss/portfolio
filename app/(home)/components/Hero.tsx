import CallToActionBtn from "@/components/buttons/CallToActionBtn";
import { SocialLinksData } from "@/constants";
import { HeroData } from "@/constants/HeroData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Hero() {
  const { specialty } = HeroData;
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
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
  });

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      id="hero"
      className="flex w-full select-none flex-col items-center justify-center bg-pattern"
    >
      <div className="flex w-full max-w-center flex-col items-center justify-center gap-10 px-2 py-12 md:flex-row md:py-24 lg:gap-20 lg:py-48">
        <div className="z-10 flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-background-1 shadow-inner shadow-black/20 lg:max-w-[400px]">
          {theme === "light" && (
            <div className="group">
              <Image
                src="/portraits/barong_light.png"
                width={1000}
                height={1000}
                alt="Just a guy in barong."
                priority
                className="flex group-hover:hidden"
              />
              <Image
                src="/portraits/barong_light_chill.png"
                width={1000}
                height={1000}
                alt="Just a chill guy in barong."
                priority
                className="hidden transition-all duration-300 ease-in-out group-hover:block"
              />
            </div>
          )}
          {theme === "dark" && (
            <div className="group">
              <Image
                src="/portraits/barong_dark.png"
                width={1000}
                height={1000}
                alt="Just a guy in barong."
                priority
                className="flex group-hover:hidden"
              />
              <Image
                src="/portraits/barong_dark_chill.png"
                width={1000}
                height={1000}
                alt="Just a chill guy in barong."
                priority
                className="hidden transition-all duration-300 ease-in-out group-hover:block"
              />
            </div>
          )}
        </div>

        <div className="z-20 order-2 flex w-fit max-w-[500px] shrink-0 flex-col items-center justify-center gap-4 text-center md:max-w-[360px] md:items-start md:gap-6 md:text-left lg:max-w-[510px]">
          <p>Hey, Im</p>
          <h1 className="split font-serif leading-none text-redberry">
            Andrei
            <br />
            <span className="text-background-2">A</span>
            <span className="text-text">Sager</span>
          </h1>
          <p className="split">
            A Frontend Web Developer based in the Philippines{" "}
            <br className="hidden lg:flex" /> specializing in {specialty}.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:justify-start">
            <div className="flex w-full items-center justify-center gap-2 md:justify-start md:gap-4">
              <CallToActionBtn
                iconOnly={false}
                href={"/resume/resume.pdf"}
                ariaLabel="Open resume in new tab"
                icon={<FaFileDownload size={20} />}
                text="Resume"
              />
            </div>
            <ul className="flex w-fit flex-row justify-between gap-4">
              {SocialLinksData.map(({ id, icon, ariaLabel, url }) => (
                <CallToActionBtn
                  key={id}
                  iconOnly={true}
                  href={url}
                  ariaLabel={ariaLabel}
                  icon={icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
