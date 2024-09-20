/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js}"],
  theme: {
    fontFamily: {
      body: ['"Montserrat", sans-serif'],
      open: ['"Open Sans", sans-serif'],
    },
    extend: {
      keyframes: {
        moveEl: {
          "100%": {
            transform:
              "translateX(calc(var(--item-possition) * 20px)) translateY(calc(var(--item-possitionY) * 15px))",
          },
        },
        increaseWidth: {
          "100%": {
            width: "324px",
          },
        },
        increaseFontSize: {
          "100%": {
            fontSize: "1.375rem",
          },
        },
        zoom: {
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        moveEl: "moveEl 1s linear",
        increaseWidth: "increaseWidth 1s linear",
        increaseFontSize: "increaseFontSize 1s linear",
        zoom: "zoom 1s linear",
      },
    },
  },
  plugins: [],
};

// Move to targated possition
// Increase targated width
// Increase font size
