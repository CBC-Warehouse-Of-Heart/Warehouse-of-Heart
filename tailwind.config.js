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
      postcard: ["var(--nothing-you-could-do-font)", "Merriweather", "serif"],
    },
    extend: {
      colors: {
        brown: "#675D51",
        gray: "#D9D9D9",
        "woh-white": "#F8F8F7",
        "pink-brown-slider": "#AA5656",
        "light-pink-brown-slider": "#B78481",
        "woh-black": "#1E1B20",
        "pink-brown": "#B78181",
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
      backgroundImage: {
        "white-radial": "url('/img/white-radial.png')",
        "value-box": "url('/img/value_box.png')",
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
      screens: {
        normal: { raw: "(min-height: 800px)" },
        tall: { raw: "(min-height: 820px)" },
      },
      backgroundImage: {
        "1-6": "url('/img/1-6.gif')",
        "1-5": "url('/img/1-5.png')",
        "4-17-0": "url('/img/4-16.png')",
        "4-17-1": "url('/img/4-17/bg-sticker1.webp')",
        "4-17-2": "url('/img/4-17/bg-sticker2.webp')",
        "4-17-3": "url('/img/4-17/bg-sticker3.webp')",
        "4-17-4": "url('/img/4-17/bg-sticker4.webp')",
        "4-17-5": "url('/img/4-17/bg-sticker5.webp')",
        "4-17-6": "url('/img/4-17/bg-sticker6.webp')",
        "feedback-submitted": "url('/img/feedback-submitted.webp')",
        feedback: "url('/img/feedback.webp')",
        "white-radial": "url('/img/white-radial.webp')",
        "value-box": "url('/img/value-box.webp')",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
