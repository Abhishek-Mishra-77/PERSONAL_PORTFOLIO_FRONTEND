module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'], // Add the template paths you want to scan for used CSS classes
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          '50': '#e0f7ff',
          '100': '#b3e6ff',
          // ...
          '600': '#0284c7',
          // ...
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

