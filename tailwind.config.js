module.exports = {
  mode: "jit",
  purge: ["./public/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        leafBackground: "url(assets/background.jpg)",
        comingSoon: "url(assets/comingsoon.svg)",
      },
      colors: {
        red_10: "#EEDDDD",
        red_100: "#883232",
        broGreen_70: "#C2BF8F",
        broGreen_80: "#878532",
        broGreen_90: "#4F6028",
        broGreen_100: "#173B1F",
        green_50: " #EEF4E4",
        green_60: "#E0EEDD",
        green_65: "#B4D4C4",
        green_70: "#89BBAC",
        green_75: "#5EA193",
        green_80: "#32887B",
        green_90: "#327F6E",
        green_100: "#337760",
        green_105: "#265948",
        green_110: "#193B30",
        orange_70: "#F6DFA3",
        orange_80: "#F0C55A",
        orange_90: "#EEB252",
        orange_100: "#EB9F4B",
        gray: "#8C8C8C",
        whiteish: "#FCFAEB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
