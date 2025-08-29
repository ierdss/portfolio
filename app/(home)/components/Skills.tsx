import { Divider, Heading1 } from "@/components";
import { SkillsData } from "@/constants";

export default function Skills() {
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
            {SkillsData.map(({ href, icon, name }, index) => (
              <a
                href={href}
                target="_blank"
                className="skill-card"
                key={`skill-${index}`}
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
