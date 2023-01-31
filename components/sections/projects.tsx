/* eslint-disable react/no-unescaped-entities */
"use client";
import { Tech } from "@/types/generalTypes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FeaturedBox from "../boxes/featuredBox";
import RegularBox from "../boxes/regularBox";
import LogoLink from "../elements/techLogo";
import PaddingContainer from "../layouts/paddingContainer";

const Projects = () => {
  const featuredRef = useRef(null);
  const regularRef = useRef(null);
  const regularRef2 = useRef(null);
  const { scrollYProgress: featuredProgress } = useScroll({
    target: featuredRef,
    offset: ["center end", "end end"],
  });

  const { scrollYProgress: regularProgress } = useScroll({
    target: regularRef,
    offset: ["center end", "end end"],
  });

  const { scrollYProgress: regularProgress2 } = useScroll({
    target: regularRef2,
    offset: ["center end", "end end"],
  });

  const fadeInFeatured = useTransform(featuredProgress, [0, 1], [0, 1]);
  const slideInFeatured = useTransform(featuredProgress, [0, 1], [50, 0]);
  const fadeInRegular = useTransform(regularProgress, [0, 1], [0, 1]);
  const slideInRegular = useTransform(regularProgress, [0, 1], [50, 0]);
  const fadeInRegular2 = useTransform(regularProgress2, [0, 1], [0, 1]);
  const slideInRegular2 = useTransform(regularProgress2, [0, 1], [50, 0]);
  return (
    <section className="relative pt-10 pb-20 sm:pb-32 sm:text-center bg-bgBlack">
      {/* Bacgkround */}
      <Image
        className="z-0 object-cover object-center rotate-180 brightness-125 contrast-200"
        src="/stack-gradient-bg-dark-2.png"
        alt="Hero BG"
        fill
      />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 opacity-20 bg-section-pattern bg-1 bg-blend-multiply" />
      {/* Backgorund Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-bgBlack via-bgBlack/80 to-bgBlack" />
      <PaddingContainer>
        <div className="relative z-30 grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              ref={regularRef}
              style={{
                opacity: fadeInRegular,
                y: slideInRegular,
              }}
            >
              <RegularBox>
                <div className="@container">
                  <h2 className="text-2xl font-gothamMedium">makr.dev</h2>
                  <p className="text-secondaryWhite">
                    Learning and sharing what I learn is my true passion that's
                    why I started creating Youtube videos about web
                    developement, startups and marketing.
                  </p>
                </div>
              </RegularBox>
            </motion.div>
            <motion.div
              ref={regularRef2}
              style={{
                opacity: fadeInRegular2,
                y: slideInRegular2,
              }}
            >
              <RegularBox>
                <h2 className="text-2xl font-gothamMedium">freelance</h2>
                <p className="text-secondaryWhite">
                  I also, continue to work as a freelance developer to feed my
                  creativity and learn new thigns with new challenges.
                </p>
              </RegularBox>
            </motion.div>
          </div>
          <motion.div
            ref={featuredRef}
            style={{
              opacity: fadeInFeatured,
              y: slideInFeatured,
            }}
            className="order-first sm:order-last"
          >
            <FeaturedBox>
              <h2 className="text-2xl sm:text-3xl font-gothamMedium">
                hortiturkey
              </h2>
              <p className="text-secondaryWhite">
                I founded and sold a community and marketplace platform that
                included a Next.js web app reaches{" "}
                <span className="font-medium text-white">
                  100k monthly users
                </span>
                , Supabase real-time chat, a React Native mobile app for client
                communication, and a web version of the mobile app.
              </p>
              {/* Logos */}
              <div className="flex flex-wrap items-center justify-start gap-2 mt-6">
                <LogoLink tech={Tech.Javascript} />

                <LogoLink tech={Tech.React} />
                <LogoLink tech={Tech.Next} />
                <LogoLink tech={Tech.Tailwind} />
                <LogoLink tech={Tech.Supabase} />
                <LogoLink tech={Tech.Directus} />
              </div>
            </FeaturedBox>
          </motion.div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Projects;
