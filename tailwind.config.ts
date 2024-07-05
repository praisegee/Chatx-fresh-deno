import { type Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#ff8787",
          200: "#fa5252",
          300: "#cc5de8",
        },
        light: { 100: "#ffe6e6" },
        dark: { 100: "#1f2937" },
      },
    },
  },
} satisfies Config;
