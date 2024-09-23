module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('./images/backdrop.jpg')",
      },
    },
  },
  plugins: [],
};
