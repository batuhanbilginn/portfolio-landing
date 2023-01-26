/* eslint-disable react/no-unescaped-entities */
import { PlatformLinks } from "@/content";
import Image from "next/image";
import PlatformLink from "../buttons/platformLink";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";
const ClosingHero = () => {
  return (
    <section className="relative py-20 sm:py-32 sm:text-center">
      {/* Bacgkround */}
      <Image
        className="z-0 object-cover object-center rotate-180 brightness-105 contrast-200"
        src="/hero-gradient-bg-light.png"
        alt="Hero BG"
        fill
      />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 backdrop-blur-lg" />
      {/* Content */}
      <PaddingContainer>
        <div className="relative z-20">
          <h1 className="text-5xl font-gothamMedium sm:mx-auto md:max-w-[14ch]">
            Let us meet,
            <span className="font-gothamBold"> if we are a good match!</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-xl leading-normal text-secondaryBlack">
            I'm fully open to communicate, share thoughts and{" "}
            <span className="font-medium">
              consider business related opportunities at the moment.
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
export default ClosingHero;
