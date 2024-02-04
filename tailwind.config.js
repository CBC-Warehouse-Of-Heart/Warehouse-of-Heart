/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--ibm-plex-sans-thai-looped-font)", "Inter", "sans-serif"],
      serif: ["var(--lora-font)", "Merriweather", "serif"],
    },
    extend: {
      colors: {
        'brown': '#675D51',
        'gray': '#D9D9D9',
        'woh-white': '#F8F8F7',
        'purple-slider': '#374375',
        'light-purple-slider': '#8793C5',
        'woh-black': '#1E1B20',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        '4-15': "url('/img/4-15.png')",
        '4-16': "url('/img/4-16.png')",
        '4-17-0': "url('/img/4-16.png')",
        '4-17-1': "url('/img/4-17/bg-sticker1.png')",
        '4-17-2': "url('/img/4-17/bg-sticker2.png')",
        '4-17-3': "url('/img/4-17/bg-sticker3.png')",
        '4-17-4': "url('/img/4-17/bg-sticker4.png')",
        '4-17-5': "url('/img/4-17/bg-sticker5.png')",
        '4-17-6': "url('/img/4-17/bg-sticker6.png')",
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
