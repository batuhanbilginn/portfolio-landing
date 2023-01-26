/* eslint-disable react/no-unescaped-entities */
import { Logo } from "@/types/generalTypes";
import Image from "next/image";
import FeaturedBox from "../boxes/featuredBox";
import RegularBox from "../boxes/regularBox";
import LogoLink from "../buttons/logoLink";
import PaddingContainer from "../layouts/paddingContainer";

const Projects = () => {
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

      <div className="absolute inset-0 z-10 opacity-20 bg-section-pattern bg-1 bg-blend-multiply"></div>
      {/* Backgorund Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-bgBlack via-bgBlack/80 to-bgBlack"></div>
      <PaddingContainer>
        <div className="relative z-30 grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-8">
            <RegularBox>
              <div className="@container">
                <h2 className="text-2xl font-gothamMedium">makr.dev</h2>
                <p className="text-secondaryWhite">
                  Learning and sharing what I learn is my true passion that's
                  why I started creating Youtube videos about web developemment,
                  startups and marketing.
                </p>
              </div>
            </RegularBox>
            <RegularBox>
              <h2 className="text-2xl font-gothamMedium">freelance</h2>
              <p className="text-secondaryWhite">
                I also, continue to work as a freelance developer to feed my
                creativity and stabilise my income after I sold my startup.
              </p>
            </RegularBox>
          </div>
          <div className="order-first sm:order-last">
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
                <LogoLink logo={Logo.Javascript} />

                <LogoLink logo={Logo.React} />
                <LogoLink logo={Logo.Next} />
                <LogoLink logo={Logo.Tailwind} />
                <LogoLink logo={Logo.Supabase} />
                <LogoLink logo={Logo.Directus} />
              </div>
            </FeaturedBox>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Projects;
