/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Enabled src by default as most React apps use it
  ],
  theme: {
    extend: {
      // 1. DEFINING YOUR BRAND PALETTE
      colors: {
        brand: {
          black: "#0A0A0A",    // The deep background color
          dark: "#171717",     // Card / Section background
          border: "#262626",   // Subtle borders
          orange: "#FF4C00",   // Your Main Accent Color
          text: "#A3A3A3",     // Standard readable gray text
        },
      },
      // 2. TECH FONTS (Ensure these are imported in your CSS or HTML)
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      // 3. ANIMATIONS
      keyframes: {
        scrollLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // A smooth fade-in for sections
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // A "breathing" glow for status lights or buttons
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 76, 0, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 76, 0, 0.6)" },
        },
        // Scan line effect
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        // Pulse glow for text
        textGlow: {
          "0%, 100%": { textShadow: "0 0 8px rgba(255, 76, 0, 0.2)" },
          "50%": { textShadow: "0 0 20px rgba(255, 76, 0, 0.7), 0 0 30px rgba(255, 76, 0, 0.4)" }
        }
      },
      animation: {
        "scroll-loop": "scrollLoop 20s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "glow": "glowPulse 3s infinite",
        "scan": "scanLine 3s linear infinite",
        "text-pulse": "textGlow 2.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};