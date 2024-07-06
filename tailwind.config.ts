import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        small: "470px",
        medium: "730px",
        desktop: "1365px",
        largesceen: "1700px",
        fourk: "2400px",
      },
      colors: {
        primary: "#313F38",
        secondary: "#FCD043",
        white: {
          DEFAULT: "#FFF",
          100: "#FFFCF6",
        },
        error: "#B03E3E",
        attention: "#DC9B39",
        success: "#2A5B46",
      },
    },
  },
  plugins: [],
};
export default config;
