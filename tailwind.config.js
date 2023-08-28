/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "synthwave", // first one will be the default theme
      {
        mytheme: {
          primary: "#EF476F",

          secondary: "#d67051",

          accent: "#aefcf3",

          neutral: "#29212c",

          "base-100": "#073B4C",

          info: "#82d8ed",

          success: "#EF476F",

          warning: "#b17410",

          error: "#EF476F",
        },
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
