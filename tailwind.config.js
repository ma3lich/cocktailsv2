/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        custom: "#e6c2bf",
      },
      borderWidth: {
        custom: "3px",
      },
      aspectRatio: {
        "1/1": "1 / 1",
      },
      transitionProperty: {
        all: "all",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideFromTop: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideFromTop: "slideFromTop 0.4s ease-out forwards",
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
