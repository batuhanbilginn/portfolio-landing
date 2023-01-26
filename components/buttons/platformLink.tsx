import { Platform } from "@/types/generalTypes";
import dynamic from "next/dynamic";
import Link from "next/link";

const GithubIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Github),
  { ssr: false }
);
const TwitterIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Twitter),
  { ssr: false }
);
const YoutubeIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Youtube),
  { ssr: false }
);

interface PlatformLinkProps {
  platform: Platform;
  href: string;
}

const renderPlatformIcon = (platform: Platform) => {
  switch (platform) {
    case Platform.Github:
      return <GithubIcon strokeWidth="1" />;
    case Platform.Twitter:
      return <TwitterIcon strokeWidth="1" />;
    case Platform.Youtube:
      return <YoutubeIcon strokeWidth="1" />;
  }
};

const PlatformLink = ({ platform, href }: PlatformLinkProps) => {
  return (
    <Link
      className="bg-white shadow-lg rounded-md w-11 h-11 hover:pb-1 duration-150 transition-all ease-out flex items-center justify-center"
      href={href}
    >
      {renderPlatformIcon(platform)}
    </Link>
  );
};

export default PlatformLink;
