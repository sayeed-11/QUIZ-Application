// tailwind.config.js


module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: 'ChakraPetch', // Ensure this matches the font name you set in your font loading
      },
    },
  },
  plugins: [],
}