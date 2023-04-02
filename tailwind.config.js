module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-ember": {
           "l-1" : "#3AF1C3", 
           "l-2" : "#167A6B", 
           "l-3" : "#082E31", 
           "l-4" : "#0E2728" 
        }
      }
    },
  },
  plugins: [],
}