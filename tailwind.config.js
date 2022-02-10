module.exports = {
  mode : 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif'],
        great: "'Fredericka the Great', cursive",
        girl: "'Crafty Girls', cursive",
      },
      colors : {
        green : {
          DEFAULT : '#71B214'
        },
        gray : {
          600 : '#606060'
        }
      },
      spacing : {
        13 : '3.25rem',
      },
      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(136, 202, 41, 0.41)',
        big : '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        verybig : '0 50px 70px -25px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
