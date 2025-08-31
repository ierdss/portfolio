import { Divider, Heading1 } from "@/components";
import { SkillsData } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Skills() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll Animation
    gsap.set(".skill-card", { y: 50, opacity: 0 });
    ScrollTrigger.batch(".skill-card", {
      onEnter: (batch) =>
        gsap.to(batch, {
          stagger: 0.15,
          opacity: 1,
          y: 0,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
    });

    // Hover Animation
    gsap.utils.toArray(".skill-hover").forEach((el) => {
      const element = el as Element;
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.2,
          ease: "back.out(3)",
          overwrite: true,
        });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          ease: "back.out(3)",
          overwrite: true,
        });
      });
    });
  });
  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center overflow-hidden bg-background-2"
    >
      <div className="flex w-full max-w-center flex-col items-center gap-8 px-2 py-12 text-left md:gap-12 md:px-10 md:py-48">
        <div className="flex w-full max-w-screen-xl">
          <Heading1 text="Skills and Technologies" />
        </div>
        <Divider />

        {/* Skill Grid */}
        <div className="z-20 flex w-full max-w-screen-xl flex-col gap-2 md:gap-10">
          <ul className="z-20 grid w-full grid-cols-3 place-items-center justify-items-center smd:grid-cols-4 md:mr-5 md:grid-cols-5 md:gap-16 lg:grid-cols-7 xl:grid-cols-8">
            {SkillsData.map(({ id, href, icon, name }) => (
              <a
                href={href}
                target="_blank"
                className="skill-card skill-hover flex aspect-square h-24 w-24 flex-col items-center justify-center gap-2"
                key={id}
              >
                {icon}
                <h6 className="text-text">{name}</h6>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
