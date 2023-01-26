import { OnlyChildrenProps } from "@/types/generalTypes";

const PaddingContainer = ({ children }: OnlyChildrenProps) => {
  return <div className="mx-auto w-full max-w-7xl px-8">{children}</div>;
};

export default PaddingContainer;
