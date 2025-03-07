/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
      boxShadow: {
        'blur-bottom': '0 5px 10px rgba(0, 0, 0, 0.5)',
      },
      filter: {
        'blur-10': 'blur(10px)',
      },
    },
  },
  variants: {
    extend: {
      filter: ['before'],
      boxShadow: ['before'],
      inset: ['before'],
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.blur-border-bottom': {
          '@apply relative bg-white z-10': {},
        },
        '.blur-border-bottom::before': {
          content: '""',
          '@apply absolute -left-6 right-0 bottom-[-10px] h-[25px] bg-white': {},
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
          filter: 'blur(10px)',
          borderRadius: 'inherit', 
        },
      };
      addUtilities(newUtilities, ['before']);
    },
  ],
};