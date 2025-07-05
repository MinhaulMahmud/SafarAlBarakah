/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nusuk-teal': '#1a5f5f',
        'nusuk-gold': '#c8860d',
        'nusuk-light-teal': '#2a7373',
        'nusuk-dark-teal': '#144747',
        'nusuk-cream': '#f5f1e8',
        'nusuk-brown': '#8b4513',
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'Arial', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'kaaba': "url('https://images.pexels.com/photos/8181368/pexels-photo-8181368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'makkah': "url('https://images.pexels.com/photos/12688735/pexels-photo-12688735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'madinah': "url('https://images.pexels.com/photos/13590943/pexels-photo-13590943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'pilgrims': "url('https://images.pexels.com/photos/4252827/pexels-photo-4252827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideIn': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}