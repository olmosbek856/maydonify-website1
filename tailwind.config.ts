import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maydon: {
          green:   "#00A86B",
          dark:    "#0D1117",
          surface: "#111827",
          muted:   "#6B7280",
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
