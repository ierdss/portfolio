import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Heading1({ text }: HeadingProps) {
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      // Heading Animation
      gsap.registerPlugin(SplitText);
      // split elements with the class "split" into words and characters
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
            stagger: 0.1,
            ease: "expo.out",
            delay: 0.5,
            opacity: 1,
          });
          return split;
        },
      });
    },
    { dependencies: [text] },
  );
  return <h3 className="split text-text">{text}</h3>;
}
