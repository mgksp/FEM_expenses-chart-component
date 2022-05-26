module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        15: "0.9375rem",
      },

      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },

      colors: {
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",

        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
