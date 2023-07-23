/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-border': '#EBEAEA',
        'light-white': '#FAFAFB',
        'light-white-100': '#F1F4F5',
        'light-white-200': '#d7d7d7',
        'light-white-300': '#F3F3F4',
        'light-white-400': '#E2E5F1',
        'light-white-500': '#E4E4E4',
        gray: '#4D4A4A',
        'gray-100': '#3d3d4e',
        'black-100': '#252525',
        'primary-purple': '#9747FF',
        'gray-50': '#D9D9D9',

        'secondary-red': '#B40041',
        'accent-pink': '#F24471',

        'linkedin': '#0072b1',
        'github': '#171515',

        'html': '#f06529',

        'css': '#2965f1',
        'sass': '#cc6699',
        'tailwind': '#67e8f9',

        'javascript': '#ecd120',
        'typescript': '#007acc',

        'react': '#61dbfb',
        'next': '#171515',
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        '10xl': '1680px'
      },
      backgroundImage: {
        'home-texture': "url(/mountains.jpg)",
        'thumbnail-desktop-1': "url(/road-way-delivery__compressed-desktop.jpg)",
        'thumbnail-desktop-2': "url(/9anime-compressed.png)",
        'thumbnail-desktop-3': "url()",
        'thumbnail-desktop-4': "url()",

        'thumbnail-mobile-1-': "url(/9anime-compressed.png)",
        'thumbnail-mobile-2': "url()",
        'thumbnail-mobile-3': "url()",
        'thumbnail-mobile-4': "url()",
      }
    },
  },
  plugins: [],
}
