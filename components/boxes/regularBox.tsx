import { OnlyChildrenProps } from "@/types/generalTypes";

const RegularBox = ({ children }: OnlyChildrenProps) => {
  return (
    <div className="w-full p-[2px] rounded-lg shadow-md">
      {/* Content */}
      <div className="bg-[#ffffff03] border-[#969696de] border-2 backdrop-blur-md rounded-lg px-8 py-8 md:py-10 md:px-10 w-full text-left h-full  @container">
        {children}
      </div>
    </div>
  );
};

export default RegularBox;
