/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9f4700ff",
          500: "#1E3A7A",
          50: "#F2F6FB",
        },
        sidebar: {
          bg: '#a5ce5eff',       // Sidebar background
          link: '#F2F6FB',     // Link color
          hover: '#1E3A7A',    // Hover color
        },
      },
    },
  },
  plugins: [],
};
