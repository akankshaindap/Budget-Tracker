/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      colors: {
        green: '#00D378',
        darkBlue: '#256D96',
        lightBlue: '#75B8FD',
        columbia: '#CDE6FE',
        white: '#FEFEFE',
        grey: '#9FA7A8',
        lightGreen: '#00C467',
        blue:'#034D69'
        
      },
 
      spacing: {
        '99': '30rem',
        '97':'28rem',
       '100':'34rem'
      },
      fontFamily: {
        'sans': [ "Radio Canada Big"],
      
      },
      screens: {
        'xs':'350px',
        'sm': '412px',
        'lg': '1024px',
      }
    }
  },
  plugins: [],

}

