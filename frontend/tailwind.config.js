/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {

    colors: {
      white: "#ffffff",
      primary: {
        200: "",
        300: "",
        400: "",
        DEFAULT: "#030229",
        600: "",
      },
      secondary: {
        200: "",
        300: "",
        400: "",
        DEFAULT: "",
        600: "",
      },
      grey: {
        200: "",
        300: "",
        400: "",
        DEFAULT: "",
        600: "",
      }
    },

    fontSize: {
      "8xl": [
        "26px",
        {
          lineHeight: "33px",
          letterSpacing: "0%",
          fontWeight: "Bold",
        },
      ],
      "7xl": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0px",
          fontWeight: "Semi Bold",
        },
      ],
      "6xl": [
        "14px",
        {
          lineHeight: "22px",
          letterSpacing: "0px",
          fontWeight: "Medium",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
