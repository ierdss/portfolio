/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          1: "rgb(var(--color-background) / <alpha-value>)",
          2: "rgb(var(--color-background) / 0.95)",
        },
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        accent: {
          1: "rgb(var(--color-accent1) / <alpha-value>)",
          2: "rgb(var(--color-accent2) / <alpha-value>)",
          3: "rgb(var(--color-accent3) / <alpha-value>)",
        },
        glass: "rgb(var(--color-glass) / 0.7)",

        redberry: "#B40041",
        blackberry: "#252131",
        gray: "#F4F5F8",
        gray2: "#D9D9D9",
        blackglass: "#191621",

        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        "gray-1": "#3d3d4e",
        "black-1": "#212121",
        "primary-purple": "#9747FF",
        "gray-2": "#D9D9D9",

        "secondary-red": "#B40041",
        "accent-pink": "#F24471",

        // Technology Card Colors Alphabetical
        css: "#2965f1",
        gmail: "#BB001B",
        github: "#171515",
        graphql: "#e60496",
        html: "#f06529",
        javascript: "#ecd120",
        linkedin: "#0072b1",
        next: "#171515",
        obsidian: "#8B5CF6",
        react: "#61dbfb",
        sass: "#cc6699",
        tailwind: "#67e8f9",
        typescript: "#007acc",
      },
      aspectRatio: {
        "3/2": "3/2",
        "16/11": "16/11",
        "16/19": "16/19",
      },
      animation: {
        "mist-1": "grow-shrink 5s ease-in-out infinite spin 1s linear infinite",
        "mist-2": "grow-shrink 9s ease-in-out infinite spin 1s linear infinite",
        "mist-3": "grow-shrink 7s ease-in-out infinite spin 1s linear infinite",
      },
      keyframes: {
        "grow-shrink": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: " rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
