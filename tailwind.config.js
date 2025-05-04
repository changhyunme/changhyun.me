/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // 👈 이거 핵심
    theme: {
      extend: {
        colors: {
          bg: 'var(--color-bg)',
          bgSub: 'var(--color-bgSub)',
          ui: 'var(--color-ui)',
          uiSub: 'var(--color-uiSub)',
          border: 'var(--color-border)',
          shadow: 'var(--color-shadow)',
          text: 'var(--color-text)',
          textSub: 'var(--color-textSub)',
          textShadow: 'var(--color-textShadow)',
          primary: 'var(--color-primary)', // 추가 가능
          accent: 'var(--color-accent)',   // 추가 가능
        },
      },
    },
    plugins: [],
  }
  