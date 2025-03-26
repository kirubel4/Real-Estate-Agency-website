/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {},
    keyframes: { 
      wiggle: {
        "0%": { transform: "rotate(-3deg)" },
        "100%": { transform: "rotate(3deg)" } 
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" } 
      },
      fadeIn :{
        "0%" :{ opacity :"0" },
        "100%" : { opacity : "1" },
      },
    
    },
    animation: {
      wiggle: "wiggle 1s infinite",
      float: "float 4s ease-in-out infinite",
      fadeIn: "fadeIn 1s ease-in-out"
    },
    

  },

  plugins: [],
}

