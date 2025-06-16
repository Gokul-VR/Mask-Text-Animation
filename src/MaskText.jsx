import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);
import "./MaskText.css";
export default function MaskText({
  children,
  animateOnScroll = true,
  delay = 0,
}) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useEffect(() => {
    // Initialize refs
    elementRef.current = [];
    splitRef.current = [];
    lines.current = [];

    // Set initial state to hidden
    if (containerRef.current) {
      gsap.set(containerRef.current, { visibility: "hidden" });
    }
    // Wait for fonts to load and ensure container exists
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        if (!element) return;

        elementRef.current.push(element);
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        if (split) {
          splitRef.current.push(split);
          const computedStyles = window.getComputedStyle(element);
          const textIndent = computedStyles.textIndent;

          if (
            textIndent &&
            textIndent === "0px" &&
            split.lines &&
            split.lines.length > 0
          ) {
            split.lines[0].style.paddingLeft = textIndent;
            element.style.textIndent = "0";
          }

          if (split.lines) {
            lines.current.push(...split.lines);
          }
        }
      });

      if (lines.current.length > 0) {
        // Make container visible before animation
        gsap.set(containerRef.current, { visibility: "visible" });
        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1.5,
          ease: "power4.inOut",
          stagger: 0.1,
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      }
    });

    return () => {
      // Cleanup
      if (splitRef.current && splitRef.current.length > 0) {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      }
      // Reset refs
      elementRef.current = [];
      splitRef.current = [];
      lines.current = [];
    };
  }, [animateOnScroll, delay]);

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
