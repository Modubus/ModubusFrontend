/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      green: "#61DE5E",
      busBlack : "#121212",
      darkGray : "#1A1A1A",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
