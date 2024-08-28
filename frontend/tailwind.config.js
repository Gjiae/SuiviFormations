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
      "H4": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "0px",
          fontWeight: "Bold",
        },
      ],
      "H5": [
        "24px",
        {
          lineHeight: "38px",
          letterSpacing: "0px",
          fontWeight: "Bold",
        },
      ],
      "H6": [
        "22px",
        {
          lineHeight: "28px",
          letterSpacing: "0px",
          fontWeight: "Bold",
        },
      ],
      "16Reg": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0px",
          fontWeight: "Regular",
        },
      ],
      "16Med": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0px",
          fontWeight: "Medium",
        },
      ],
      "14Reg": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0px",
          fontWeight: "Regular",
        },
      ],
      "14Med": [
        "14px",
        {
          lineHeight: "22px",
          letterSpacing: "0px",
          fontWeight: "Medium",
        },
      ],
      "12Reg": [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0px",
          fontWeight: "Regular",
        },
      ],
      "12Med": [
        "12px",
        {
          lineHeight: "15px",
          letterSpacing: "0px",
          fontWeight: "Medium",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
