/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  safelist: [
    'bg-chart-1',
    'text-chart-1',
    'bg-chart-2',
    'text-chart-2',
    // Add more classes as needed
  ],
  theme: {
    extend: {
      colors: {
          primary: '#f43f5e',
          secondary: '#e11d48',
          "bg-chart-1": "#ff6f61",
      },
      fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
                padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          "2xl": '6rem',
        }
      }
    },
  },
  plugins: [], // Adding the Flowbite plugin here],
  
}

