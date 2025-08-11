import { SkillData } from "@/constants/SkillDB";
import Divider from "./divider/Divider";
import Heading1 from "./headings/Heading1";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center overflow-hidden bg-background-2"
    >
      <div className="flex w-full max-w-center flex-col gap-12 px-2 py-12 text-left md:gap-20 md:px-40 md:py-48">
        <div className="flex w-full ">
          <Heading1 text="Skills and Technologies" />
        </div>
        <Divider />

        {/* Skill Grid */}
        <div className="z-20 flex w-full flex-col gap-2 md:gap-10">
          <ul className="z-20 mr-3 flex w-full flex-row flex-wrap gap-3 md:mr-5 md:gap-16">
            {SkillData.map(({ href, icon, name }, index) => (
              <div
                className="min-h-52 overflow-hidden rounded-[20px]"
                key={`${index}${name}`}
              >
                <a href={href} target="_blank" className="skill-card">
                  {icon}
                  <h6 className="text-text">{name}</h6>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
