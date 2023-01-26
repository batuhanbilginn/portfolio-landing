import Link from "next/link";
import PaddingContainer from "../layouts/paddingContainer";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-white bg-bgBlack">
      <PaddingContainer>
        {/* Container */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-secondaryWhite">
          <div>
            Designed in <span className="text-white">Figma</span> and developed
            with <span className="text-white">Next.js</span>,
            <span className="text-white"> Tailwind </span> and{" "}
            <span className="text-white">Typescript</span> by Batuhan Bilgin.
          </div>
          <div>
            You like it?{" "}
            <Link target="_blank" className="text-white" href="/github-link">
              Clone this website from Github
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
