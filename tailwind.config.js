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
        // "se": "380px"
      },
    },
    fontFamily: {
      sans: ["var(--ibm-plex-sans-thai-looped-font)", "Inter", "sans-serif"],
      serif: ["var(--lora-font)", "Merriweather", "serif"],
      cursive: ["var(--nothing-you-could-do-font)", "Nothing You Could Do", "cursive"]
    },
    extend: {
      colors: {
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
        '4-1': "url('/img/4-1.png')",
        '4-2': "url('/img/4-2.png')",
        '4-3': "url('/img/4-3.png')",
        '4-5': "url('/img/4-5.png')",
        'book-1': "url('/img/book-1.png')",
        'book-2': "url('/img/book-2.png')",
        'book-3': "url('/img/book-3.png')",
        'book-4': "url('/img/book-4.png')",
        'white-radial': "url('/img/white-radial.png')"
      }
    },
    colors: {
      'white': '#F8F8F7',
      'secondary-white': "#F3F3F0",
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
