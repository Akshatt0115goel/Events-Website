module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':'#892cdc',
        'primaryDark':'#52057b',
        'primaryLight':'#bc6ff1',
        'bgDark':'#000000',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
