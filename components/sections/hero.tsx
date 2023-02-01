"use client";
import { PlatformLinks } from "@/content";
import { motion } from "framer-motion";
import PlatformLink from "../buttons/platformLink";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";

/* Content Animation */
const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

/* BG Animation */
const bgAnimation = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 0.3,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-32 sm:text-center">
      {/* Pattern */}
      <motion.div
        variants={bgAnimation}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0 bg-hero-pattern bg-1 bg-blend-multiply"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/80 to-white" />
      {/* Content */}
      <PaddingContainer>
        <motion.div
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          <h1 className="text-5xl leading-tight font-gothamMedium sm:mx-auto md:max-w-[18ch]">
            Hey, I’m Batuhan,
            <span className="font-gothamBold"> a Front-end Developer</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-xl leading-normal text-secondaryBlack">
            Transitioned from being a{" "}
            <span className="font-medium">Digital Marketer</span> into a{" "}
            <span className="font-medium">Developer 3 years ago.</span> I love
            combine both worlds{" "}
            <span className="font-medium">
              to build seamless and impactful experiences.
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

export default Hero;
