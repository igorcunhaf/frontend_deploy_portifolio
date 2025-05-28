/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        mytheme: {
          "primary": "#1E3A8A",   // azul escuro: Header e botões principais
          "secondary": "#3B82F6", // azul médio: links, ícones ativos
          "accent": "#3B82F6",
          "neutral": "#9CA3AF",   // cinza neutro
          "base-100": "#F9FAFB",  // fundo branco
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#FBBF24",
          "error": "#EF4444",
        },
      },
    ],
  },
}
