/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js}",
      // './server/admin/**/*.{html,js}',
      // './server/public/**/*.tpl',
      "./files/**/*.{html,js}",
      "./components/**/*.{html,js}",
      "./style/**/*.{html,js}",
  ],
  theme: {
    colors: {
      primary: '#4f46e5',
      primaryhover: '#60a5fa',
      secondary: '#ecc94b',
      // 'white': '#ffffff',
      // 'blue': {
      //   100: '#dbeafe',
      //   200: '#bfdbfe',
      //   300: '#93c5fd',
      //   400: '#60a5fa',
      //   500: '#3b82f6',
      //   600: '#2563eb',
      //   700: '#1d4ed8',
      //   800: '#1e40af',
      //   900: '#1e3a8a',
      // },
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Inconsolata: ['Inconsolata', 'serif'],
      Arvo: ['Arvo', 'serif'],
      ndot47: ['var(--font-ndot-47)'],
      HindMadurai: ['Hind Madurai', 'serif'],
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    screens: {

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',

      'xs': {'max': '639px'},
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    
  },

  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
};

