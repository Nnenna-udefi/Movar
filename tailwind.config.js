module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      backgroundImage: {
        hero: "url('./images/backdrop.jpg')",
      },
    },
  },
  plugins: [],
};
