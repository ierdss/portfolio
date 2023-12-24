import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type TechListProps = {
  technologies: Array<TechProps>;
};

type TechProps = {
  id: number;
  title: string;
  group: string;
  icon: ReactNode;
};

const TechGroup = ({ technologies }: TechListProps) => {
  return (
    <motion.ul className="grid grid-cols-4 gap-4 w-full mt-8">
      {technologies.map(({ id, icon }) => (
        <li
          key={id}
          className="flex justify-center items-center w-full aspect-square rounded-xl shadow-inner shadow-slate-400 hover:shadow-lg scale-95 hover:scale-100"
        >
          {icon}
        </li>
      ))}
    </motion.ul>
  );
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="about"
      className="sectionPadding w-full text-center flex justify-center items-center md:text-left flex-col md:flex-row md:min-h-[500px] relative overflow-hidden  max-w-screen-xl"
    >
      <div className="flex flex-row flex-wrap w-full justify-center items-center gap-[50px] md:gap-[100px]">
        <div
          ref={ref}
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="hover:-translate-y-2 group transition-all duration-500"
        >
          <div className="portraitCard">
            <div className="portraitCard__back">Back</div>
            <div className="portraitCard__front">
              <Image
                src="/MeRed.png"
                width={300}
                height={300}
                alt="Me in red"
                className=""
              />
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="flex flex-col gap-8 w-[90%] lg:w-[45%] "
        >
          <div className="flex flex-col gap-4 w-full ">
            <div className="w-full">
              <h1 className="sectionOverline">About</h1>
              <h1 className="sectionHeading">Get To Know Me :)</h1>
            </div>
            <p className="sectionLeading">
              Sample muna. I'm a natural problem solver, eversince I was a kid I
              enjoyed building contraptions with lego, solving puzzles, and
              tinkering my curiosity away. This not only honed my interest in
              building things but it also polished my persistence and what led
              me to pursue this career.
            </p>
            <p className="sectionLeading">
              Sample muna. I'm a natural problem solver, eversince I was a kid I
              enjoyed building contraptions with lego, solving puzzles, and
              tinkering my curiosity away. This not only honed my interest in
              building things but it also polished my persistence and what led
              me to pursue this career.
            </p>
          </div>
          <div className="flex flex-row">
            <h1>Projects Completed</h1>
            <h1>Freelance Commisions</h1>
            <h1>Years of Experience</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
