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
          primary: 'var(--color-primary)',
          accent: 'var(--color-accent)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          purple: 'var(--color-purple)',
          cyan: 'var(--color-cyan)',
          'neon-pink': 'var(--color-neon-pink)',
          'neon-green': 'var(--color-neon-green)',
        },
      },
    },
    plugins: [],
  }
  