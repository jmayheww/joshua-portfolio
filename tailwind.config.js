/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontSize: {
        "6xl": "6rem",
      },
      lineHeight: {
        tighter: "5.1rem",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "fira-mono": ["Fira Mono", "monospace"],
      },
      screens: {
        nm: "600px",
      },
      animation: {
        dropAndBounce: "dropAndBounce 1s forwards",
        pulse: "pulse 1s infinite",
      },
    },
  },
  daisyui: {
    themes: [
      "synthwave", // first one will be the default theme
      {
        // mytheme: {
        //   primary: "#EF476F",
        //   secondary: "#d67051",
        //   accent: "#aefcf3",
        //   neutral: "#29212c",
        //   "base-100": "#073B4C",
        //   info: "#82d8ed",
        //   success: "#EF476F",
        //   warning: "#b17410",
        //   error: "#EF476F",
        // },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
