import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["15px", "24px"],
    },
    colors: {
      offWhite: "#F5F5F8",
      blue: "#506BCA",
      tan: "#D2AD81",
      darkBlue: "#1B264F",
      gray: "#353844",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
