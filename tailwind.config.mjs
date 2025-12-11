/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF8800', // Neon Orange
                secondary: '#FFB700', // Warm Amber
                background: '#050505', // Deep Black
                surface: {
                    DEFAULT: '#0A0A0A', // Card/Sidebar BG
                    hover: '#121212', // Hover State
                },
                border: '#27272A', // Zinc-800
                text: {
                    primary: '#EDEDED', // Zinc-100
                    secondary: '#A1A1AA', // Zinc-400
                    tertiary: '#52525B', // Zinc-600
                },
                success: '#10B981',
                error: '#EF4444',
                info: '#3B82F6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['DynaPuff', 'cursive'],
            },
            boxShadow: {
                'glow': '0 0 20px -5px rgba(255, 136, 0, 0.15)',
                'glow-strong': '0 0 30px -5px rgba(255, 136, 0, 0.3)',
                'neon': '0 0 10px rgba(255, 136, 0, 0.5), 0 0 20px rgba(255, 136, 0, 0.3)',
            },
            backgroundImage: {
                'brand-mesh': 'radial-gradient(circle at 50% -20%, rgba(255, 136, 0, 0.15), transparent 70%)',
                'grid-pattern': "linear-gradient(to right, #27272A 1px, transparent 1px), linear-gradient(to bottom, #27272A 1px, transparent 1px)",
            },
            keyframes: {
                shimmer: {
                    'from': { backgroundPosition: '0 0' },
                    'to': { backgroundPosition: '-200% 0' },
                },
                'fade-in': {
                    'from': { opacity: '0', transform: 'translateY(-10px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'width-grow': {
                    'from': { transform: 'scaleX(0)' },
                    'to': { transform: 'scaleX(1)' },
                }
            },
            animation: {
                shimmer: 'shimmer 2s linear infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'width-grow': 'width-grow 0.3s ease-out',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
