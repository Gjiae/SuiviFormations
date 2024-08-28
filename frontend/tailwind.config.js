/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {

    colors: {
      white: "#ffffff",
      dark: "#1C2434",
      darkgray: "#8A99AF",
      stroke: "#E2E8F0",
      medgray: "#DEE4EE",
      gray: "#EFF4FB",
      primary: "#3C50E0",
      secondary: "#80CAEE",
      textcolor: "#64748B",
      green: "#10B981",
      yellow: "#F0950C",
      red: "#FB5454",
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
