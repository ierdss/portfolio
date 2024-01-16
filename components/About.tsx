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
      className="about flex flex-row w-full justify-center items-center gap-[50px] md:gap-[100px]"
    >
      <div className="about-details">
        <div className="max-w-[250px]">
          <h1 className="sectionOverline">About</h1>
          <h1 className="sectionHeading">Get To Know Me</h1>
        </div>
        <p className="about-description">
          Sample muna. I'm a natural problem solver, eversince I was a kid I
          enjoyed building contraptions with lego, solving puzzles, and
          tinkering my curiosity away. This not only honed my interest in
          building things but it also polished my persistence and what led me to
          pursue this career.
        </p>
        <p className="about-description">
          Sample muna. I'm a natural problem solver, eversince I was a kid I
          enjoyed building contraptions with lego, solving puzzles, and
          tinkering my curiosity away. This not only honed my interest in
          building things but it also polished my persistence and what led me to
          pursue this career.
        </p>
      </div>

      <div className="about-portrait flex items-center justify-center w-[300px] aspect-[16/19] overflow-hidden rounded-xl bg-secondary-red">
        <Image
          src="/hero.jpg"
          width={800}
          height={800}
          alt="Me in red"
          className="w-[400px] aspect-square scale-125"
        />
      </div>

      {/* <div className="flex flex-row">
            <h1>Over Projects Completed</h1>
            <h1>Freelance Commissions</h1>
            <h1>Years of Experience</h1>
          </div> */}
      {/* </motion.div> */}
    </div>
  );
}
