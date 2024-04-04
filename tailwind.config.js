/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['inde.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        'primary' : "#393E46",
        'second' :"#F2F2F2",
        'third' :"#525CEB"
      }
    },
  },
  plugins: [],
}

