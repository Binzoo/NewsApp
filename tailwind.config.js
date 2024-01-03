/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-color": "#92C7CF", // Replace with your custom color code
        "custom-2": "#AAD7D9",
      },
    },
  },
  plugins: [],
};
