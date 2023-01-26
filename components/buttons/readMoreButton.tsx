"use client";

const ReadMoreButton = () => {
  return (
    <button
      style={{
        backgroundImage:
          "radial-gradient(100% 1338.07% at 4.85% 0%, #8B74F6 0%, #B4E5DC 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient 5s ease-out infinite",
      }}
      className=" p-[2px] rounded-lg shadow-md relative"
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full gap-2 px-10 py-2 text-sm text-white transition-colors duration-100 ease-out rounded-lg hover:bg-bgBlack/30 bg-bgBlack/90 backdrop-blur-md">
        Read More
      </div>
    </button>
  );
};

export default ReadMoreButton;
