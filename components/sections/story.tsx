"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ReadMoreButton from "../buttons/readMoreButton";
import PaddingContainer from "../layouts/paddingContainer";

interface StoryProps {
  openPopupHandler: () => void;
}

const Story = ({ openPopupHandler }: StoryProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"],
  });

  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const slideIn = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section className="relative text-center bg-bgBlack">
      <PaddingContainer>
        <motion.div
          ref={containerRef}
          style={{
            opacity: fadeIn,
            y: slideIn,
            scale: scaleUp,
          }}
          className="px-8 py-20 border rounded-lg border-white/80 sm:py-32"
        >
          <h2 className="text-4xl text-white font-gothamMedium">THE STORY</h2>
          {/* Teaser Paragraph */}
          <div className="relative max-w-lg mx-auto mt-6 mb-10 text-secondaryWhite">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bgBlack/80 to-bgBlack/95" />
            <p className="text-lg">
              I was truly amazed by having a power to build something with code.
              Learning Javascript was my ‘eureka’ moment. When I dig deeper into
              Javascript, my instinct to build something tangible was got bigger
              and bigger.
            </p>
          </div>
          {/* Button */}
          <ReadMoreButton openPopupHandler={openPopupHandler} />
        </motion.div>
      </PaddingContainer>
    </section>
  );
};

export default Story;
