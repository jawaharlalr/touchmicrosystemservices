/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",       // Primary brand accent
          orangeHover: "#EA580C",  // Darker orange for hover states
          orangeLight: "#FFF7ED",  // Very light orange tint for CTA section
          orangeMuted: "#FED7AA",  // Soft border / badge highlight
          dark: "#111827",         // Primary dark navy/charcoal text
          muted: "#4B5563",        // Secondary descriptive text
          border: "#E5E7EB",       // Crisp subtle light-gray borders
          bg: "#FFFFFF",           // Primary white background
          light: "#F8FAFC",        // Light neutral alternating section background
          black: "#FFFFFF",        // Safe fallback: maps to clean white
          text: "#4B5563",         // Standard readable gray text
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'subtle-orange': '0 4px 14px 0 rgba(249, 115, 22, 0.22)',
      },
      keyframes: {
        scrollLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-loop": "scrollLoop 12s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};