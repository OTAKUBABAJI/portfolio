/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        neon: {
          cyan: "#00eaff",
          purple: "#b152ff",
        },
        void: "#05060a",
        cyber: "#0f172a",
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 234, 255, 0.4)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "matrix-rain": "matrixRain 6s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.65, filter: "drop-shadow(0 0 5px #00eaff)" },
          "50%": { opacity: 1, filter: "drop-shadow(0 0 15px #b152ff)" },
        },
        matrixRain: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "10%": { opacity: 0.8 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

