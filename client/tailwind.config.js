/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram-phone': "url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk')"
      },
      colors: {
        "open-blue": '#0095f6',
        "dark-gray": "#737373",
        'secondary': '#fafafa'
      }
    },
  },
  plugins: [],
}

