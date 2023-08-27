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
      {
        mytheme: {
          primary: "#6ff798",

          secondary: "#d67051",

          accent: "#aefcf3",

          neutral: "#29212c",

          "base-100": "#2a3950",

          info: "#82d8ed",

          success: "#67e9c9",

          warning: "#b17410",

          error: "#f33f51",
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
