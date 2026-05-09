import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1a1a1a", soft: "#2a2a2a" },
        muted: "#7a7a7a",
        line: "#ececec",
        paper: "#ffffff",
        offwhite: "#fafafa",
        accent: { DEFAULT: "#c8a45a", deep: "#a08039", soft: "#e8d6a8" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1200px",
        narrow: "900px",
      },
      keyframes: {
        drop: {
          "0%, 100%": { transform: "scaleY(1)", transformOrigin: "top" },
          "50%": { transform: "scaleY(0.4)", transformOrigin: "top" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        drop: "drop 2s ease-in-out infinite",
        ripple: "ripple 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
