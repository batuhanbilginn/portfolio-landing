/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

interface PopupProps {
  closePopupHandler: () => void;
}

const Popup = ({ closePopupHandler }: PopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Clickable Container */}
      <div onClick={closePopupHandler} className="absolute inset-0" />
      {/* Content Container */}
      <div className="relative w-full max-w-xl px-8 mx-8 border rounded-lg text-secondaryWhite bg-bgBlack border-white/50 ">
        {/* ESC Button */}
        <div className="absolute z-[99] top-4 right-4">
          <button
            onClick={closePopupHandler}
            className="px-2 py-1 text-xs text-white rounded-md bg-white/10"
          >
            ESC
          </button>
        </div>
        {/* Pattern */}
        <div
          style={{
            backgroundSize: "8px",
          }}
          className="absolute inset-0 z-10 rounded-lg opacity-20 bg-section-pattern bg-blend-multiply"
        />
        {/* Backgorund Gradient */}
        <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-b from-bgBlack via-bgBlack/80 to-bgBlack" />
        {/* Text Gradient */}
        {/* Overlay */}
        <div className="absolute inset-0 z-30 rounded-lg pointer-events-none bg-gradient-to-b from-transparent via-bgBlack/10 to-bgBlack/95" />
        {/* Content */}
        <div className="relative z-20 max-h-[60vh] leading-loose pt-6 overflow-y-scroll scrollbar-none pb-24">
          <h2 className="my-8 mb-4 text-2xl font-semibold text-white">
            Started as a Digital Marketer
          </h2>
          <p className="mb-2 leading-loose">
            After graduating{" "}
            <Link
              className="text-white underline underline-offset-4"
              href="https://www.bilgi.edu.tr/en/"
            >
              Istanbul Bilgi University
            </Link>{" "}
            , Interactive Marketing - Master’s Degree, I started my career as a
            Digital Marketer at an Istanbul based agency.
          </p>
          <p className="mb-2 leading-loose">
            Then, I continued my career at{" "}
            <Link
              className="text-white underline underline-offset-4"
              href="https://www.informamarkets.com/en/home.html"
            >
              Informa Markets
            </Link>{" "}
            with responsibilities of building growth strategies for regional B2B
            events on digital channels.
          </p>
          <p className="mb-2 leading-loose">
            After working 5 years at Informa Markets, I quit my job to build my
            startup{" "}
            <Link
              className="text-white underline underline-offset-4"
              href="https://www.hortiturkey.com/en"
            >
              - hortiturkey -
            </Link>{" "}
            when I was a Digital Marketing Manager.
          </p>
          <p>
            I have strong skill set in the marketing area such as building
            strategies and executing them in various channels such as{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              SEO
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              PPC
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              Email Marketing
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              Content Marketing
            </span>{" "}
            etc.
          </p>
          <h2 className="my-8 mb-4 text-2xl font-semibold text-white">
            Interested to No-code Tools
          </h2>
          <p className="mb-2 leading-loose">
            During my digital marketing career, I started to interest with
            no-code tools such as{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Webflow
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Zapier
            </span>{" "}
            and{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Bubble
            </span>
            . Actually, this was the decision that led me in to dreaming
            becoming a developer. I had so many ideas to create and I was always
            finding myself in a situation like needing a developer.
          </p>
          <p>
            With no-code tools, I had started to learn building blocks behind
            how web works. After a couple years, I've learned{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              HTML
            </span>{" "}
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              CSS
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              Database Structures
            </span>
            ,{" "}
            <span className="px-2 py-1 text-sm bg-white rounded-lg text-primaryBlack whitespace-nowrap">
              APIs
            </span>{" "}
            and much more.
          </p>
          <h2 className="my-8 mb-4 text-2xl font-semibold text-white">
            Learning Javascript and React
          </h2>
          <p className="mb-2 leading-loose">
            I was truly amazed by having a power to build something with code.{" "}
            <span className="text-white">
              Learning Javascript was my ‘eureka’ moment.
            </span>
          </p>
          <p className="mb-2 leading-loose">
            When I dig deeper into Javascript, my instinct to build something
            tangible was got bigger and bigger. That was the moment I started to
            learn{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              React
            </span>{" "}
            and{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Next.js
            </span>
            . And, based on the needs of my first startup I had to learn
            back-end as a service solutions like{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Supabase
            </span>{" "}
            and{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Directus
            </span>
            .
          </p>
          <p>
            I feel very confident building applications with React, Next.js and
            Supabase right now.{" "}
            <span className="text-white">
              The application that I built with this stack reached 100k monthly
              user.
            </span>
          </p>
          <h2 className="my-8 mb-4 text-2xl font-semibold text-white">
            Continue to Learn
          </h2>
          <p className="mb-2 leading-loose">
            When I had to maintain relatively large code base than before, I
            felt something missing or wrong with Javascript. Then,{" "}
            <span className="text-white">
              I found the proper solutions and tooling with{" "}
              <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
                Typescript
              </span>
              .
            </span>
          </p>
          <p className="leading-loose">
            One year ago, I switched from Javascript to Typescript and still
            continue to learn. On the other hand, nowadays, I have a strong
            eager to learn AI tools. I’m currently building small apps with{" "}
            <span className="px-2 py-1 text-sm bg-indigo-500 rounded-lg text-indigo-50 whitespace-nowrap">
              Open AI
            </span>
            .
          </p>
          <h2 className="my-8 mb-4 text-2xl font-semibold text-white">
            Sharing My Journey
          </h2>
          <p>
            <span className="text-white">
              One of my passions is sharing what I’ve learned with others in a
              structured and creative way.
            </span>{" "}
            I basically helps my to solidify what I learn and continue. That’s
            why I started a Youtube channel called{" "}
            <Link
              className="text-white underline underline-offset-4"
              href="https://www.youtube.com/@makrdev"
            >
              makr.dev
            </Link>{" "}
            recently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
