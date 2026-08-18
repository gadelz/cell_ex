/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cell'EX Dark Tech Minimalist Palette
        'cell-bg': '#0A0A0A',        // Background Utama - Hitam pekat
        'cell-text': '#F3F4F6',      // Warna Teks - Putih Tulang
        'cell-emerald': '#10B981',   // Aksen Interaktif - Electric Emerald
        'cell-surface': '#171717',   // Warna Permukaan/Hover - Dark Grey
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'JetBrains Mono', 'Space Mono', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.125rem',   // rounded-sm - 2px
        'none': '0',        // sharp edges
      },
      boxShadow: {
        'emerald': '0 0 0 1px #10B981, 0 0 20px rgba(16, 185, 129, 0.15)',
        'emerald-hover': '0 0 0 1px #10B981, 0 0 30px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}