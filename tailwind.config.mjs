/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF8800',
                secondary: '#FFB700',
                background: '#0A0A0A',
                surface: {
                    DEFAULT: '#111111',
                    highlight: '#1F1F1F',
                },
                text: {
                    primary: '#EDEDED',
                    secondary: '#A1A1AA',
                    tertiary: '#52525B',
                },
                success: '#10B981',
                error: '#EF4444',
                info: '#3B82F6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 136, 0, 0.15)',
                'glow-strong': '0 0 30px rgba(255, 136, 0, 0.3)',
            },
            backgroundImage: {
                'brand-mesh': 'radial-gradient(circle at 50% 0%, rgba(255,136,0,0.15), transparent 70%)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
