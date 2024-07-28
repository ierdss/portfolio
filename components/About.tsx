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
      <div className="about-portrait">
        <Image
          src="/1styear.jpg"
          width={800}
          height={800}
          alt="Me in red"
          className="about-portrait__image"
        />
      </div>

      <div className="about-details">
        <div className="max-w-[250px]">
          <h1 className="sectionOverline">About</h1>
          <h1 className="sectionHeading">Get To Know Me</h1>
        </div>
        <p className="about-description">
          Hey there! I'm Andrei Sager, a software developer residing in the
          Philippines. I am a student of STI College Sta. Mesa who is currently
          finishing his Bachelors of Science in Computer Science (BSCS) Degree.
        </p>
        <p className="about-description">
          During my free time I am a self-taught learner exploring deeper into
          topics outside the scope of the college curriculum diving into
          practice and creating my personal projects. I'm big on keeping my code
          clean with methodologies like BEM and am always up for learning
          something new.
        </p>
        <p className="about-description">
          People often describe me as a motivated and organized person. I like
          setting goals for projects and making sure I hit them. I believe in
          bringing out the best results for the companies I work with, all while
          keeping things dynamic and enjoyable.
        </p>
        <p className="about-description">
          If you ever want to chat about coding, challenges, or just share some
          cool ideas, I'm all ears! Let's keep making things better together.
        </p>
        {/* <div className="flex flex-row">
            <h1>Over Projects Completed</h1>
            <h1>Freelance Commissions</h1>
            <h1>Years of Experience</h1>
          </div> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
}
