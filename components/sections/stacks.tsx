"use client";
import { Tech } from "@/types/generalTypes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FeaturedBox from "../boxes/featuredBox";
import RegularBox from "../boxes/regularBox";
import LogoLink from "../elements/techLogo";
import PaddingContainer from "../layouts/paddingContainer";

const Stacks = () => {
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

  // Initial Animation
  const initialAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-10 sm:text-center bg-bgBlack">
      {/* Bacgkround */}
      <Image
        className="z-0 object-cover object-center brightness-125 contrast-200"
        src="/stack-gradient-bg-dark-2.png"
        alt="Hero BG"
        fill
      />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 opacity-20 bg-section-pattern bg-1 bg-blend-multiply"></div>
      {/* Backgorund Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-bgBlack via-bgBlack/80 to-bgBlack"></div>
      <PaddingContainer>
        <motion.div
          variants={initialAnimation}
          initial="hidden"
          animate="visible"
          className="relative z-30 grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            ref={featuredRef}
            style={{
              opacity: fadeInFeatured,
              y: slideInFeatured,
            }}
            className="sm:col-span-2"
          >
            <FeaturedBox>
              <h2 className="text-2xl sm:text-3xl font-gothamMedium">
                Current Stack
              </h2>
              <p className="text-secondaryWhite">
                I’ve been building apps with{" "}
                <span className="font-medium text-white">React</span> for 3
                years. <span className="font-medium text-white">Next.js</span>{" "}
                is my go-to framework when I start a new project. And, I mostly
                write my code in{" "}
                <span className="font-medium text-white">TypeScript</span> with{" "}
                <span className="font-medium text-white">Tailwind CSS</span> for
                styling.
              </p>
              {/* Logos */}
              <div className="flex flex-wrap items-center justify-start gap-2 mt-6">
                <LogoLink tech={Tech.Javascript} />
                <LogoLink tech={Tech.Typescript} />
                <LogoLink tech={Tech.React} />
                <LogoLink tech={Tech.Next} />
                <LogoLink tech={Tech.Tailwind} />
                <LogoLink tech={Tech.Supabase} />
              </div>
            </FeaturedBox>
          </motion.div>
          <motion.div
            ref={regularRef}
            style={{
              opacity: fadeInRegular,
              y: slideInRegular,
            }}
            className="h-full"
          >
            <RegularBox>
              <div className="@container">
                <h2 className="text-2xl font-gothamMedium">Love to use</h2>
                <p className="sm:text-sm text-secondaryWhite">
                  These are the libraries, technologies and tools that I use a
                  lot in projects.
                </p>
                {/* Logos */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <LogoLink tech={Tech.SWR} />
                  <LogoLink tech={Tech.Jotai} />
                  <LogoLink tech={Tech.Framer} />
                  <LogoLink tech={Tech.Github} />
                  <LogoLink tech={Tech.AWS} />
                  <LogoLink tech={Tech.DigitalOcean} />
                  <LogoLink tech={Tech.GCS} />
                  <LogoLink tech={Tech.Vercel} />
                  <LogoLink tech={Tech.Directus} />
                  <LogoLink tech={Tech.Prisma} />
                  <LogoLink tech={Tech.Postgres} />
                  <LogoLink tech={Tech.MongoDB} />
                </div>
              </div>
            </RegularBox>
          </motion.div>
          <motion.div
            ref={regularRef2}
            style={{
              opacity: fadeInRegular2,
              y: slideInRegular2,
            }}
            className="h-full"
          >
            <RegularBox>
              <h2 className="text-2xl font-gothamMedium">Learning</h2>
              <p className="sm:text-sm text-secondaryWhite">
                Currently focusing on AI topics such as Embeddings, Semantic
                Search, Generative AI, Classification, Clustering etc.
              </p>
              {/* Logos */}
              <div className="flex flex-wrap gap-2 mt-6">
                <LogoLink tech={Tech.OpenAI} />
                <LogoLink tech={Tech.Pinecone} />
                <LogoLink tech={Tech.GCS} />
                <LogoLink tech={Tech.Python} />
              </div>
            </RegularBox>
          </motion.div>
        </motion.div>
      </PaddingContainer>
    </section>
  );
};

export default Stacks;
