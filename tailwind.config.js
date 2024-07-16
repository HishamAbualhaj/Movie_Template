/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'main-clr' : '#fd0f20'
      },
      backgroundImage:{
        'mission' :  "url('../images/bg2.png')",
        'jurassic' : "url('../images/jurassic.jpg')",
        'venom' :  "url('../images/venom.png')",
      }
    },
  },
  plugins: [],
}

