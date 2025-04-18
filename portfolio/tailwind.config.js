// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         slide: {
//           '0%': {
//             transform: 'translateX(100%)',
//             opacity: '0',
//           },
//           '50%': {
//             transform: 'translateX(0)',
//             opacity: '1',
//           },
//           '100%': {
//             transform: 'translateX(-100%)',
//             opacity: '0',
//           },
//         },
//       },
//       animation: {
//         slide: 'slide 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        slide: 'slide 3s ease-in-out infinite',
        marquee: 'marquee 15s linear infinite', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
