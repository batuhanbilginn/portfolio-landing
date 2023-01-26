"use client";
import { Logo } from "@/types/generalTypes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";

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

const LogoLink = ({ logo }: { logo: Logo }) => {
  // Get Logo Path
  const getLogo = (logo: Logo) => {
    switch (logo) {
      case Logo.Typescript:
        return <TypescriptLogo />;
      case Logo.Javascript:
        return <JavascriptLogo />;
      case Logo.Tailwind:
        return <TailwindLogo />;
      case Logo.Supabase:
        return <SupabaseLogo />;
      case Logo.Next:
        return <NextLogo />;
      case Logo.React:
        return <ReactLogo />;
      case Logo.SWR:
        return <SWRLogo />;
      case Logo.Jotai:
        return <JotaiLogo />;
      case Logo.Framer:
        return <FramerMotionLogo />;
      case Logo.Github:
        return <GithubLogo />;
      case Logo.Vercel:
        return <VercelLogo />;
      case Logo.DigitalOcean:
        return <DigitalOceanLogo />;
      case Logo.GCS:
        return <GCSLogo />;
      case Logo.AWS:
        return <AWSLogo />;
      case Logo.Directus:
        return <DirectusLogo />;
      case Logo.Prisma:
        return <PrismaLogo />;
      case Logo.Postgres:
        return <PostgresLogo />;
      case Logo.MongoDB:
        return <MongoDBLogo />;
      case Logo.OpenAI:
        return <OpenAILogo />;
      case Logo.Pinecone:
        return <PineconeLogo />;
      case Logo.Python:
        return <PythonLogo />;
      default:
        return <TypescriptLogo />;
    }
  };

  return (
    <>
      <ReactTooltip anchorId={logo} />
      <Link
        id={logo}
        href="/"
        target="_blank"
        data-tooltip-content={logo}
        className={`bg-white rounded-lg w-10 h-10 flex shadow-lg p-[6px] hover:pb-4 duration-150 ease-out transition-all ${
          logo === Logo.Typescript || logo === Logo.Javascript
            ? "justify-end items-end"
            : "justify-center items-center"
        }`}
      >
        {getLogo(logo)}
      </Link>
    </>
  );
};

export default LogoLink;
