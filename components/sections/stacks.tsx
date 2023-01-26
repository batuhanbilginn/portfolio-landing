import { Logo } from "@/types/generalTypes";
import Image from "next/image";
import FeaturedBox from "../boxes/featuredBox";
import RegularBox from "../boxes/regularBox";
import LogoLink from "../buttons/logoLink";
import PaddingContainer from "../layouts/paddingContainer";

const Stacks = () => {
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
        <div className="relative z-30 grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
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
                <LogoLink logo={Logo.Javascript} />
                <LogoLink logo={Logo.Typescript} />
                <LogoLink logo={Logo.React} />
                <LogoLink logo={Logo.Next} />
                <LogoLink logo={Logo.Tailwind} />
                <LogoLink logo={Logo.Supabase} />
              </div>
            </FeaturedBox>
          </div>
          <RegularBox>
            <div className="@container">
              <h2 className="text-2xl font-gothamMedium">Love to use</h2>
              <p className="sm:text-sm text-secondaryWhite">
                These are the libraries, technologies and tools that I use a lot
                in projects.
              </p>
              {/* Logos */}
              <div className="flex flex-wrap gap-2 mt-6">
                <LogoLink logo={Logo.SWR} />
                <LogoLink logo={Logo.Jotai} />
                <LogoLink logo={Logo.Framer} />
                <LogoLink logo={Logo.Github} />
                <LogoLink logo={Logo.Vercel} />
                <LogoLink logo={Logo.DigitalOcean} />
                <LogoLink logo={Logo.GCS} />
                <LogoLink logo={Logo.AWS} />
                <LogoLink logo={Logo.Directus} />
                <LogoLink logo={Logo.Prisma} />
                <LogoLink logo={Logo.Postgres} />
                <LogoLink logo={Logo.MongoDB} />
              </div>
            </div>
          </RegularBox>
          <RegularBox>
            <h2 className="text-2xl font-gothamMedium">Learning</h2>
            <p className="sm:text-sm text-secondaryWhite">
              Currently focusing on AI topics such as Embeddings, Semantic
              Search, Generative AI, Classification, Clustering etc.
            </p>
            {/* Logos */}
            <div className="flex flex-wrap gap-2 mt-6">
              <LogoLink logo={Logo.OpenAI} />
              <LogoLink logo={Logo.Pinecone} />
              <LogoLink logo={Logo.GCS} />
              <LogoLink logo={Logo.Python} />
            </div>
          </RegularBox>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Stacks;
