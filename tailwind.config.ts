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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        modal: "calc(100% - 1.5rem)"
      },
      maxHeight: {
        boxChat: "calc(100vh - 8.3rem)"
      }
    },
  },
  plugins: [],
};
export default config;
