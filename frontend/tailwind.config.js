const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
    colors:{
      yellow:{
        light: '#fad046',
        DEFAULT: '#fcc200',
        dark: '#cc9c00'
      },
      purple:{
        light: '#e574fb',
        DEFAULT: '#da39fa',
        dark: '#b706db'
      },
      green:{
        light: '#2dfa9f',
        DEFAULT: '#17ad6a',
        dark: '#107e4d'
      }
    },
    boxShadow: {
      coloredShadow: '0px 0px 20px 2px rgba(229, 116, 251, 0.30)',
      blackShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.30)'
    }
  },
};
