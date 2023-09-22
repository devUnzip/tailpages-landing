/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      }
    },
    extend: {
      colors: {
        primary: "#17A1B6",
        secondary: "#667085",
        jetblack: "#101828",
        whitesmoke: "#F0FDFA",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        InterMono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        'hero-img': "url('/Images/Container.svg')",
      }
    },
  },
  plugins: [],
};
