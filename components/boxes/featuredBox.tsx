import { OnlyChildrenProps } from "@/types/generalTypes";

const FeaturedBox = ({ children }: OnlyChildrenProps) => {
  return (
    <div className="flex flex-col justify-center w-full h-full px-8 py-12 text-left border rounded-lg shadow-md backdrop-blur-md bg-bgBlack/20 border-white/80 md:py-20 md:px-12">
      {children}
    </div>
  );
};

export default FeaturedBox;
