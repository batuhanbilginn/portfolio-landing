import ReadMoreButton from "../buttons/readMoreButton";
import PaddingContainer from "../layouts/paddingContainer";

const Story = () => {
  return (
    <section className="relative text-center bg-bgBlack">
      <PaddingContainer>
        <div className="px-8 py-20 border rounded-lg border-white/80 sm:py-32">
          <h2 className="text-4xl text-white font-gothamMedium">THE STORY</h2>
          {/* Teaser Paragraph */}
          <div className="relative max-w-lg mx-auto mt-6 mb-10 text-secondaryWhite">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bgBlack/80 to-bgBlack/95" />
            <p className="text-lg">
              Transitioned from being a Digital Marketer into a Developer 3
              years ago. I love combine both worlds to build seamless and
              impactful experiences. I love combine both worlds to build
              seamless and impactful experiences.
            </p>
          </div>
          {/* Button */}
          <ReadMoreButton />
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Story;
