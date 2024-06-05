const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      customPrimary: "#153448",
      customSecondary: "#DFD0B8",
      regular: "#15F5BA",
      success: " #2FE71A ",
      customGray: "#F0F0F0",
    },
  },
  plugins: [flowbite.plugin(), require("daisyui")],
};
