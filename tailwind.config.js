/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        shimmer:{
          "100%": {transform: "translateX(100%)"}   //pomeri element skroz u desno po X
        }
      },
      animation: {
        shimmer: "shimmer 1.5s infinite"  //shimmer odozgo uzmi i pomjeraj 1.5 sekudni i ponavljaj d=beskonacno
      }
    },
  },
  plugins: [],
}