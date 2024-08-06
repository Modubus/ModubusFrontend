/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      iPhone12Pro: "390px",
      iPhone14ProMax: "430px",
    },
    colors: {
      lightGreen: "#D2F5D2",
      green: "#61DE5E",
      mutegreen01: "#83B296",
      mutegreen02: "#3B4A41",
      busBlack: "#121212",
      darkGray: "#1A1A1A",
      lightRed: "#FF0001",
      black: "#000",
      white: "#fff",
    },
    fontSize: {
      Bold16: [
        "1rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold18: [
        "1.125rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold21: [
        "1.3125rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold28: [
        "1.75rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold40: [
        "2.5rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold170: [
        "10.625rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Regular12: [
        "0.75rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
      Regular16: [
        "1rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],

      Regular18: [
        "1.125rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
      Regular27: [
        "1.6875rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
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
