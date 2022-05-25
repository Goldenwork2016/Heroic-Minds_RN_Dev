module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {},
      colors: {
         darkGrey: '#1C1C1C',
         lightYellow: '#E9D8A6',
         lightGrey: '#C8C8C8'
      },
      fontSize: {
         '4xl': ['32px', {
            lineHeight: '38px',
         }],
         '2xl': ['24px', { lineHeight: '28px' }],
         'base': ['16px', {
            lineHeight: '19px'
         }],
         'xl': ['20px', {
            lineHeight: '23px'
         }],
         'sm': ['14px', { lineHeight: '16px' }]
      },
      borderRadius: {
         'none': '0',
         'sm': '0.125rem',
         'md': '0.375rem',
         'lg': '0.5rem',
         'full': '9999px',
         'large': '10px',//Custom
         'xl': '12px',
         '2xl': '16px'
      }

   },
   variants: {
      extend: {},
   },
   plugins: [],
}
