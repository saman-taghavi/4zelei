/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    styled: true,
    // themes: true,
    base: true,
    utils: true,
    logs: true,

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
};
