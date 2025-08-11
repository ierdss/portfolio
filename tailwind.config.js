/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-pt-serif)"],
      },
      colors: {
        background: {
          1: "rgb(var(--background))",
          2: "rgba(var(--background) / 0.5)",
        },
        heading: "rgb(var(--heading))",
        text: "rgb(var(--text))",
        primary: "rgb(var(--primary))",
        accent: {
          1: "rgb(var(--accent-1))",
          2: "rgb(var(--accent-2))",
          3: "rgb(var(--accent-3))",
        },
        glass: {
          1: "rgba(var(--glass-1) / 0.7)",
          2: "rgba(var(--glass-2) / 0.7)",
        },

        redberry: "#B40041",
        blackberry: "#252131",
        gray: "#F4F5F8",
        blackglass: "#191621",

        // "nav-border": "#EBEAEA",
        // "light-white": "#FAFAFB",
        // "light-white-100": "#F1F4F5",
        // "light-white-200": "#d7d7d7",
        // "light-white-300": "#F3F3F4",
        // "light-white-400": "#E2E5F1",
        // "light-white-500": "#E4E4E4",
        // "gray-1": "#3d3d4e",
        // "black-1": "#212121",
        // "primary-purple": "#9747FF",
        // "gray-2": "#D9D9D9",

        // "secondary-red": "#B40041",
        // "accent-pink": "#F24471",

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
        tailwind: "#67e8f9",
        typescript: "#007acc",
      },
      maxWidth: {
        center: "1980px",
      },
      aspectRatio: {
        "3/2": "3/2",
        "16/10": "16/9.8",
        "16/11": "16/11",
        "16/19": "16/19",
      },
      animation: {
        "grow-shrink-1": "grow-shrink 9s ease-in-out infinite",
        "grow-shrink-2": "grow-shrink 13s ease-in-out infinite",
        "grow-shrink-3": "grow-shrink 11s ease-in-out infinite",
      },
      keyframes: {
        "grow-shrink": {
          "0%, 100%": {
            transform: "translateY(-10%) translateX(10%)",
          },
          "50%": { transform: "translateY(10%) translateX(-10%)" },
        },
      },
    },
  },
  plugins: [],
};
