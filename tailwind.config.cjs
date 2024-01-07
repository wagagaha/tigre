/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
