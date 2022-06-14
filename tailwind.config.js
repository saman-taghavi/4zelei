/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e56116",

          secondary: "#3B7FFF",

          accent: "#DD415A",

          neutral: "#DFE0DF",

          "base-100": "#2A303C",

          info: "#64BAAA",

          success: "#00A12B",

          warning: "#FBBD23",

          error: "#9D2200",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
