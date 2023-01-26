import { PlatformLinks } from "@/content";
import Image from "next/image";
import PlatformLink from "../buttons/platformLink";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-32 sm:text-center">
      {/* Bacgkround */}
      <Image
        className="z-0 object-cover object-center brightness-105 contrast-200"
        src="/hero-gradient-bg-light.png"
        alt="Hero BG"
        fill
      />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 backdrop-blur-lg" />
      {/* Content */}
      <PaddingContainer>
        <div className="relative z-20">
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
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Hero;
