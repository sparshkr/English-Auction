import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
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
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: `${theme("colors.blue.600")} transparent`,
        },
        ".scrollbar::-webkit-scrollbar": {
          width: "4px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: theme("colors.blue.600"),
          borderRadius: "2px",
        },
        ".scrollbar::-webkit-scrollbar-button": {
          display: "none",
        },
      });
    }),
  ],
} satisfies Config;

