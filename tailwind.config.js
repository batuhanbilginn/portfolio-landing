/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "section-pattern": "url('/pattern.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      },
      colors: {
        primaryBlack: "#2C2A2A",
        secondaryBlack: "#444343",
        secondaryWhite: "#CCCCCC",
        bgBlack: "#171717",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        gothamBold: ["var(--font-gotham-bold)"],
        gothamMedium: ["var(--font-gotham-medium)"],
        gothamBook: ["var(--font-gotham-book)"],
        gothamLight: ["var(--font-gotham-light)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),

    // ...
  ],
};
