module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_02": "#000000", "900_7e": "#0000007e" },
        gray: { 300: "#e0e0e0", 800: "#383838", "900_01": "#222325", "900_03": "#1d181d", "900_02": "#151515" },
        blue: { 200: "#8cc0de", 400: "#36a4f4" },
        white: { A700: "#ffffff", A700_19: "#ffffff19", A700_7f: "#ffffff7f" },
        light_blue: { A400: "#00c1ff", A700: "#0075ff" },
      },
      boxShadow: { xs: "4px 4px  1px 0px #0000000c" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #ffffff00,#ffffff1e)",
        gradient1: "linear-gradient(135deg, #6ddcff7e,#7e60f87e)",
        gradient2: "linear-gradient(20deg, #18181c,#0d0d10)",
        gradient3: "linear-gradient(147deg, #14182f,#0b0d18)",
        gradient4: "linear-gradient(181deg, #00000000,#000000ef)",
        gradient5: "linear-gradient(135deg, #6ddcff,#7e60f8)",
      },
      fontFamily: { franie: "Franie", manrope: "Manrope" },
      opacity: { 0.22: 0.22 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
