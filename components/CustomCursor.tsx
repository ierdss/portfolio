import { useEffect } from "react";

const useCursorMovement = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add("shrink");
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove("shrink");
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effect to all elements
    const hoverableElements = document.querySelectorAll(".hoverable");
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};

export default useCursorMovement;
