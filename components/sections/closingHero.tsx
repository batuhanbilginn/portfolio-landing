/* eslint-disable react/no-unescaped-entities */
"use client";
import { PlatformLinks } from "@/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlatformLink from "../buttons/platformLink";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";
const ClosingHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"],
  });

  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const slideIn = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section className="relative py-20 sm:py-32 sm:text-center">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-hero-pattern bg-1 bg-blend-multiply" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/80 to-white" />

      {/* Content */}
      <PaddingContainer>
        <motion.div
          style={{
            opacity: fadeIn,
            y: slideIn,
            scale: scaleUp,
          }}
          ref={containerRef}
          className="relative z-20"
        >
          <h1 className="text-4xl sm:text-5xl font-gothamMedium sm:mx-auto md:max-w-[14ch]">
            Let us meet,
            <span className="font-gothamBold"> if we are a good match!</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-xl leading-normal text-secondaryBlack">
            I'm fully open to communicate, share thoughts and{" "}
            <span className="font-medium">
              consider business related opportunities.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center max-w-sm gap-6 mt-10 sm:mx-auto">
            <PrimaryButton title="Hey" href="mailto:batuhanbilginn@gmail.com">
              👋🏽
            </PrimaryButton>
            {/* Paltform Icons */}
            <div className="flex items-center gap-4">
              {PlatformLinks.map((platform) => {
                return (
                  <PlatformLink
                    key={platform.href}
                    href={platform.href}
                    platform={platform.platform}
                  />
                );
              })}
            </div>
          </div>
          {/* Location Text */}
          <div>
            <p className="mt-6 text-sm font-light">
              Currently{" "}
              <span className="font-medium">located in Istanbul.</span> Open to
              work abroad and remote.
            </p>
          </div>
        </motion.div>
      </PaddingContainer>
    </section>
  );
};
export default ClosingHero;
