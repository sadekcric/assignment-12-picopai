/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customPrimary: "#153448",
      customSecondary: "#DFD0B8",
      regular: "#15F5BA",
      success: " #2FE71A ",
      customGray: "#Platinum",
    },
  },
  plugins: [require("daisyui")],
};
