import { Tech } from "@/types/generalTypes";
import dynamic from "next/dynamic";
import Tooltip from "./tooltip";

const TypescriptLogo = dynamic(() => import("../logo/typescript"));
const JavascriptLogo = dynamic(() => import("../logo/javascript"));
const TailwindLogo = dynamic(() => import("../logo/tailwind"));
const SupabaseLogo = dynamic(() => import("../logo/supabase"));
const NextLogo = dynamic(() => import("../logo/next"));
const ReactLogo = dynamic(() => import("../logo/react"));
const SWRLogo = dynamic(() => import("../logo/swr"));
const JotaiLogo = dynamic(() => import("../logo/jotai"));
const FramerMotionLogo = dynamic(() => import("../logo/framer"));
const GithubLogo = dynamic(() => import("../logo/github"));
const VercelLogo = dynamic(() => import("../logo/vercel"));
const DigitalOceanLogo = dynamic(() => import("../logo/digitalOcean"));
const GCSLogo = dynamic(() => import("../logo/gcs"));
const AWSLogo = dynamic(() => import("../logo/aws"));
const DirectusLogo = dynamic(() => import("../logo/directus"));
const PrismaLogo = dynamic(() => import("../logo/prisma"));
const PostgresLogo = dynamic(() => import("../logo/postgres"));
const MongoDBLogo = dynamic(() => import("../logo/mongo"));
const OpenAILogo = dynamic(() => import("../logo/openAI"));
const PineconeLogo = dynamic(() => import("../logo/pinecone"));
const PythonLogo = dynamic(() => import("../logo/python"));

const TechLogo = ({ tech }: { tech: Tech }) => {
  // Render logo
  const renderLogo = (tech: Tech) => {
    switch (tech) {
      case Tech.Typescript:
        return <TypescriptLogo />;
      case Tech.Javascript:
        return <JavascriptLogo />;
      case Tech.Tailwind:
        return <TailwindLogo />;
      case Tech.Supabase:
        return <SupabaseLogo />;
      case Tech.Next:
        return <NextLogo />;
      case Tech.React:
        return <ReactLogo />;
      case Tech.SWR:
        return <SWRLogo />;
      case Tech.Jotai:
        return <JotaiLogo />;
      case Tech.Framer:
        return <FramerMotionLogo />;
      case Tech.Github:
        return <GithubLogo />;
      case Tech.Vercel:
        return <VercelLogo />;
      case Tech.DigitalOcean:
        return <DigitalOceanLogo />;
      case Tech.GCS:
        return <GCSLogo />;
      case Tech.AWS:
        return <AWSLogo />;
      case Tech.Directus:
        return <DirectusLogo />;
      case Tech.Prisma:
        return <PrismaLogo />;
      case Tech.Postgres:
        return <PostgresLogo />;
      case Tech.MongoDB:
        return <MongoDBLogo />;
      case Tech.OpenAI:
        return <OpenAILogo />;
      case Tech.Pinecone:
        return <PineconeLogo />;
      case Tech.Python:
        return <PythonLogo />;
      default:
        return <TypescriptLogo />;
    }
  };

  return (
    <Tooltip content={tech}>
      <div
        id={tech}
        className={`bg-white relative z-10 cursor-pointer rounded-lg w-10 h-10 flex  shadow-lg p-[6px] hover:pb-4 duration-150 ease-out transition-all ${
          tech === Tech.Typescript || tech === Tech.Javascript
            ? "justify-end items-end"
            : "justify-center items-center"
        }`}
      >
        {renderLogo(tech)}
      </div>
    </Tooltip>
  );
};

export default TechLogo;
