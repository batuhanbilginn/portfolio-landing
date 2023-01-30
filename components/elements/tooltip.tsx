import React from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative z-[100] group">
      {/* Tooltip */}
      <div className="absolute cursor-default hidden sm:block z-[100] left-1/2 -translate-x-1/2 transform translate-y-2 group-hover:translate-y-0 text-sm invisible px-2 py-1 transition-all duration-100 ease-out rounded-md opacity-0 -top-10 group-hover:visible group-hover:opacity-100 bg-bgBlack whitespace-nowrap">
        {content}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
