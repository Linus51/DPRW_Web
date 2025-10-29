import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#6B7B59",
        oliveDark: "#4F5C3F",
        sand: "#D1B77B",
        steel: "#9BA3AE",
        coal: "#0F1113"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
